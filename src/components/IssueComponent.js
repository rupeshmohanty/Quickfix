import React, { Component } from 'react';
import axios from 'axios';

// import css files!
import './css/IssueComponent.css';

class IssueComponent extends Component{
    constructor(props) {
        super(props);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.raiseIssue = this.raiseIssue.bind(this);

        this.state = {
            name: '',
            brief: '',
            phone: '',
            address: '',
            technician: '',
            description: '',
            message: ''
        }
    }

    onFieldChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSelect(e) {
        this.setState({
            technician: e.target.value
        })
    }

    raiseIssue(e) {
        e.preventDefault();

        const issue = {
            name: this.state.name,
            brief: this.state.brief,
            phone: this.state.phone,
            address: this.state.address,
            technician: this.state.technician,
            description: this.state.description
        }

        axios.post('http://127.0.0.1:5000/post-an-issue',issue)
        .then((res) => {
            if(res.data.status) {
                this.setState({
                    message: res.data.message
                })
            } else {
                this.setState({
                    message: res.data.message
                })
            }
        })
        .catch((error) => console.log(error));
    }

    render(){
        return(
            <div className = "issue-component text-center">
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
                <div className = "card issue-card mt-4" style = {{ display: 'inline-block' }}>
                    <div className = "card-body">
                        <h3 className = "text-center default-text py-3"><i className = "fa fa-lock"></i> Raise an Issue:</h3>
                        <form onSubmit = { this.raiseIssue } method = "post">
                            <div className = "md-form">
                                <input type = "text" id = "name" name = "name" value = { this.state.name } onChange = { this.onFieldChange } placeholder = "Your Name" className = "form-control"/>
                            </div>
                            <div className = "md-form">
                                <input type = "text" id = "brief" name = "brief" value = { this.state.brief } onChange = { this.onFieldChange } placeholder = "Give a brief of the issue you are facing" className = "form-control"/>
                            </div>
                            <div className = "md-form">
                                <input type = "text" id = "phone" name = "phone" value = { this.state.phone } onChange = { this.onFieldChange } placeholder = "Your Contact Number" className = "form-control"/>
                            </div>
                            <div className = "md-form">
                                <input type = "text" id = "address" name = "address" value = { this.state.address } onChange = { this.onFieldChange } placeholder = "Address" className = "form-control"/>
                            </div>
                            <div className = "md-form">
                                <label for = "technician">Technician needed:</label><br/><br/>
                                <select name="technician" id="technician" onChange = { this.onSelect } className = "form-control" placeholder = "Select an Option">
                                    <option value="">Click to select</option>
                                    <option value="Electrician">Electrician</option>
                                    <option value="Plumber">Plumber</option>
                                    <option value="AC Repair Contractor">AC Repair Contractor</option>
                                    <option value="Mechanic">Mechanic</option>
                                </select>
                            </div>
                            <div class="md-form">
                                <textarea type="text" id="form81" onChange = { this.onFieldChange } value = { this.state.description } name = "description" class="md-textarea" style = {{ height: '100px' }} placeholder = "Describe Your Issue"></textarea>
                            </div>
                            <div className = "text-center">
                                <button className = "btn btn-default waves-effect waves-light">Raise an issue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default IssueComponent;