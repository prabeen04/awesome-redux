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
                    {/* <UserList/>
                <UserDetail/>
                <AddUser/> */}
                    <div className="flex-container jumpstart-box">
                        <h2>0.0 €</h2>
                        <h3>Negotiation Stage</h3>
                    </div>
                    <div className="flex-container jumpstart-box">
                        <h2>125.0 €</h2>
                        <h3>Funnel Value</h3>
                    </div>
                    <div className="flex-container jumpstart-box">
                        <h2>43.7 %</h2>
                        <h3>Project Margin</h3>
                    </div>
                    <div className="flex-container jumpstart-box">
                        <h2>45.6%</h2>
                        <h3>Sales Forecast</h3>
                    </div>
                    <div className="flex-container jumpstart-box">
                        <h2>110.0 €</h2>
                        <h3>Approved Expenses</h3>
                    </div>
                    <div className="flex-container jumpstart-box">
                        <h2>5050.0 €</h2>
                        <h3>Approved Mileage</h3>
                    </div>
                </div>
                <div className="flex-container">
                    {/* <UserList/>
                <UserDetail/>
                <AddUser/> */}
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