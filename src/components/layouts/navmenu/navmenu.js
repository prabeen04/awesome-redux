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
        <MenuItem onClick={props.handleToggle} primaryText="Posts" leftIcon={<i className="material-icons">account_box</i>} />
      </Menu>
  </div>
);

export default NavMenu;
