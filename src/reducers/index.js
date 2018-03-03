// import ADD_USER from '../constants/action_types'

const initialState = {
    users:[
        {id: 1, name: "prabeen"},
        {id: 2, name: "pogba"},
        {id: 3, name: "mata"},
        {id: 4, name: "herera"},
    ]
}
export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_USER': 
          return { ...state, users: [...state.users, action.payload] };
        default :
            return state;
    }
    
}
