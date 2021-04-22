import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

// importing css file!
import './css/RegisterComponent.css';

class RegisterComponent extends Component{
    constructor(props){
        super(props);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onRegister = this.onRegister.bind(this);
        this.onSelect = this.onSelect.bind(this);

        this.state = {
            name: "",
            userId: "",
            email: "",
            phone: "",
            profession: "",
            password: "",
            userRegistered: false,
            message: ""
        }
    }

    onFieldChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSelect(e) {
        this.setState({
            profession: e.target.value
        })
    }

    onRegister(e) {
        e.preventDefault();

        const user = {
            name: this.state.name,
            userId: this.state.userId,
            email: this.state.email,
            phone: this.state.phone,
            profession: this.state.profession,
            password: this.state.password
        }

        console.log(user);
        axios.post('http://localhost/Quickfix/register.php',user)
        .then(res => {
            if(res.data.sent){
                this.setState({
                    userRegistered: true
                });

                // window.location = '/';
            } else{
                this.setState({
                    message: res.data.message
                })
            }
        })
        .catch(error => console.log(error));
    }

    render() {
        if(this.state.userRegistered) {
            return(
                <Redirect to = {'/'}/>
            )
        } else {
            return(
                <div className = "register">
                    <div id="register">
                        <h3 className = "text-center text-white pt-5">Welcome to Quickfix</h3>
                        <div className = "container">
                            <div className = "text-center">
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
                            <div id="register-row" className = "row justify-content-center align-items-center">
                                <div id="register-column" className = "col-md-6">
                                    <div id="register-box" className = "col-md-12">
                                        <form id="register-form" className = "form" onSubmit = { this.onRegister } method="post">
                                            <h3 className = "text-center text-info">Register</h3>
                                            <div className = "form-group">
                                                <label htmlFor="name" className = "text-info">Name</label><br/>
                                                <input type="text" name="name" id="name" value = { this.state.name } onChange = { this.onFieldChange } className = "form-control"/>
                                            </div>
                                            <div className = "form-group">
                                                <label htmlFor="userId" className = "text-info">User ID</label><br/>
                                                <input type="text" name="userId" id="userId" value = { this.state.userId } onChange = { this.onFieldChange } className = "form-control"/>
                                            </div>
                                            <div className = "form-group">
                                                <label htmlFor="email" className = "text-info">Email</label><br/>
                                                <input type="email" name="email" id="email" value = { this.state.email } onChange = { this.onFieldChange } className = "form-control"/>
                                            </div>
                                            <div className = "form-group">
                                                <label htmlFor="phone" className = "text-info">Phone</label><br/>
                                                <input type="text" name="phone" id="phone" value = { this.state.phone } onChange = { this.onFieldChange } className = "form-control"/>
                                            </div>
                                            <div className = "form-group">
                                                <label htmlFor="Profession" className = "text-info">Profession</label><br/>
                                                <select className = "form-control" name = "profession" value = { this.state.profession } onChange = { this.onSelect }>
                                                    <option value = "Electrician">Electrician</option>
                                                    <option value = "Plumber">Plumber</option>
                                                    <option value = "AC Repair Contractor">AC Repair Contractor</option>
                                                    <option value = "Mechanic">Mechanic</option>
                                                </select>
                                            </div>
                                            <div className = "form-group">
                                                <label htmlFor="password" className = "text-info">Password:</label><br/>
                                                <input type="password" name="password" id="password" value = { this.state.password } onChange = { this.onFieldChange } className = "form-control"/>
                                            </div>
                                            <div className = "row">
                                                <div className = "col-md-6">
                                                    <div className = "form-group">
                                                        <button className = "btn btn-info btn-md">Register</button>
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
}

export default RegisterComponent;