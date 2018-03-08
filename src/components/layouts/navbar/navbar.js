import React from 'react';
import AppBar from 'material-ui/AppBar';

class Navbar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <AppBar
            title="REDUXXX"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        );
    }
}
export default Navbar;