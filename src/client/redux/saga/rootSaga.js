import { takeLatest } from "redux-saga/effects";
import { getPhoto } from "../reducers/index"
import { handleGetPhoto, handleCreateUser, handleDeleteUser, handleUpdateUser } from "./handlers/index";


export function* watcherSaga() {
  yield takeLatest(getPhoto.type, handleGetPhoto);
  // yield takeLatest(createUser.type, handleCreateUser);
  // yield takeLatest(deleteUser.type, handleDeleteUser);
  // yield takeLatest(updateUser.type, handleUpdateUser);
}


