import { combinedReducers } from 'redux';
import { userReducer } from './user_reducer'
export const rootReducer = combinedReducers({
    users: userReducer
})

export default rootReducer;