import axios from 'axios';
// import { ADD_USER } from '../constants/action_types'

export const addUser = (user) => {
    console.log(user)
    return {
        type: 'ADD_USER',
        user: user
    }
}

export const getUsers = () => {
    return (dispatch) =>{
        axios.get('https://prabeen-restapi.herokuapp.com/api/users')
        // .then(res =>  res.json() )
        .then(users => {
            console.log(users)
            dispatch({
                type: 'GET_ALL_USER',
                users: users.data
            })
        })
        .catch(err =>{
            console.log(err.message)
        });
    }
}
export const selectedUser = (user) => {
    console.log(user)
    return {
        type: 'SELECTED_USER',
        user: user
    }
}