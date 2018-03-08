import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  }
};

const NavMenu = (props) => (
  <div>
    <Paper style={style.paper}>
      <Menu desktop={false}>
        <Link to="/"><MenuItem onClick={props.handleToggle} style={{ color: 'tomato' }} primaryText="Dashboard" leftIcon={<i class="material-icons">dashboard</i>} /></Link>
        <Link to="/settings"><MenuItem onClick={props.handleToggle} primaryText="Settings" leftIcon={<i class="material-icons">settings</i>} /></Link>
        <Link to="/approval"><MenuItem onClick={props.handleToggle} primaryText=" Approvals  &nbsp; &nbsp;" leftIcon={<i class="material-icons">done_all</i>} /></Link>
        <Link to="/team"><MenuItem onClick={props.handleToggle} primaryText="Team" leftIcon={<i class="material-icons">group</i>} /></Link>
        <Link to="/payout"><MenuItem onClick={props.handleToggle} primaryText="Payout" leftIcon={<i class="material-icons">credit_card</i>} /></Link>
      </Menu>
    </Paper>
    <Paper style={style.paper}>
      <Menu desktop={false}>
        <MenuItem onClick={props.handleToggle} primaryText="Dashboard" leftIcon={<i class="material-icons">dashboard</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Planner" leftIcon={<i class="material-icons">event_note</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Expense" leftIcon={<i class="material-icons">receipt</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Lookup" leftIcon={<i class="material-icons">compare_arrows</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Mileage" leftIcon={<i class="material-icons">subways</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Opportunity" leftIcon={<i class="material-icons">pie_chart</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Contact" leftIcon={<i class="material-icons">contacts</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Tracker" leftIcon={<i class="material-icons">track_changes</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Client" leftIcon={<i class="material-icons">account_box</i>} />
      </Menu>
    </Paper>
  </div>
);

export default NavMenu;
