import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper'

class UserDetail extends React.Component{

    render(){
        return(
            <div>
              <Paper style={{width: 300, padding: '2rem'}} zDepth={2}>  
                <h1>User Detail</h1>
                <p>{this.props.selectedUser.name}</p>
              </Paper>  
            </div>
        );
    };
}

const mapStateToProps = state => {
    return { selectedUser: state.selectedUser };
  };
  
export default connect(mapStateToProps)(UserDetail);