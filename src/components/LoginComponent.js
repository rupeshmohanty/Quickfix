import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

// importing css file!
import './css/LoginComponent.css';

class LoginComponent extends Component{
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);

        this.state = {
            email: '',
            password: '',
            userLoggedIn: '',
            message: ''
        }
    }

    onFieldChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onLogin(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://127.0.0.1:5000/login', user)
        .then((res) => {
            if(res.data.status) {
                let responseJson = res.data;
                if(responseJson) {
                    sessionStorage.setItem('userData',responseJson.user);
                    this.setState({
                        userLoggedIn: true,
                        message: 'User logged in successfully!'
                    })
                }
            } else {
                this.setState({
                    message: res.data.message
                })
            }
        })
        .catch((error) => console.log(error));
        
    }
    render() {
        if(this.state.userLoggedIn || sessionStorage.getItem('userData')) {
            return(<Redirect to = {'/home'}/>)
        }
        return(
            <div className = "login">
                <div id="login">
                    <h3 className = "text-center text-white pt-5">Welcome to Quickfix</h3>
                    <div className = "container">
                        <div id="login-row" className = "row justify-content-center align-items-center">
                            <div id="login-column" className = "col-md-6">
                                <div id="login-box" className = "col-md-12">
                                    <form id="login-form" onSubmit = { this.onLogin } className = "form" method="post">
                                        <h3 className = "text-center text-info">Login</h3>
                                        <div className = "form-group">
                                            <label for="email" className = "text-info">Email</label><br/>
                                            <input type="email" name="email" value = { this.state.email } onChange = { this.onFieldChange } id="email" className = "form-control"/>
                                        </div>
                                        <div className = "form-group">
                                            <label for="password" class="text-info">Password:</label><br/>
                                            <input type="password" name="password" value = { this.state.password } onChange = { this.onFieldChange } id="password" className = "form-control"/>
                                        </div>
                                        <div className = "row">
                                            <div className = "col-md-6">
                                                <div className = "form-group">
                                                    <input type="submit" name="submit" className = "btn btn-info btn-md" value="Login"/>
                                                </div>
                                            </div>
                                        </div>
                                        <span>If you haven't registered yet, <Link to = '/register'>Register here</Link></span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent;