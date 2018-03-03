import React from 'react';
import { connect } from 'react-redux';

class UserDetail extends React.Component{

    render(){
        return(
            <div>
                <h1>UserDetail Component</h1>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return { users: state.users };
  };
  
export default connect(mapStateToProps)(UserDetail);