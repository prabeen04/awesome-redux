import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { selectedUser, getUsers } from '../actions/user_action'

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        console.log('handle clicked ')
    }
    componentDidMount(){
        console.log('inside componentDidMount')
        this.props.getUsers();
    }
    render() {
        // console.log(users);
        return (
            <div>
                <h1>UserList Component</h1>
                {this.props.users
                    ? this.props.users.map(user => (
                        <p key={user.username}
                            onClick={() => this.props.selectedUser(user)}>
                            {user.username}
                        </p>
                    // ?<p>some users present</p>
                    ))
                    : <p>no users</p>}

            </div>
        );
    };
}
const mapStateToProps = state => {
    return { users: state.users };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectedUser: selectedUser, getUsers: getUsers }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);