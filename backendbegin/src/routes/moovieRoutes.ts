import express, { Request, Response } from 'express'
const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  res.json({httpMethod: "get"})
})
router.post('/', async (req: Request, res: Response) => {
  res.json({httpMethod: "post"})
})
router.put('/', async (req: Request, res: Response) => {
  res.json({httpMethod: "put"})
})
router.delete('/', async (req: Request, res: Response) => {
  res.json({httpMethod: "delete"})
})



export default router