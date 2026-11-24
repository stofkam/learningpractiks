import {z} from "zod";

const addTowatchlostSchema = z.object({
    movieId:z.uuid(),
    status:z.enum(["PLANNED","WATCHING","COMPLETED","DROPPED"],{
        error:()=>({
            message:"Status must be one of PLANNED,WATCHING,COMPLETED,DROPPED",
        })
    }).optional(),
    rating:z.coerce.number().int("Rating must be an integer").min(1,"Rating must be at least 1 and 10").max(10,"Rating must be at most 10").optional(),
    notes:z.string().optional()
  
})

export {addTowatchlostSchema}
