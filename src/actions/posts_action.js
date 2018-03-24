import axios from 'axios';
import { GET_POSTS } from '../constants/posts_actiontypes';

const baseURL = 'https://prabeen-restapi.herokuapp.com/api/posts';

export const getPosts = () => {
    let request = axios.get(baseURL);
    return ({
        type: GET_POSTS,
        payload: request
    })
}

export const addpost = (post) => {
    let request = axios.post(baseURL, post);
    return ({
        type: GET_POSTS,
        payload: request
    })
}