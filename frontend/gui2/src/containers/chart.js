import React from 'react';
import axios from 'axios';
import  { BascicTable } from '../components/table';
import { Bar } from "react-chartjs-2";


class Chart extends React.Component {

    state = {
        tables: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            this.setState({
                tables: res.data
            });
            console.log(res.data);
        })
    }

	constructor(props) {
        super(props);

        this.state = {
            chartData:{
                labels: ['Stu_Name', 'Physics', 'Chemistry', 'Maths', 'Computer'],
                datasets:[
                    { 
                        data:[this.state.tables
                    
                ],
                backgroundcolour:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 192, 132, 0.6)',
                ]
            }
        ]
        }
    }
    }


    render() {
        return(
           <div className="">
               <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Student Marks',
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />

           </div>
        )
    }
}

export default Chart;
