import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {open: false};
        this.handleClose = this.handleClose.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleClose = () => this.setState({open: false});
    handleToggle = () => this.setState({open: !this.state.open});
    render(){
        return(<div>
             <AppBar
            title="REDUXXX"
            onLeftIconButtonClick ={ () => this.handleToggle()}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          {/* Left side Drawer */}
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            >
            <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
        </div>
           
        );
    }
}
export default Navbar;