import React from 'react';
import axios from 'axios';
import AUX from 'react-aux';
//import C3Chart from 'react-c3js';
import { Bar, Pie, Doughnut, Polar } from 'react-chartjs-2';

class BarChart extends React.Component {
  
  state = {
    tables: []
} 
componentDidMount() {
   
    axios.get('http://127.0.0.1:8000/api/')
    .then(res => {
        this.setState({
            tables: res.data
        });
    })        
}

    render(){
      const Tables = this.state.tables;

      let sum = Tables.reduce(function(prev, current) {
          return prev + +current.Physics
        }, 0);
        const Avg = sum/this.state.tables.length;
      
      let sum2 = Tables.reduce(function(prev, current) {
            return prev + +current.Chemistry
          }, 0);
          const Avg2 = sum2/this.state.tables.length;
      
      let sum3 = Tables.reduce(function(prev, current) {
          return prev + +current.Maths
        }, 0);
        const Avg3 = sum3/this.state.tables.length;
      
      let sum4 = Tables.reduce(function(prev, current) {
          return prev + +current.Com_Science
        }, 0);
        const Avg4 = sum4/this.state.tables.length;
      

    const data = {
        labels: [
          'Physics',
          'Chemistry',
          'Maths',
          'Com_Science'
        ],
        datasets: [{
         label: 'Student Marks',
          data: [ Avg, Avg2, Avg3, Avg4 ],
          backgroundColor: [ '#000080', '#A74AC7', '#7FE817', '#7D0552' ],
          hoverBackgroundColor: [ '#E77471', '#E77471', '#E77471', '#E77471' ]
        }]
      };
      
      const option = {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var currentValue = dataset.data[tooltipItem.index];
              return currentValue + ' %';
            },
            title: function(tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            }
          }
        }
      }

    return(
      <div>
        <AUX>
          <p align="center">BarChart</p>
          <Bar data={data} options={option}/>
        </AUX>
        <br />
        <AUX>
          <p align="center">PieChart</p>
          <Pie data={data} options={option}/>
        </AUX>
        <br />
        <AUX>
          <p align="center">DoughnutChart</p>
          <Doughnut data={data} options={option}/>
        </AUX>
        <br/>
        <AUX>
          <p align="center">PolarChart</p>
          <Polar data={data} options={option}/>
        </AUX>
      </div>
        );
    }
}

export default BarChart;
