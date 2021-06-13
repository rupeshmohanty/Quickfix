import React, { Component } from 'react';
import axios from 'axios';

// import css file for profile component!
import './css/ProfileComponent.css';
import NavbarComponent from './NavbarComponent';

class ProfileComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {
            email: sessionStorage.getItem('userData'),
            profileData: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:5000/user/' + this.state.email)
        .then((res) => {
            this.setState({
                profileData: res.data.userData
            })
        })
        .catch((error) => console.log(error));
    }

    render() {
        return(
            <div className = "profile">
                <NavbarComponent/><br/>
                <div className = "container emp-profile">
                    <form>
                        <div className = "row">
                            <div className = "col-md-4">
                                <div className = "profile-img">
                                    <img src="https://rapidapi.com/cdn/images?url=https://rapidapi-prod-apis.s3.amazonaws.com/b42aa17d-8ae0-4a28-b29f-587af5454390.png" alt=""/>
                                </div>
                            </div>
                            <div className = "col-md-6">
                                <div className = "profile-head">
                                            <h5>
                                                { this.state.profileData.name }
                                            </h5>
                                            <h6>
                                                { this.state.profileData.profession }
                                            </h6>
                                            <p className = "proile-rating">RATING : <span>8/10</span></p>
                                    <ul className = "nav nav-tabs" id="myTab" role="tablist">
                                        <li className = "nav-item">
                                            <a className = "nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-md-4">
                                {/* Just for some spacing */}
                            </div>
                            <div className = "col-md-8">
                                <div className = "tab-content profile-tab" id="myTabContent">
                                    <div className = "tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div className = "row">
                                                    <div className = "col-md-6">
                                                        <label>User Id</label>
                                                    </div>
                                                    <div className = "col-md-6">
                                                        <p>{ this.state.profileData.userId }</p>
                                                    </div>
                                                </div>
                                                <div className = "row">
                                                    <div className = "col-md-6">
                                                        <label>Name</label>
                                                    </div>
                                                    <div className = "col-md-6">
                                                        <p>{ this.state.profileData.name }</p>
                                                    </div>
                                                </div>
                                                <div clasName = "row">
                                                    <div className = "col-md-6">
                                                        <label>Email</label>
                                                    </div>
                                                    <div className = "col-md-6">
                                                        <p>{ this.state.email }</p>
                                                    </div>
                                                </div>
                                                <div className = "row">
                                                    <div className = "col-md-6">
                                                        <label>Phone</label>
                                                    </div>
                                                    <div className = "col-md-6">
                                                        <p>{ this.state.profileData.phone }</p>
                                                    </div>
                                                </div>
                                                <div className = "row">
                                                    <div className = "col-md-6">
                                                        <label>Profession</label>
                                                    </div>
                                                    <div className = "col-md-6">
                                                        <p>{ this.state.profileData.profession }</p>
                                                    </div>
                                                </div>
                                    </div>
                                    {/* <div className = "tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <div className = "row">
                                                    <div className = "col-md-6">
                                                        <label>Experience</label>
                                                    </div>
                                                    <div className = "col-md-6">
                                                        <p>Expert</p>
                                                    </div>
                                                </div>
                                                <div className = "row">
                                                    <div className = "col-md-6">
                                                        <label>Hourly Rate</label>
                                                    </div>
                                                    <div className = "col-md-6">
                                                        <p>10$/hr</p>
                                                    </div>
                                                </div>
                                                <div className = "row">
                                                    <div className = "col-md-6">
                                                        <label>Total Projects</label>
                                                    </div>
                                                    <div className = "col-md-6">
                                                        <p>230</p>
                                                    </div>
                                                </div>
                                                <div className = "row">
                                                    <div className = "col-md-6">
                                                        <label>English Level</label>
                                                    </div>
                                                    <div className = "col-md-6">
                                                        <p>Expert</p>
                                                    </div>
                                                </div>
                                                <div className = "row">
                                                    <div className = "col-md-6">
                                                        <label>Availability</label>
                                                    </div>
                                                    <div className = "col-md-6">
                                                        <p>6 months</p>
                                                    </div>
                                                </div>
                                        <div className = "row">
                                            <div className = "col-md-12">
                                                <label>Your Bio</label><br/>
                                                <p>Your detail description</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </form>
                </div><br/>
            </div>
        )
    }

}

export default ProfileComponent;