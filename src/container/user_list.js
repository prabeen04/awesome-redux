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
    componentDidMount() {
        console.log('inside componentDidMount')
        this.props.getUsers();
    }
    render() {
        let renderUsers = this.props.users.map(user => {
            return <li key={user._id}>{user.username}</li>
        })
        return (
            <div>
                <h1>UserList Component</h1>
                <ul>
                    {renderUsers}
                </ul>
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