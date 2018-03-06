
// import { ADD_USER } from '../constants/action_types'

export const addUser = (user) => {
    console.log(user)
    return {
        type: 'ADD_USER',
        user: user
    }
}

export const getUsers = (user) => {
    return (dispatch) =>{
        fetch('https://prabeen-restapi.herokuapp.com/api/register')
        .then(res => res.json())
        .then(users => {
            dispatch({
                type: 'GET_USERS',
                action: users
            })
        })
        .catch(err =>{
            console.log(err)
        });
    }
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