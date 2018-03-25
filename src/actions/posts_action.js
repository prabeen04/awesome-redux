import axios from 'axios';
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, ADD_POST } from '../constants/posts_actiontypes';

const baseURL = 'https://prabeen-restapi.herokuapp.com/api/posts';

export const getPosts = () => {
    return (dispatch) => {
        dispatch({
            type: GET_POSTS
        })
        return axios.get(`${base_url}`)
            .then(users => {
                dispatch({
                    type: GET_POSTS_SUCCESS,
                    payload: users
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
    let request = axios.post(baseURL, post);
    return ({
        type: GET_POSTS,
        payload: request
    })
}