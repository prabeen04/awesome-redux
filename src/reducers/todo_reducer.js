import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_FAILURE, 
    ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE,
    DELETE_TODO} from '../constants/todo_actiontypes';

const initialState = {
isLoading: true,
isError: false,
posts: []
}
export const todoReducer = (state = initialState, action) => {

switch (action.type) {
    case GET_TODOS:
        console.log(...initialState)
        // return [...state, ...action.payload ];
        return Object.assign({}, state, {
            isLoading: true
        })
    case GET_TODOS_SUCCESS:
        return Object.assign({}, state, {
            isLoading: false,
            TODOS: action.payload
        })
    case GET_TODOS_FAILURE:
        return Object.assign({}, state, {
            isLoading: false,
            isError: true
        })
    // add post section
    // case ADD_POST:
    //     return Object.assign({}, state, {
    //         isLoading: true
    //     })
    // case ADD_POST_SUCCESS:
    //     return Object.assign({}, state, {
    //         isLoading: false
    //     })
    // case ADD_POST_FAILURE:
    //     return Object.assign({}, state, {
    //         isLoading: false,
    //         isError: true
    //     })
    // // delete post section
    // case DELETE_POST:
    //     return Object.assign({}, state, {
    //         isLoading: true
    //     })
    // case DELETE_POST_SUCCESS:
    //     return Object.assign({}, state, {
    //         isLoading: false
    //     })
    // case DELETE_POST_FAILURE:
    //     return Object.assign({}, state, {
    //         isLoading: false,
    //         isError: true
    //     })
}

return state;
}