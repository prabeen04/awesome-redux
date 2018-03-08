import React from 'react';
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
    rightIcon: {
      textAlign: 'center',
      lineHeight: '24px',
    },
  };
  
  const NavMenu = () => (
    <div>
      <Paper style={style.paper}>
        <Menu>
          <MenuItem primaryText="Dashboard" leftIcon={<RemoveRedEye />} />
          <MenuItem primaryText="Settings" leftIcon={<PersonAdd />} />
          <MenuItem primaryText="Lookup" leftIcon={<ContentLink />} />
          <MenuItem primaryText="Planner" leftIcon={<ContentCopy />} />
          <MenuItem primaryText="Team" leftIcon={<Download />} />
          <MenuItem primaryText="Opportunity" leftIcon={<Download />} />
          <MenuItem primaryText="Team" leftIcon={<Download />} />
        </Menu>
      </Paper>
      <Paper style={style.paper}>
        <Menu>
          <MenuItem primaryText="Dashoard Me" />
          <MenuItem primaryText="Contacts" rightIcon={<PersonAdd />} />
          <MenuItem primaryText="Clients" rightIcon={<b style={style.rightIcon}>¶</b>} />
          <MenuItem primaryText="Profile" rightIcon={<b style={style.rightIcon}>§</b>} />
        </Menu>
      </Paper>
    </div>
  );
  
  export default NavMenu;
  