import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

// navbar component
import './css/ProfileComponent.css';
import NavbarComponent from './NavbarComponent';

class PasswordComponent extends Component{
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
        this.changePassword = this.changePassword.bind(this);

        this.state = {
            email: sessionStorage.getItem('userData'),
            password: "",
            cpassword: ""
        }
    }

    changeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changePassword(e) {
        e.preventDefault();

        if(this.state.password == this.state.cpassword) {
            const user = {
                email: this.state.email,
                password: this.state.password
            }
    
            axios.put('http://127.0.0.1:5000/change-password',user)
            .then((res) => {
                if(res.data.status) {
                    this.setState({
                        message: res.data.message
                    })
                    
                    console.log(this.state.message)
                } else {    
                    this.setState({
                        message: res.data.message
                    })
    
                    console.log(this.state.message);
                }
            })
            .catch((error) => console.log(error));
        } else {
            this.setState({
                message: "Password fields dont match!"
            })
        }
        
    }

    render() {
        if(sessionStorage.getItem('userData')) {
            return(
                <div className = "profile">
                    <NavbarComponent/><br/>
                    <div className = "container emp-profile">
                    <div>
                    {
                        this.state.message ? (
                            <div className = "alert alert-warning" role = "alert" style = {{ display: 'inline-block' }}>
                                { this.state.message }
                            </div>
                        ):(
                            <div></div>
                        )
                    }
                    </div>
                        <Form onSubmit = { this.changePassword }>
                            <Form.Field>
                                <label>New Password</label>
                                <input type = "password" placeholder='New Password' name = "password" onChange = { this.changeValue } value = { this.state.password }/>
                            </Form.Field>
                            <Form.Field>
                                <label>Confirm New Password</label>
                                <input type = "password" placeholder='Confirm New Password' name = "cpassword" onChange = { this.changeValue } value = { this.state.cpassword }/>
                            </Form.Field>
                            <Button type='submit'>Change</Button>
                        </Form>
                    </div><br/>
                </div>
            )
        } else {
            return(<Redirect to = {'/'}/>)
        }
    }
}

export default PasswordComponent;