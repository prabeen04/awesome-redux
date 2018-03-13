import axios from 'axios';
import { GET_POSTS } from '../constants/posts_actiontypes';

export const getPosts = () => {
    let baseURL = 'http://localhost:8080/api/posts';
    let request = axios.get(baseURL);
    return ({
        type: GET_POSTS,
        payload: request
    })
}