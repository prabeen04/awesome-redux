
// import { ADD_USER } from '../constants/action_types'

export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        user: user
    }
}