import React from 'react';
import { connect } from 'react-redux';

class UserDetail extends React.Component{

    render(){
        return(
            <div>
                <h1>User Detail</h1>
                <p className=" appbar">{this.props.selectedUser.name}</p>
                <p className=" appbar">{this.props.selectedUser.email}</p>
                <p className=" appbar">{this.props.selectedUser.location}</p>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return { selectedUser: state.selectedUser };
  };
  
export default connect(mapStateToProps)(UserDetail);