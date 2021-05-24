import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

// importing semantic ui components!
import { Container } from 'semantic-ui-react';

// importing css
import './css/BlogComponent.css';

// importing images
import Welcome from './Welcome.png';

// importing components
import NavbarComponent from './NavbarComponent';

 
class HomeComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            email: sessionStorage.getItem('userData'),
            userLoggedIn: true,
            issue: [],
            message: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost/Quickfix/show-issues.php')
        .then((res) => {
            this.setState({
                issue: res.data
            })
        })
    }

    render() {
        if(sessionStorage.getItem('userData')) {
    
            return(
                <div className = "home">
                    <NavbarComponent/>
                    <div>
                        <img className = "banner" src = { Welcome } alt = { Welcome }/>
                    </div>
                    <Container>
                        <section className = "details-card">
                            <div className="container">
                                <div className="row">
                                    { this.state.issue.map((issue) => {
                                        if(issue) {
                                            return(
                                                <div className="col-md-4">
                                                    <div className="card-content">
                                                        <div className="card-desc">
                                                            <h3>{issue.technician}</h3>
                                                            <p>{issue.brief}</p>
                                                            <p>{ issue.description }</p>
                                                            <b>Contact at:</b> <p>{ issue.phone }</p>
                                                            <b>Address:</b> <p>{ issue.address }</p>
                                                            <b>Requested by: <p>{ issue.name }</p></b>
                                                            <Link to = '' className = "btn-card">Solve issue</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return(<div></div>)
                                        }
                                    }) }
                                </div>
                            </div>
                        </section>
                    </Container>
                </div>
            )

        } else {

            return(<Redirect to = {'/'}/>)

        }

        
    }
}

export default HomeComponent;