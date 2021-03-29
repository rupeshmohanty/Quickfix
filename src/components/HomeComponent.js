import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// importing semantic ui components!
import { Container } from 'semantic-ui-react';

// importing css
import './css/BlogComponent.css';

// importing images
import  Welcome  from './Welcome.png';

// importing components
import NavbarComponent from './NavbarComponent';

// getting sample data
import { blogData } from './data';
 
class HomeComponent extends Component{
    render() {
        const openBox = () => {
            var extra = document.getElementById('extra');

            if(extra.style.display == 'none') {
                extra.style.display = 'inline';
            } else {
                extra.style.display = 'none';
            }

        }

        return(
            <div className = "home">
                <NavbarComponent/>
                <div>
                    <img src = { Welcome } alt = { Welcome }/>
                </div>
                <Container>
                    <section className = "details-card">
                        <div className="container">
                            <div className="row">
                                { blogData.map((blog) => {
                                    if(blog) {
                                        return(
                                            <div className="col-md-4">
                                                <div className="card-content">
                                                    <div className="card-desc">
                                                        <h3>{blog.title}</h3>
                                                        <p>{blog.brief}</p>
                                                        <div className = "extra" id = "extra" style = {{ display: 'none' }}>
                                                            <p>{ blog.description }</p>
                                                            <b>Contact at:</b> <p>{ blog.contact }</p>
                                                            <b>Address:</b> <p>{ blog.address }</p>
                                                            <b>Technician Required:</b> <p>{ blog.technician }</p>
                                                        </div>
                                                            <Link onClick = { openBox } className = "btn-card">See Details</Link>   
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
    }
}

export default HomeComponent;