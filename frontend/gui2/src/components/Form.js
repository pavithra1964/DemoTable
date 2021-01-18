import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios';
const FormItem = Form.Item;


class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, stuID) => {
        event.preventDefault();
        const Stu_Name = event.target.elements.Stu_Name.value;
        const Physics = event.target.elements.Physics.value;
        const Chemistry = event.target.elements.Chemistry.value;
        const Maths = event.target.elements.Maths.value;
        const Com_Science = event.target.elements.Com_Science.value;

        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/',
                    {
                        Stu_Name: Stu_Name,
                        Physics: Physics,
                        Chemistry: Chemistry,
                        Maths: Maths,
                        Com_Science: Com_Science
                    })
                    .then(res => console.log(res))
                    .catch(error => console.error(error));

            case 'PUT':
                axios.put(`http://127.0.0.1:8000/api/${stuID}/`,
                    {
                        Stu_Name: Stu_Name,
                        Physics: Physics,
                        Chemistry: Chemistry,
                        Maths: Maths,
                        Com_Science: Com_Science
                    })
                    .then(res => console.log(res))
                    .catch(error => console.error(error));

        }
    }

    render() {
        return (
            <div>
                <Form onSubmitCapture={(event) => this.handleFormSubmit(
                    event,
                    this.props.requestType,
                    this.props.stuID
                )}>
                    <FormItem label="Stu_Name">
                        <Input name="Stu_Name" placeholder="Put a Name here" />
                    </FormItem>
                    <FormItem label="Physics">
                        <Input name="Physics" placeholder="Enter a Value..." />
                    </FormItem>
                    <FormItem label="Chemistry">
                        <Input name="Chemistry" placeholder="Enter a Value..." />
                    </FormItem>
                    <FormItem label="Maths">
                        <Input name="Maths" placeholder="Enter a Value..." />
                    </FormItem>
                    <FormItem label="Com_Science">
                        <Input name="Com_Science" placeholder="Enter a Value..." />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                    </FormItem>
                </Form>
            </div>

        );
    }
}

export default CustomForm;