export const userReducer = function () {
    fetch('https://prabeen-restapi.herokuapp.com/api/reister')
    .then(res =>(res => res.json())
    .then(users =>{
        console.log(users)
        return users
    })
    .catch(err =>{
        console.log(err)
    })
    // return [
    //     { name: "prabeen" },
    //     { name: "pogba" },
    //     { name: "mata" },
    //     { name: "herera" }
    // ]
}

export const selectedReducer = function (state = {name: 'prabeen'}, action) {
    switch(action.type){
        case 'SELECTED_USER':
            return action.user
    }
    return state;
}
