// import ADD_USER from '../constants/action_types'

const initialState = {
    users:[]
}
export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_USER': 
          return { ...state, users: [...state.users, action.payload] };
        default :
            return state;
    }
    
}
