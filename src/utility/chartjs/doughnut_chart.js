import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

class DoughnutChart extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
          <div>
            <Doughnut data={data}  width={520} height={230}/>
          </div>
        );
      }
}

export default DoughnutChart;