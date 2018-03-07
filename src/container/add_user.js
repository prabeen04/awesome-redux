import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import { Button, Input } from 'semantic-ui-react';
import { addUser } from '../actions/user_action';

const styles = {
    errorStyle: {
      color: 'toamto',
    },
    underlineStyle: {
      borderColor: 'tomato',
    },
    floatingLabelStyle: {
      color: 'tomato',
    },
    floatingLabelFocusStyle: {
      color: 'tomato',
    },
  };
  
class AddUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = () => {
         this.props.addUser(this.state.user);
    }
    handleChange = (e) => {
        this.setState({user: e.target.value})
    }
    render(){
        return(
            <div>
                <h3>Add User</h3>
                <TextField
                    floatingLabelText="Enter User Name"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    onChange={this.handleChange}
                    />
               <button className="ui primary button"onClick={this.handleSubmit}>Add User</button> 
            </div>
        );
    }
}
const mapDispatchtoProps = (dispatch) =>{
    return bindActionCreators({addUser: addUser}, dispatch)
}
export default connect(null, mapDispatchtoProps)(AddUser);