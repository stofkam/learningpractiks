import express, { Request, Response } from 'express'
import { db } from './prisma/db'

const app = express()

app.use(express.json()) 

app.post('/', async (req: Request, res: Response) => {
  const user = await db.orm.public.User.create({
    name: 'Jon',
    email: 'jon@example.com',
    username: 'jon',
    
  })
  res.send({data: user})
})
app.post('/create-post', async (req: Request, res: Response) => {
  const post = await db.orm.public.Post.create({
    title: 'My first post',
    content: 'This is my first post',
    authorId: '812fabbb-2749-4a24-82ab-5559c5dce7d4',
  })
  res.send({data: post})
})
app.get('/get', async (req: Request, res: Response) => {
  const user = await db.orm.public.User.select("id","name").all()
  // const user = await db.orm.public.User.where({name:"Soft"}).all()
  // const user = await db.orm.public.User.orderBy((user)=>user.name.asc()).offset(1).limit(2).all()
  // const user = await db.orm.public.User.include("posts").all()
  // const post = await db.orm.public.Post.include("author").all()

//  const data = await db.transaction(async (tx) => {
//    await tx.orm.public.User.where({id:"3b121ea8-b2cc-42ed-a406-f3278b366562"}).update({
//       name: 'Ron is updated',
//       email: 'ronupd@example.com',
//     });
//  await  tx.orm.public.User.where({id:"3b121ea8-b2cc-42ed-a406-f3278b366562"}).update({
//        email: 'ronupd@example.com',
      
//     });
//   })

  res.send({data: user})
  // res.send({data})
  
})
app.patch('/update', async (req: Request, res: Response) => {
  const userUpdate = await db.orm.public.User.where({id:"bc9f2bf5-19ef-4fea-9ba6-beb2f238ef12"}).update({
    name: 'Stoff is updated',
    email: 'stoffupd@example.com',
    
  })

  res.send({data: userUpdate})
})
app.delete('/delete', async (req: Request, res: Response) => {
  const userDelete = await db.orm.public.User.where({id:"bc9f2bf5-19ef-4fea-9ba6-beb2f238ef12"}).delete()

  res.send({data: userDelete})
})

app.listen(5000, () => {
  console.log('Server is running on port 3000')
})

// https://www.youtube.com/watch?v=6WUl11LD_wM
// https://www.youtube.com/watch?v=g09PoiCob4Y