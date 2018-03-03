import React, { Component } from 'react';
import store from '../src/store/index';
import { connect } from 'react-redux';
import { addUser }  from './actions/user_action';
import UserList from './container/user_list';
import UserDetail from './container/user_detail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList/>
        <UserDetail/>
      </div>
    );
  }
}

window.store = store;
window.addUser = addUser;
store.subscribe(() => console.log('Look ma, Redux!!'))
export default App;
