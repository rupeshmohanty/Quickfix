import React, { Component } from 'react';

// importing semantic ui components!
import { Card, Container } from 'semantic-ui-react';

// importing components
import NavbarComponent from './NavbarComponent';

class HomeComponent extends Component{
    render() {
        return(
            <div className = "home">
                <NavbarComponent/><br/><br/><br/>
                <Container>
                    <div className = "row">
                        <div className = "col-md-4">
                            <Card>
                                <Card.Content header = 'Lorem Ipsum'></Card.Content>
                                <Card.Content description = 'Some temporary text'></Card.Content>
                            </Card>
                        </div>
                        <div className = "col-md-4">
                            <Card>
                                <Card.Content header = 'Lorem Ipsum'></Card.Content>
                                <Card.Content description = 'Some temporary text'></Card.Content>
                            </Card>
                        </div>
                        <div className = "col-md-4">
                            <Card>
                                <Card.Content header = 'Lorem Ipsum'></Card.Content>
                                <Card.Content description = 'Some temporary text'></Card.Content>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default HomeComponent;