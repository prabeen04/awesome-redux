import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import NavMenu from '../navmenu/navmenu'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.handleClose = this.handleClose.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleClose = () => this.setState({ open: false });
    handleToggle = () => this.setState({ open: !this.state.open });
    
    render() {
        return (<div>
            {/* top appbar */}
            <AppBar
                className="appbar"
                title="REDUXXX"
                titleStyle={{ cursor: 'pointer', color: 'tomato'}}
                onLeftIconButtonClick={() => this.handleToggle()}
                onTitleClick={()=> this.props.history.push('/')}
            />
            {/* Left side Drawer */}
            <Drawer
                docked={false}
                width={230}
                open={this.state.open}
                onRequestChange={(open) => this.setState({ open })}
            >
                <NavMenu handleToggle={this.handleToggle}/>
            </Drawer>
        </div>

        );
    }
}
export default withRouter(Navbar);