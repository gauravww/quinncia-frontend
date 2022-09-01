
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './saga/rootSaga';
import photoReducer from "./reducers/index";
import comment from './reducers/commentReducer/comment';
import tag from './reducers/tagReducer/tag';


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  photo:photoReducer,
  comment:comment,
  tag:tag
});
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const store = configureStore({
  reducer,
  middleware: [...customizedMiddleware, sagaMiddleware]
});

sagaMiddleware.run(watcherSaga);

export default store;