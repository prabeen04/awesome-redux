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
  }
};

const NavMenu = () => (
  <div>
    <Paper style={style.paper}>
      <Menu desktop={false}>
        <MenuItem style={{color: 'tomato'}} primaryText="Dashboard" leftIcon={<i class="material-icons">dashboard</i>} />
        <MenuItem primaryText="Settings" leftIcon={<i class="material-icons">settings</i>} />
        <MenuItem primaryText=" Approvals  &nbsp; &nbsp;" leftIcon={<i class="material-icons">done_all</i>} />
        <MenuItem primaryText="Team" leftIcon={<i class="material-icons">group</i>} />
        <MenuItem primaryText="Payout" leftIcon={<i class="material-icons">credit_card</i>} />
      </Menu>
    </Paper>
    <Paper style={style.paper}>
      <Menu desktop={false}>
        <MenuItem primaryText="Dashboard" leftIcon={<i class="material-icons">dashboard</i>} />
        <MenuItem primaryText="Planner" leftIcon={<i class="material-icons">event_note</i>} />
        <MenuItem primaryText="Expense" leftIcon={<i class="material-icons">receipt</i>} />
        <MenuItem primaryText="Lookup" leftIcon={<i class="material-icons">compare_arrows</i>} />
        <MenuItem primaryText="Mileage" leftIcon={<i class="material-icons">subways</i>} />
        <MenuItem primaryText="Opportunity" leftIcon={<i class="material-icons">pie_chart</i>} />
        <MenuItem primaryText="Contact" leftIcon={<i class="material-icons">contacts</i>} />
        <MenuItem primaryText="Tracker" leftIcon={<i class="material-icons">track_changes</i>} />
        <MenuItem primaryText="Client" leftIcon={<i class="material-icons">account_box</i>} />
      </Menu>
    </Paper>
  </div>
);

export default NavMenu;
