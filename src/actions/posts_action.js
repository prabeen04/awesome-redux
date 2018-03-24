import axios from 'axios';
import { GET_POSTS, ADD_POST } from '../constants/posts_actiontypes';

const baseURL = 'https://prabeen-restapi.herokuapp.com/api/posts';

export const getPosts = () => {
    let request = axios.get(baseURL);
    return ({
        type: GET_POSTS,
        payload: request
    })
}

export const addPost = (post) => {
    let request = axios.post(baseURL, post);
    return ({
        type: GET_POSTS,
        payload: request
    })
}