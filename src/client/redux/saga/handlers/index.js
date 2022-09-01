import { call, put } from 'redux-saga/effects';
import { setPhoto, getPhoto,addPhoto} from '../../reducers/index';
import { requestGetPhoto, requestGetPhotoBYId, requestAddPhoto, requestUpdatePhotoInfo, requestDeletePhotoBYId, requestCommentById,requestCreateComment,requestCreateTag, requestGetTagById} from '../requests/index';

import { setComment ,appendComment} from '../../reducers/commentReducer/comment'
import { appendTag,setTag } from '../../reducers/tagReducer/tag';

export function* handleGetPhoto(action) {
  try {
    const response = yield call(requestGetPhoto);
    const { data } = response;

    if (data.success === true) {
      yield put(setPhoto(data.photos));
    }
  } catch (error) {
    console.log(error)
  }
}

export function* handleGetPhotoByID(action) {
  try {
    const response = yield call(requestGetPhotoBYId, action.payload);

    const { data } = response;
    if (data.success === true) {
      yield put(setPhoto(data.photo));
    }
  } catch (error) {
    console.log(error)
  }
}

export function* handleGetCommentByID(action) {
  try {
    const response = yield call(requestCommentById, action.payload);
    yield put(setComment(response));
  } catch (error) {
    console.log(error)
  }
}

export function* handleCreateComment(action) {
  try {
    const response = yield call(requestCreateComment, action.payload);

    const { data } = response;
    yield put(appendComment(data.comment));
  } catch (error) {
    console.log(error)
  }
}


export function* handleCreateTag(action) {
  try {
    const response = yield call(requestCreateTag, action.payload);
    yield put(appendTag(response));
  } catch (error) {
    console.log(error)
  }
}


export function* handleGetTagById(action) {
  try {
    const response = yield call(requestGetTagById, action.payload);
    yield put(setTag(response));
  } catch (error) {
    console.log(error)
  }
}




export function* handleRemovePhotoByID(action) {
  try {
    const response = yield call(requestDeletePhotoBYId, action.payload);

    const { data } = response;
    if (data.success === true) {
      yield put(setPhoto(data.photo));
    }
  } catch (error) {
    console.log(error)
  }
}

export function* handleAddPhoto(action) {
  try {
    const response = yield call(requestAddPhoto, action.payload);
    yield put(getPhoto());
  } catch (error) {
    console.log(error)
  }
}

export function* handleUpdatePhotoInfo(action) {
  try {
    const response = yield call(requestUpdatePhotoInfo, action.payload);
  } catch (error) {
    console.log(error)
  }
}
