import { createStore } from 'redux';

users = (state = 0, action) => {
    return [
        {name: 'prabeen', age: 27},
        {name: 'pogba', age: 27},
        {name: 'mata', age: 30},
        {name: 'degea', age: 26},
    ]
}

let store = createStore(users);