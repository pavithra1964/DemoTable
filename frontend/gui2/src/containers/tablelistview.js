import React from 'react';
import axios from 'axios';
import CustormForm from '../components/Form';
import BarChart from './Barchart';
import { SortingTable } from "../components/SortingTable";
import RalineChart from './Line & Radar Chart';

class TableList extends React.Component {

    state = {
        tables: []
    } ;
    fetchtables = () => {
        axios.get("http://127.0.0.1:8000/api/").then(res => {
            this.setState({
                tables:res.data
            })
        })
    }
    componentDidMount() {
        this.fetchtables();
    }
    componentWillReceiveProps(newProps) {
        if (newProps.token) {
            this.fetchtables();
        }
    }
    render() {
       return(
            <div>
           <SortingTable data={this.state.tables} />
           <br />
           <h2>Create New Student Datails</h2>
           <CustormForm
           requestType="post"
           stuID={null}
           btnText="Create" />
           <BarChart />
           <RalineChart />
           </div>
        )
    }
}

export default TableList;

