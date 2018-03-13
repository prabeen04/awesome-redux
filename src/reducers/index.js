import { combineReducers } from 'redux';
import { userReducer, selectedReducer }  from './user_reducer';
import { postReducer } from './post_reducer';

export const rootReducer = combineReducers({
    users: userReducer,
    selectedUser: selectedReducer,
    posts: postReducer
})

export default rootReducer;