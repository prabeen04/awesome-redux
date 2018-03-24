import React from 'react';
import UserList from '../user_list';
import UserDetail from '../user_detail';
import AddUser from '../add_user';

class DashBoard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="light-background">
                <div className="flex-container">
                    <UserList/>
                <UserDetail/>
                <AddUser/>                   
                </div>

            </div>

        );
    }
}

export default DashBoard;