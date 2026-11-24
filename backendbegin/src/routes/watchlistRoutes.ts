import express from 'express'
import { addToWatchList, removeFromWatchList, updateWatchListItem } from '../controllers/watchlistController'
import { authMiddleware } from '../middleware/authMiddleware'
import { validateRequest } from '../middleware/validateRequest'
import { addTowatchlostSchema } from '../validators/watchlistValidators'
const router = express.Router()

router.use(authMiddleware)
router.post("/", validateRequest(addTowatchlostSchema),addToWatchList) 
router.put("/:id",updateWatchListItem)
router.delete("/:id",removeFromWatchList)






export default router;