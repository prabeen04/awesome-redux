import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_FAILURE, ADD_TODO, DELETE_TODO, EDIT_TODO } from '../constants/todo_actiontypes';

const todoUrl = 'https://prabeen-restapi.herokuapp.com/api/todo';

export const getTodos = () => {
    return (dispatch) => {
        dispatch({
            type: GET_TODOS
        })
        return axios.get(`${baseURL}`)
            .then(response => {
                dispatch({
                    type: GET_TODOS_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_TODOS_FAILURE
                })
            });
    }
    // let request = axios.get(baseURL);
    // return ({
    //     type: GET_POSTS,
    //     payload: request
    // })
}

export const deleteTodo = (todo_id) => {
    console.log(todo_id)
    return (dispatch) => {
        dispatch({
            type: DELETE_POST
        })
        return axios.delete(`${baseURL}/${todo_id}`,{todo_id})
            .then(response => {
                dispatch(getTodos())
            })
            .catch(error => {
                console.log(error)
            });
    }
}