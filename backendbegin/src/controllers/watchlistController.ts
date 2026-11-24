import { Request, Response } from "express"
import { db } from '../prisma/db'

const addToWatchList = async (req:Request, res:Response) => {
    const {movieId, status,rating,notes} = req.body
  //Verify movieId exists
  const movie = await db.orm.public.Movie.where({id:movieId}).first()
  if(!movie){
    return res.status(404).json({message:"Movie does not find"})
  }
//   Check if already added
const existingInWatchlist = await db.orm.public.WatchlistItem.where({movieId:movieId,userId:req.user.id}).first()
if(existingInWatchlist){
  return res.status(400).json({message:"Movie already in watchlist"})
}
const watchlistItem = await db.orm.public.WatchlistItem.create({

    userId:req.user.id,
    movieId:movieId,
    status:status || "PLANNED",
    rating:rating,
    notes:notes,
  
})
return res.status(201).json({status:"Success",data:watchlistItem})
}

const removeFromWatchList = async (req:Request, res:Response) =>{

  // find watchlist  item and verify ownership
  const watchlistItem = await db.orm.public.WatchlistItem.where({id:req.params.id as string}).first()
  if(!watchlistItem){
    return res.status(404).json({message:"Watchlist item not found"})
  }
  if(watchlistItem.userId !== req.user.id){
    return res.status(403).json({error:"Not authorized to delete this watchlist item"})
  }
  await db.orm.public.WatchlistItem.where({id:req.params.id as string}).delete()
  return res.status(200).json({status:"success",message:"Watchlist item deleted"})
  }

  const updateWatchListItem = async (req:Request, res:Response) =>{
    const {id} = req.params
    const {status,rating,notes} = req.body
    const watchlistItem = await db.orm.public.WatchlistItem.where({id:req.params.id as string}).first()
    if(!watchlistItem){
      return res.status(404).json({error:"Watchlist item not found"})
    }
    if(watchlistItem.userId !== req.user.id){
      return res.status(403).json({error:"Not authorized to update this watchlist item"})
    }
    await db.orm.public.WatchlistItem.where({id:req.params.id as string}).update({
      status:status || "PLANNED",
      rating:rating,
      notes:notes,
    })
    return res.status(200).json({status:"success",message:"Watchlist item updated"})
  }


export {addToWatchList, removeFromWatchList,updateWatchListItem}
