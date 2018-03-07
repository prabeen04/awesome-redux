import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/index';
import thunk from 'redux-thunk';
import { userReducer } from '../reducers/user_reducer';
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;