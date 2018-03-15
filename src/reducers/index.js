import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { userReducer, selectedReducer }  from './user_reducer';
import { postReducer } from './post_reducer';

export const rootReducer = combineReducers({
    users: userReducer,
    selectedUser: selectedReducer,
    posts: postReducer,
    form: FormReducer
})

export default rootReducer;