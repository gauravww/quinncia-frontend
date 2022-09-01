import { takeLatest } from "redux-saga/effects";
import {
  getPhoto,
  getPhotoById,
  addPhoto,
  updatePhotoInfo,
  removePhoto,
} from "../reducers/index";
import { getCommentById,createComment } from "../reducers/commentReducer/comment";

import {
  handleGetPhoto,
  handleGetPhotoByID,
  handleAddPhoto,
  handleUpdatePhotoInfo,
  handleRemovePhotoByID,
  handleGetCommentByID,
  handleCreateComment,
  handleCreateTag,
  handleGetTagById,
} from "./handlers/index";
import { createTag, getTagById } from "../reducers/tagReducer/tag";

export function* watcherSaga() {
  yield takeLatest(getPhoto.type, handleGetPhoto);
  yield takeLatest(getPhotoById.type, handleGetPhotoByID);
  yield takeLatest(getCommentById.type, handleGetCommentByID);
  yield takeLatest(addPhoto.type, handleAddPhoto);
  yield takeLatest(removePhoto.type, handleRemovePhotoByID);
  yield takeLatest(updatePhotoInfo.type, handleUpdatePhotoInfo);
  yield takeLatest(createComment.type, handleCreateComment);
  yield takeLatest(createTag.type, handleCreateTag);
  yield takeLatest(getTagById.type, handleGetTagById);
}
