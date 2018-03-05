import { combineReducers } from 'redux';
import  {userReducer}  from './user_reducer'
export const rootReducer = combineReducers({
    users: userReducer
})

export default rootReducer;