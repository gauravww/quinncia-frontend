import { call, put } from 'redux-saga/effects';
import { setPhoto, getPhoto } from '../../reducers/index';
import { requestGetPhoto, requestCreateUser, requestDeleteUser, requestUpdateUser } from '../requests/index';

export function* handleGetPhoto(action) {
  try {
    const response = yield call(requestGetPhoto);
    const { data } = response;
    // if (response.status === 200) {
      yield put(setPhoto(data));
    // }
  } catch (error) {
    console.log(error)
  }
}


// export function* handleCreatePhoto(action) {
//   try {
//     const response = yield call(requestCreatePhoto, action.payload);

//     const { data } = response;
//     if (response.status === 200) {
//       yield put(setUser(data));
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }


// export function* handleDeletePhoto(action) {
//   try {
//     const response = yield call(requestDeleteUser, action.payload);

//     if (response.status === 200) {
//       yield put(getUser());
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }


// export function* handleUpdatePhoto(action) {
//   try {
//     const response = yield call(requestUpdateUser, action.payload);

//     if (response.status === 200) {
//       yield put(getUser());
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }
