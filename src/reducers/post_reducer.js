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

    switch (action.type) {
        case GET_POSTS:
            console.log(...initialState)
            // return [...state, ...action.payload ];
            return Object.assign({}, state, {
                isLoading: true
            })
        case GET_POSTS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                posts: action.payload
            })
        case GET_POSTS_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                isError: true
            })
    }
    switch (action.type) {
        case ADD_POST:
            return [...state, ...action.payload];
    }
    return state;
}