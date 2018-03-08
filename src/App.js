import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import store from '../src/store/index';
import { connect } from 'react-redux';
import { addUser } from './actions/user_action';
import Navbar from './components/layouts/navbar/navbar';
import Dashboard from './container/dashboard/dashboard';
import Settings from './container/settings/settings';
import Approval from './container/approval/approval';
import Team from './container/team/team';
import Payout from './container/payout/payout';
import NotFound from './container/notfound/notfound';
import UserList from './container/user_list';
import UserDetail from './container/user_detail';
import AddUser from './container/add_user';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ position: 'fixed' }} />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/approval" component={Approval} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/payout" component={Payout} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}
export default App;
