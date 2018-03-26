import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import store from '../src/store/index';
import { connect } from 'react-redux';
import { addUser } from './actions/user_action';
import Navbar from './components/layouts/navbar/navbar';
import Dashboard from './container/dashboard/dashboard';
import Posts from './container/post/post';
import Todo from './container/todo/todo';
import NotFound from './container/notfound/notfound';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ position: 'fixed' }} />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/todo" component={Todo} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}
export default App;
