import multer from 'multer';
import express from 'express';
import path from 'path'
import {
  create,
  update,
  getOne,
  getContent,
  getMany,
  remove,
  attachTags,
} from '../controllers/photo.controller';

import upload from '../utils/fileUpload';
const router = express.Router();

router.post('/', upload.single("profile"), create);
router.put('/:_id/tags/attach', attachTags);
router.put('/:_id', update);
router.get('/content/:id', getContent);
router.get('/many', getMany);
router.get('/:_id', getOne);
router.delete('/:_id', remove);

export default router;
