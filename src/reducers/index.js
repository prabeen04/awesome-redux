import { combineReducers } from 'redux';
import  {userReducer, selectedReducer}  from './user_reducer'
export const rootReducer = combineReducers({
    users: userReducer,
    selectedUser: selectedReducer
})

export default rootReducer;