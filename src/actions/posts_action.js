import axios from 'axios';
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE, } from '../constants/posts_actiontypes';

const baseURL = 'https://prabeen-restapi.herokuapp.com/api/posts';

export const getPosts = () => {
    return (dispatch) => {
        dispatch({
            type: GET_POSTS
        })
        return axios.get(`${baseURL}`)
            .then(response => {
                dispatch({
                    type: GET_POSTS_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_POSTS_FAILURE
                })
            });
    }
    // let request = axios.get(baseURL);
    // return ({
    //     type: GET_POSTS,
    //     payload: request
    // })
}

export const addPost = (post) => {
    return (dispatch) => {
        dispatch({
            type: ADD_POST
        })
        return axios.get(`${baseURL}`,post)
            .then(response => {
                dispatch({
                    type: ADD_POST_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: ADD_POST_FAILURE
                })
            });
    }
}