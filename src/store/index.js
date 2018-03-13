import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/index';
import thunk from 'redux-thunk';
import { AsyncMiddleware } from '../middlewares/async'

const store = createStore(rootReducer, applyMiddleware(thunk), applyMiddleware(AsyncMiddleware));

export default store;