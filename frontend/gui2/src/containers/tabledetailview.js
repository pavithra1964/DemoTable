import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { Button, Card } from "antd";
import CustomForm from '../components/Form';

class TableDetail extends React.Component {

    state = {
        table: {}
    }

    componentDidMount() {
        const stuID = this.props.match.params.stuID;
        axios.get(`http://127.0.0.1:8000/api/${stuID}`)
            .then(res => {
                this.setState({
                    table: res.data
                });
            })
    }

    handleDelete = event => {
        event.preventDefault();
        const stuID = this.props.match.params.stuID;
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
          };
        axios.delete(`http://127.0.0.1:8000/api/${stuID}/delete/`)
        .then(res => {
            if (res.status === 204) {
                this.props.history.push('/');
            }
        })
    };

    render(){
  const physics = this.state.table.Physics;
  const chemistry = this.state.table.Chemistry;
  const maths = this.state.table.Maths;
  const comscience = this.state.table.Com_Science;
  const Average = Total/4;
  const Total = this.state.table.Total;
    
    return(
        <div>
        <Card title={this.state.table.Stu_Name}>
            <p>Physics: {physics}</p>
            <p>Chemistry: {chemistry}</p>
            <p>Maths: {maths}</p>
            <p>Com_Science: {comscience}</p>
            <p>Total: {Total}</p>
            <p>Average: {Average}</p>
        </Card>
        <CustomForm
            requestType="PUT"
            stuID={this.props.match.params.stuID}
            btnText="Update" />
        <form onSubmit={this.handleDelete}>
            <Button type="danger" htmlType="submit">Delete</Button>
        </form>
        </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      token: state.token
    };
  };

export default connect(mapStateToProps)(TableDetail);   
