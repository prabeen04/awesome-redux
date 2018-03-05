export const userReducer = function () {
    return [
        { name: "prabeen" },
        { name: "pogba" },
        { name: "mata" },
        { name: "herera" }
    ]
}

export const selectedReducer = function (state = {name: 'prabeen'}, action) {
    switch(action.type){
        case 'SELECTED_USER':
            return action.user
    }
    return state;
}
