import { call, put } from 'redux-saga/effects';
import { setPhoto, getPhoto,  } from '../../reducers/index';
import { requestGetPhoto, requestGetPhotoBYId, requestAddPhoto } from '../requests/index';

export function* handleGetPhoto(action) {
  try {
    const response = yield call(requestGetPhoto);
    const { data } = response;
    // console.log(data,'=============[...data]')
    // if (response.status === 200) {
      yield put(setPhoto(data.photos));
    // }
  } catch (error) {
    console.log(error)
  }
}

export function* handleGetPhotoByID(action) {
  try {
    console.log(action.payload,'======action=======')
    const response = yield call(requestGetPhotoBYId,action.payload);

    const { data } = response;
    console.log(response)
    console.log(data.photo,"-----handle-----data")
    // if (response.status === 200) {
    //   yield put(setPhoto(data.photo));
    // }
  } catch (error) {
    console.log(error)
  }
}


export function* handleAddPhoto(action) {
  try {
    const response = yield call(requestAddPhoto, action.payload);
    console.log(response,'=========add')

    // const { data } = response.data;
    // if (response.status === 200) {
    //   yield put(addPhoto(data));
    // }
  } catch (error) {
    console.log(error)
  }
}


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
