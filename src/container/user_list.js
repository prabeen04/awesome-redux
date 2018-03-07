import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {List, ListItem} from 'material-ui/List';
import { selectedUser, getUsers } from '../actions/user_action';
import Loader from '../components/common-components/loader';
import NoData from '../components/common-components/no-data';

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
        console.log(this.props)
        let renderUsers = this.props.users.map(user => {
            return <ListItem primaryText={user.name}  key={user._id} />

        })
         if(this.props.isLoading){
            return <Loader/>
        }
        if(this.props.noData){
            return <NoData/>
        }
        return (
            <div>
                <h1>UserList Component</h1>
             
                <List>
                    {renderUsers}
                </List>
            </div>
        );
    };
}
const mapStateToProps = state => {
    return { 
        users: state.users.users,
        isLoading: state.users.isLoading,
        noData: state.users.noData    
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectedUser: selectedUser, getUsers: getUsers }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);