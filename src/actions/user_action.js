
// import { ADD_USER } from '../constants/action_types'

export const addUser = (user) => {
    console.log(user)
    return {
        type: 'ADD_USER',
        user: user
    }
}

export const getUsers = (user) => {
    console.log(user)
    return {
        type: 'GET_ALL_USER',
        user: user
    }
}
export const selectedUser = (user) => {
    console.log(user)
    return {
        type: 'SELECTED_USER',
        user: user
    }
}