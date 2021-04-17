import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// importing css file!
import './css/RegisterComponent.css';

class RegisterComponent extends Component{
    render() {
        return(
            <div className = "register">
                <div id="register">
                    <h3 className = "text-center text-white pt-5">Welcome to Quickfix</h3>
                    <div className = "container">
                        <div id="register-row" className = "row justify-content-center align-items-center">
                            <div id="register-column" className = "col-md-6">
                                <div id="register-box" className = "col-md-12">
                                    <form id="register-form" className = "form" action="" method="post">
                                        <h3 className = "text-center text-info">Register</h3>
                                        <div className = "form-group">
                                            <label for="name" className = "text-info">Name</label><br/>
                                            <input type="text" name="name" id="name" className = "form-control"/>
                                        </div>
                                        <div className = "form-group">
                                            <label for="userId" className = "text-info">User ID</label><br/>
                                            <input type="text" name="userId" id="userId" className = "form-control"/>
                                        </div>
                                        <div className = "form-group">
                                            <label for="email" className = "text-info">Email</label><br/>
                                            <input type="email" name="email" id="email" className = "form-control"/>
                                        </div>
                                        <div className = "form-group">
                                            <label for="phone" className = "text-info">Phone</label><br/>
                                            <input type="text" name="phone" id="phone" className = "form-control"/>
                                        </div>
                                        <div className = "form-group">
                                            <label for="Profession" className = "text-info">Profession</label><br/>
                                            <select className = "form-control">
                                                <option value = "Electrician">Electrician</option>
                                                <option value = "Plumber">Plumber</option>
                                                <option value = "AC Repair Contractor">AC Repair Contractor</option>
                                                <option value = "Mechanic">Mechanic</option>
                                            </select>
                                        </div>
                                        <div className = "form-group">
                                            <label for="password" class="text-info">Password:</label><br/>
                                            <input type="password" name="password" id="password" className = "form-control"/>
                                        </div>
                                        <div className = "row">
                                            <div className = "col-md-6">
                                                <div className = "form-group">
                                                    <input type="submit" name="submit" className = "btn btn-info btn-md" value="Register"/>
                                                </div>
                                            </div>
                                        </div>
                                        <span>If you have an account, <Link to = '/'>Login here</Link></span>
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

export default RegisterComponent;