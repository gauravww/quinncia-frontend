import { takeLatest } from "redux-saga/effects";
import { getPhoto, getPhotoById, addPhoto } from "../reducers/index";
import {
  handleGetPhoto,
  handleGetPhotoByID,
  handleAddPhoto,
} from "./handlers/index";

export function* watcherSaga() {
  yield takeLatest(getPhoto.type, handleGetPhoto);
  yield takeLatest(getPhoto.type, handleGetPhotoByID);
  yield takeLatest(addPhoto.type, handleAddPhoto);
}
