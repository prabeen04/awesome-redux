// export const userReducer =  () => {
//     let apiUsers = [];

//     return apiUsers;
// }

// get users on componentDidMount
export const userReducer = function (state = [], action) {
    console.log(action)
    switch(action.type){
        case 'GET_ALL_USER':
            return {users: [...state, ...action.users], isLoading: action.isLoading, noData: action.noData }
    }
    return state;
}

export const selectedReducer = function (state = {name: 'prabeen'}, action) {
    switch(action.type){
        case 'SELECTED_USER':
            return action.user
    }
    return state;
}

 export const addUserSuccess = (user) => {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    user
  }
};