import React, { Component } from 'react';

// import css files!
import './css/IssueComponent.css';

class IssueComponent extends Component{
    render(){
        return(
            <div className = "issue-component text-center">
                <div className = "card issue-card mt-4" style = {{ display: 'inline-block' }}>
                    <div className = "card-body">
                        <h3 className = "text-center default-text py-3"><i className = "fa fa-lock"></i> Raise an Issue:</h3>
                        <form>
                            <div className = "md-form">
                                <input type = "text" id = "name" name = "name" placeholder = "Your Name" className = "form-control"/>
                            </div>
                            <div className = "md-form">
                                <input type = "text" id = "brief" name = "brief" placeholder = "Give a brief of the issue you are facing" className = "form-control"/>
                            </div>
                            <div className = "md-form">
                                <input type = "text" id = "phone" name = "phone" placeholder = "Your Contact Number" className = "form-control"/>
                            </div>
                            <div className = "md-form">
                                <input type = "text" id = "address" name = "address" placeholder = "Address" className = "form-control"/>
                            </div>
                            <div className = "md-form">
                                <label for = "technician">Technician needed:</label><br/><br/>
                                <select name="technician" id="technician" className = "form-control">
                                    <option value="Electrician">Electrician</option>
                                    <option value="Plumber">Plumber</option>
                                    <option value="AC Repair Contractor">AC Repair Contractor</option>
                                    <option value="Mechanic">Mechanic</option>
                                </select>
                            </div>
                            <div class="md-form">
                                <textarea type="text" id="form81" name = "description" class="md-textarea" style = {{ height: '100px' }} placeholder = "Describe Your Issue"></textarea>
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