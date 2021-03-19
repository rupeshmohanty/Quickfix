import React, { Component } from 'react';
import './css/LoginComponent.css';

class LoginComponent extends Component{
    render() {
        return(
            <div className = "container login-container">
                <div className = "row">
                    <div className = "col-md-6 login-form-1">
                        <h3>Login</h3>
                        <form>
                            <div className = "form-group">
                                <input type = "text" className = "form-control" name = "email" placeholder = "Your Email *"/>
                            </div><br/>
                            <div className = "form-group">
                                <input type = "password" className = "form-control" name = "password" placeholder = "Your Password *"/>
                            </div><br/>
                            <div className = "form-group">
                                <input type = "submit" className = "btnSubmit" value = "Login"/>
                            </div><br/>
                        </form>
                    </div>
                    <div className = "col-md-6 login-form-2">
                        <h3>Register</h3>
                        <form>
                            <div className = "form-group">
                                <input type = "text" className = "form-control" name = "email" placeholder = "Your Email *"/>
                            </div><br/>
                            <div className = "form-group">
                                <input type = "text" className = "form-control" name = "name" placeholder = "Your Name *"/>
                            </div><br/>
                            <div className = "form-group">
                                <input type = "text" className = "form-control" name = "password" placeholder = "Your Password *"/>
                            </div><br/>
                            <div className = "form-group">
                                <input type = "submit" className = "btnSubmit" value = "Register"/>
                            </div><br/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent;