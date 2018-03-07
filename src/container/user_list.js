import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import { selectedUser, getUsers } from '../actions/user_action';
import Loader from '../components/common-components/loader';
import NoData from '../components/common-components/no-data';

const style = {
    width: 300,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };
class UserList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        let renderUsers = this.props.users.map(user => {
            return <ListItem 
                    primaryText={user.name} 
                    key={user._id}
                    onClick={()=>{
                        this.props.selectedUser(user)
                    }} />

        })
         if(this.props.isLoading){
            return <Loader/>
        }
        if(this.props.noData){
            return <NoData/>
        }
        return (
            <div>
              <Paper style={style} zDepth={3}>               
                <List>
                    {renderUsers}
                </List>
              </Paper>  
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