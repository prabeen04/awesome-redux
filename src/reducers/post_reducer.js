import {
    GET_POSTS
} from '../constants/posts_actiontypes';

export const postReducer = (state=[], action) => {
    console.log(action.payload)
    switch (action.type){
        case GET_POSTS:
        return [...state, ...action.payload ]
    }
    return state;
}