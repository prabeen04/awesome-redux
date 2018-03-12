import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import ActionInfo from 'material-ui/svg-icons/action/info';
import { selectedUser, getUsers } from '../actions/user_action';
import Loader from '../components/common-components/loader';
import ContentLoader from '../components/loaders/content-loader/content_loader';
import NoData from '../components/common-components/no-data';
import Button from 'semantic-ui-react';

const style = {
    width: 300,
    textAlign: 'center',
    border: '2px solid #aaa'
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
            return <div key={user.name}>
                   <ListItem 
                    primaryText={`${user.name} - ${user.email} - ${user.location}`} 
                    style={{color: '#444'}}
                    onClick={()=>{
                        this.props.selectedUser(user)
                    }} 
                    rightIcon={<ActionInfo />}/>
                        <button 
                        onClick={() => console.log(user._id)}>
                            del
                        </button>
                    </div>

        })
         if(this.props.isLoading){
            return <ContentLoader/>
        }
        if(this.props.noData){
            return <NoData/>
        }
        return (
            <div>
                <List style={style}>
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