import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, 
    ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE,} from '../constants/posts_actiontypes';

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
    // add post section
    case ADD_POST:
        return Object.assign({}, state, {
            isLoading: true
        })
    case ADD_POST_SUCCESS:
        return Object.assign({}, state, {
            isLoading: false
        })
    case ADD_POST_FAILURE:
        return Object.assign({}, state, {
            isLoading: false,
            isError: true
        })
    // delete post section
    case DELETE_POST:
        return Object.assign({}, state, {
            isLoading: true
        })
    case DELETE_POST_SUCCESS:
        return Object.assign({}, state, {
            isLoading: false
        })
    case DELETE_POST_FAILURE:
        return Object.assign({}, state, {
            isLoading: false,
            isError: true
        })
}

return state;
}