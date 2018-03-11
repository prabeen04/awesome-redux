import { GET_ALL_USER, SELECTED_USER, ADD_USER_SUCCESS } from '../types/user_actiontypes';

export const userReducer = function (state = {
                                    users:[],
                                    isLoading:false,
                                    noData: false
                                }, action) {
    switch(action.type){
        case GET_ALL_USER:
            return {
                users: [...state, ...action.users],
                isLoading: action.isLoading,
                noData: action.noData }
    }
    return state;
}

export const selectedReducer = function (state = {name: 'prabeen'}, action) {
    switch(action.type){
        case SELECTED_USER:
            return action.user
    }
    return state;
}

export const addUserSuccess = (state, action) => {
    switch(action.type){
        case ADD_USER_SUCCESS:
            return state;
        default: 
         return state    
    }
}