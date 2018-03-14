import axios from 'axios';
import { ADD_USER, GET_ALL_USER, SELECTED_USER, DELETE_USER } from '../constants/user_actiontypes'

export const addUser = (user) => {  
    return (dispatch) => {
      return axios.post('https://prabeen-restapi.herokuapp.com/api/users', {...user})
        .then(response => {
            dispatch(getUsers())
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  export const deleteUser = (_id) => {  
    return (dispatch) => {
      return axios.delete(`https://prabeen-restapi.herokuapp.com/api/users/${_id}`, {_id})
        .then(response => {
            dispatch(getUsers())
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  export const editUser = (_id, payload) => {  
    return (dispatch) => {
      return axios.put(`https://prabeen-restapi.herokuapp.com/api/users/${_id}`, {payload})
        .then(response => {
            dispatch(getUsers())
        })
        .catch(error => {
          throw(error);
        });
    };
  };  
export const getUsers = () => {
    return (dispatch) =>{
        dispatch({
            type: GET_ALL_USER,
            users: [],
            isLoading: true,
            noData: false
        })
        axios.get('https://prabeen-restapi.herokuapp.com/api/users')
        // .then(res =>  res.json() )
        .then(users => {
            dispatch({
                type: GET_ALL_USER,
                users: users.data,
                isLoading: false,
                noData: false
            })
        })
        .catch(err =>{
            console.log(err.message)
            dispatch({
                type: GET_ALL_USER,
                users: [],
                isLoading: false,
                noData: true
            })
        });
    }
}
export const selectedUser = (user) => {
    return {
        type: SELECTED_USER,
        user: user
    }
}