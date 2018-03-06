
// import { ADD_USER } from '../constants/action_types'

export const addUser = (user) => {
    console.log(user)
    return {
        type: 'ADD_USER',
        user: user
    }
}

export const getUsers = () => {
    console.log('inside getUsers action')
    return (dispatch) =>{
        console.log('inside fetchapi')
        fetch('https://prabeen-restapi.herokuapp.com/api/register')
        .then(res => {
            console.log(res)
            return res.json()
        } )
        .then(users => {
            console.log('inside dispatch action')
            dispatch({
                type: 'GET_ALL_USER',
                users: users
            })
        })
        .catch(err =>{
            console.log('inside catch handler')
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