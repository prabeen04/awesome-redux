
import { ADD_USER, REMOVE_USER, UPDATE_USER} from '../constants/action_types'

export const addUser = (user) => 
            ({
                type: ADD_USER,
                user: user
            })