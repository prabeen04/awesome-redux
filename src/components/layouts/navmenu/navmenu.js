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
  },
  menuItem: {
    color: '#666',
    fontSize: '1rem',
    padding: 0
  }
};

const NavMenu = (props) => (
  <div>
      <Menu autoWidth={true} menuItemStyle={style.menuItem}>
        <MenuItem
          onClick={props.handleToggle}
          primaryText="Dashboard"
          leftIcon={<i className="material-icons">dashboard</i>}
          containerElement={<Link to="/" />} />
        <MenuItem
          onClick={props.handleToggle}
          primaryText="Settings"
          leftIcon={<i className="material-icons">settings</i>}
          containerElement={<Link to="/settings" />} />
        <MenuItem
          onClick={props.handleToggle}
          primaryText=" Approvals  &nbsp; &nbsp;"
          leftIcon={<i className="material-icons">done_all</i>}
          containerElement={<Link to="/approval" />} />
        <MenuItem
          onClick={props.handleToggle}
          primaryText="Team"
          leftIcon={<i className="material-icons">group</i>}
          containerElement={<Link to="/team" />} />
        <MenuItem
          onClick={props.handleToggle}
          primaryText="Payout"
          leftIcon={<i className="material-icons">credit_card</i>}
          containerElement={<Link to="/payout" />} />
      </Menu>
      <Menu menuItemStyle={style.menuItem}>
        <MenuItem onClick={props.handleToggle} primaryText="Dashboard" leftIcon={<i className="material-icons">dashboard</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Planner" leftIcon={<i className="material-icons">event_note</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Expense" leftIcon={<i className="material-icons">receipt</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Lookup" leftIcon={<i className="material-icons">compare_arrows</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Mileage" leftIcon={<i className="material-icons">subways</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Opportunity" leftIcon={<i className="material-icons">pie_chart</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Contact" leftIcon={<i className="material-icons">contacts</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Tracker" leftIcon={<i className="material-icons">track_changes</i>} />
        <MenuItem onClick={props.handleToggle} primaryText="Client" leftIcon={<i className="material-icons">account_box</i>} />
      </Menu>
  </div>
);

export default NavMenu;
