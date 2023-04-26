import { createLike } from '../controller/like.js'
import express from 'express'
const router = express.Router()

/* READ */

/* CREATE */
router.post('/', createLike)
/* UPDATE */

/* DELETE
router.delete('/:id', deleteLike) */

export default router
