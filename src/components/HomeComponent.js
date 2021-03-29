import React, { Component } from 'react';

// importing semantic ui components!
import { Container } from 'semantic-ui-react';

// importing css
import './css/BlogComponent.css';

// importing components
import NavbarComponent from './NavbarComponent';

class HomeComponent extends Component{
    render() {
        return(
            <div className = "home">
                <NavbarComponent/>
                <Container>
                    <section className = "details-card">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card-content">
                                        <div className="card-desc">
                                            <h3>Heading</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                                                voluptas totam</p>
                                                <a href="#" className="btn-card">Read</a>   
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-content">
                                        <div className="card-desc">
                                            <h3>Heading2</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                                                voluptas totam</p>
                                                <a href="#" className="btn-card">Read</a>   
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-content">
                                        <div className="card-desc">
                                            <h3>Heading3</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                                                voluptas totam</p>
                                                <a href="#" className="btn-card">Read</a>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </div>
        )
    }
}

export default HomeComponent;