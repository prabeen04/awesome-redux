import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import { Button, Input } from 'semantic-ui-react';
import { addUser } from '../actions/user_action';
import { ADD_USER } from '../types/user_actiontypes'

const styles = {
    errorStyle: {
        color: 'rgb(43, 67, 78)',
    },
    underlineStyle: {
        borderColor: 'rgb(43, 67, 78)',
    },
    floatingLabelStyle: {
        color: 'rgb(43, 67, 78)',
    },
    floatingLabelFocusStyle: {
        color: 'rgb(43, 67, 78)',
    },
};

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                email: '',
                location: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        console.log(this.state.user)
        // this.props.addUser(this.state.user);

    }

    render() {
        return (
            <div>
                <TextField
                    floatingLabelText="Enter User Name"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    onChange={(e) => {
                        this.setState({'name': e.target.value})
                    }}
                />
                <TextField
                    floatingLabelText="Enter Email"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    onChange={(e) => {
                        this.setState({'email': e.target.value})
                    }}
                />
                <TextField
                    floatingLabelText="Enter Location"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    onChange={(e) => {
                        this.setState({'location': e.target.value})
                    }}
                />
                <button className="ui primary button" onClick={this.handleSubmit}>Add User</button>
            </div>
        );
    }
}
const mapDispatchtoProps = (dispatch) => {
    return bindActionCreators({ addUser: addUser }, dispatch)
}
export default connect(null, mapDispatchtoProps)(AddUser);