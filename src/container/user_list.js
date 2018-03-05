import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { selectedUser } from '../actions/user_action'

const mapStateToProps = state => {
    return { users: state.users };
};

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        console.log('handle clicked ')
    }
    componentDidMount(){
    fetch('https://prabeen-restapi.herokuapp.com/api/register')
    .then(res => res.json())
    .then(users => {
        console.log(users)
         apiUsers = users
    })
    .catch(err =>{
        console.log(err)
    });
    }
    render() {
        // console.log(users);
        return (
            <div>
                <h1>UserList Component</h1>
                {this.props.users
                    ? this.props.users.map(user => (
                        <button key={user.username}
                            onClick={() => this.props.selectedUser(user)}>
                            {user.username}
                        </button>
                    ))
                    : <p>no users</p>}

            </div>
        );
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectedUser: selectedUser }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);