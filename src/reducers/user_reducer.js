export const userReducer =  () => {
    let apiUsers = [];
    fetch('https://prabeen-restapi.herokuapp.com/api/register')
    .then(res => res.json())
    .then(users => {
        console.log(users)
         apiUsers = users
    })
    .catch(err =>{
        console.log(err)
    });
    return apiUsers;
}

export const selectedReducer = function (state = {name: 'prabeen'}, action) {
    switch(action.type){
        case 'SELECTED_USER':
            return action.user
    }
    return state;
}
