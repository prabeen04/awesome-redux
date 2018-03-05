import React from 'react';
import { connect } from 'react-redux';

class UserDetail extends React.Component{

    render(){
        return(
            <div>
                <h1>UserDetail Component</h1>
                <p>{this.props.selectedUser.name}</p>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return { selectedUser: state.selectedUser };
  };
  
export default connect(mapStateToProps)(UserDetail);