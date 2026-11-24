import express from 'express'
import movieRoutes from './routes/moovieRoutes'
import authRoutes from './routes/authRoutes'
import watchlistRoutes from './routes/watchlistRoutes'
import env from 'dotenv'

env.config()

// import { db } from './prisma/db'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/movies', movieRoutes)
app.use('/auth', authRoutes)
app.use('/watchlist', watchlistRoutes)





app.listen(5000, () => {
  console.log('Server is running on port 3000')
})

// https://www.youtube.com/watch?v=6WUl11LD_wM
// https://www.youtube.com/watch?v=g09PoiCob4Y