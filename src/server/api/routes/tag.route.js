import express from 'express';
import {
  create,
  getOne,
  getMany,
  getOneById
} from '../controllers/tag.controller';

const router = express.Router();

router.post('/', create);
router.get('/many', getMany);
router.get('/by-name', getOne);
router.get('/:_id', getOneById);

export default router;

