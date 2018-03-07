import React, { Component } from 'react';
import store from '../src/store/index';
import { connect } from 'react-redux';
import { addUser }  from './actions/user_action';
import UserList from './container/user_list';
import UserDetail from './container/user_detail';
import AddUser from './container/add_user';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <UserList/>
        <hr/>
        <UserDetail/>
        <hr/>
        <AddUser/>
        <hr/>
      </div>
    );
  }
}
export default App;
