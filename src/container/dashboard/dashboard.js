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
                    {/* <UserList/>
                <UserDetail/>
                <AddUser/> */}
                    <div className="flex-container jumpstart-box">
                        <h3>Jump start</h3>
                    </div>
                    <div className="flex-container jumpstart-box">
                        <h3>Jump start</h3>
                    </div>
                    <div className="flex-container jumpstart-box">
                        <h3>Jump start</h3>
                    </div>
                    <div className="flex-container jumpstart-box">
                        <h3>Jump start</h3>
                    </div>
                    <div className="flex-container jumpstart-box">
                        <h3>Jump start</h3>
                    </div>
                    <div className="flex-container jumpstart-box">
                        <h3>Jump start</h3>
                    </div>
                </div>
                <div className="flex-container">
                    {/* <UserList/>
                <UserDetail/>
                <AddUser/> */}
                    <div className="flex-container chart-box">
                        <h3>CHART COMPONENT</h3>
                    </div>
                    <div className="flex-container chart-box">
                        <h3>CHART COMPONENT</h3>
                    </div>
                    <div className="flex-container chart-box">
                        <h3>CHART COMPONENT</h3>
                    </div>
                    <div className="flex-container chart-box">
                        <h3>CHART COMPONENT</h3>
                    </div>
                    <div className="flex-container chart-box">
                        <h3>CHART COMPONENT</h3>
                    </div>
                    <div className="flex-container chart-box">
                        <h3>CHART COMPONENT</h3>
                    </div>
                </div>

            </div>

        );
    }
}

export default DashBoard;