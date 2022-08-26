// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware, compose } from 'redux';
// import photoReducer from "../redux/reducers/index";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default (state = {}) => createStore(
//   photoReducer,
//   state,
//   composeEnhancers(applyMiddleware(thunk)),
// );

import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './saga/rootSaga';
import photoReducer from "../redux/reducers/index";


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  photo:photoReducer
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