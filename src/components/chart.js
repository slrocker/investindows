import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

class Chart extends Component {

    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['A','B'],
                datasets: [{
                    label: 'Population',
                    data:[10,15],
                    backgroundColor: 'rgba(0,0,0, 1)'
                }]
            }
        }
    }

    render(){
        return(
            <div className="chart">
            <Bar
                data={this.state.chartData}
                options={{ }}
                />
            </div>
        )
    }


}

export default Chart;