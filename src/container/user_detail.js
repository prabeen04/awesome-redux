import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { deleteUser } from '../actions/user_action'

class UserDetail extends React.Component{

    render(){
        return(
            <div>
                <h1>User Detail</h1>
                <p className="">{this.props.selectedUser.name}</p>
                <p className="">{this.props.selectedUser.email || 'No Email Provided'}</p>
                <p className="">{this.props.selectedUser.location || 'No Location Available'}</p>
                
                {/* <button onClick={() => {
                    this.props.editUser(this.props.selectedUser._id )
                }}>
                 Edit Userss
                </button> */}
                <button onClick={() => {
                    this.props.deleteUser(this.props.selectedUser._id)
                }}>
                 Delete User
                </button>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return { selectedUser: state.selectedUser };
  };

  const mapDispatchToProps= dispatch=> {
      return bindActionCreators({deleteUser: deleteUser}, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);