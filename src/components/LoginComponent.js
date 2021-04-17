import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// importing css file!
import './css/LoginComponent.css';

class LoginComponent extends Component{
    render() {
        return(
            <div className = "login">
                <div id="login">
                    <h3 className = "text-center text-white pt-5">Welcome to Quickfix</h3>
                    <div className = "container">
                        <div id="login-row" className = "row justify-content-center align-items-center">
                            <div id="login-column" className = "col-md-6">
                                <div id="login-box" className = "col-md-12">
                                    <form id="login-form" className = "form" action="" method="post">
                                        <h3 className = "text-center text-info">Login</h3>
                                        <div className = "form-group">
                                            <label for="email" className = "text-info">Email</label><br/>
                                            <input type="email" name="email" id="email" className = "form-control"/>
                                        </div>
                                        <div className = "form-group">
                                            <label for="password" class="text-info">Password:</label><br/>
                                            <input type="password" name="password" id="password" className = "form-control"/>
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