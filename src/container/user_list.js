import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { users: state.users };
};

class UserList extends React.Component{ 
    constructor(props){
        super(props)
    }
    render(){
        // console.log(users);
        return(
            <div>
                <h1>UserList Component</h1>
                  {this.props.users.map(user => (
                       <p>{user.name}</p>
                   ))}  
            </div>
        );
    };
}
export default connect(mapStateToProps)(UserList);