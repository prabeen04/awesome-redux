import axios from 'axios';
// import { ADD_USER } from '../constants/action_types'

export const addUser = (user) => {
    return (dispatch) => {
      return axios.post('https://prabeen-restapi.herokuapp.com/api/users', user)
        .then(response => {
          // Dispatch a synchronous action
          // to handle data
          dispatch(addUser(response.data, ))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
export const getUsers = () => {
    return (dispatch) =>{
        axios.get('https://prabeen-restapi.herokuapp.com/api/users')
        // .then(res =>  res.json() )
        .then(users => {
            console.log(users)
            dispatch({
                type: 'GET_ALL_USER',
                users: users.data,
                isLoading: false,
                noData: false
            })
        })
        .catch(err =>{
            console.log(err.message)
            // dispatch({
            //     type: 'GET_ALL_USER',
            //     isLoading: false,
            //     noData: true

            // })
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