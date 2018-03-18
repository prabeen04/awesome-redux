import axios from 'axios';
import { ADD_USER, GET_ALL_USER, SELECTED_USER, DELETE_USER } from '../constants/user_actiontypes'

const base_url = 'https://prabeen-restapi.herokuapp.com/api/users';

export const addUser = (user) => {  
    return (dispatch) => {
      return axios.post(`${base_url}`, {...user})
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
      return axios.delete(`${base_url}/${_id}`, {_id})
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
      return axios.put(`${base_url}/${_id}`, {payload})
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
        axios.get(`${base_url}`)
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