import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

// navbar component
import './css/ProfileComponent.css';
import NavbarComponent from './NavbarComponent';

class EditComponent extends Component{
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
        this.updateData = this.updateData.bind(this);

        this.state = {
            email: sessionStorage.getItem('userData'),
            message: "",
            name: "",
            userId: "",
            phone: ""
        }
    }

    changeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateData(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            name: this.state.name,
            userId: this.state.userId,
            phone: this.state.phone
        }

        axios.put('http://127.0.0.1:5000/edit-profile',user)
        .then((res) => {
            if(res.data.status) {
                this.setState({
                    message: res.data.message
                })
                
                console.log(this.state.message);
                window.location = '/profile';
            } else {    
                this.setState({
                    message: res.data.message
                })

                console.log(this.state.message);
            }
        })
        .catch((error) => console.log(error));
    }

    

    render() {
        if(sessionStorage.getItem('userData')) {
            return(
                <div className = "profile">
                    <NavbarComponent/><br/>
                    <div className = "container emp-profile">
                        <Form onSubmit = { this.updateData }>
                            <Form.Field>
                                <label>Name</label>
                                <input placeholder='Full Name' name = "name" onChange = { this.changeValue } value = { this.state.name }/>
                            </Form.Field>
                            <Form.Field>
                                <label>User Id</label>
                                <input placeholder='User ID' name = "userId" onChange = { this.changeValue } value = { this.state.userId }/>
                            </Form.Field>
                            <Form.Field>
                                <label>Phone</label>
                                <input placeholder='Phone' name = "phone" onChange = { this.changeValue } value = { this.state.phone } />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </div><br/>
                </div>
            )
        } else {
            return(<Redirect to = {'/'}/>)
        }
    }
}

export default EditComponent;