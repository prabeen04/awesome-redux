import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';
import { addUser } from '../actions/user_action';

class AddUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (e) => {
        console.log(e.target.value)
        this.props.addUser(e.target.value);
    }
    handleChange = (e) => {
        console.log(e.target.value)
    }
    render(){
        return(
            <div>
                <h3>Add User</h3>
                <input className="ui input" type="text" onChange={this.handleChange}/>
               <button className="ui primary button"onClick={this.handleSubmit}>Add User</button> 
            </div>
        );
    }
}
const mapDispatchtoProps = (dispatch) =>{
    return{
        addUser: user => dispatch(addUser(user))
    }
}
export default connect(null, mapDispatchtoProps)(AddUser);