import React from 'react';
import UserList from '../user_list';
import UserDetail from '../user_detail';
import AddUser from '../add_user';
import LineChart from '../../utility/chartjs/line_chart';
import BarChart from '../../utility/chartjs/bar_chart';
import PieChart from '../../utility/chartjs/pie_chart';
import PolarChart from '../../utility/chartjs/polar_chart';
import RadarChart from '../../utility/chartjs/radar_chart';
import DoughnutChart from '../../utility/chartjs/doughnut_chart';
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
                    <div className="flex-container chart-box">
                       <LineChart />
                    </div>
                    <div className="flex-container chart-box">
                        <BarChart />
                    </div>
                    <div className="flex-container chart-box">
                        <DoughnutChart/>
                    </div>
                    <div className="flex-container chart-box">
                        <PieChart/>
                    </div>
                    <div className="flex-container chart-box">
                        <PolarChart/>
                    </div>
                    <div className="flex-container chart-box">
                        <RadarChart/>
                    </div>
                </div>

            </div>

        );
    }
}

export default DashBoard;