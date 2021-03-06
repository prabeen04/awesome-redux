import axios from 'axios';
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, 
        ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
        DELETE_POST } from '../constants/posts_actiontypes';

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
        return axios.post(`${baseURL}`,post)
            .then(response => {
                console.log(response.data)
                dispatch(getPosts())
            })
            .catch(error => {
                dispatch({
                    type: ADD_POST_FAILURE
                })
            });
    }
}

export const deletePost = (post_id) => {
    console.log(post_id)
    return (dispatch) => {
        dispatch({
            type: DELETE_POST
        })
        return axios.delete(`${baseURL}/${post_id}`,{post_id})
            .then(response => {
                dispatch(getPosts())
            })
            .catch(error => {
                console.log(error)
            });
    }
}