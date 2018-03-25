import {
    GET_POSTS,
    ADD_POST
} from '../constants/posts_actiontypes';

const initialState = {
    isLoading: true,
    isError: false,
    posts: []
}
export const postReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_POSTS:
        return [...state, ...action.payload ];
    }
    switch (action.type){
        case ADD_POST:
        return [...state, ...action.payload ];
    }
    return state;
}