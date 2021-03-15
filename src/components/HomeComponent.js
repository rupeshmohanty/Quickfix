import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';

class HomeComponent extends Component{
    render() {
        return(
            <div className = "home">
                <NavbarComponent/>
                Home component
            </div>
        )
    }
}

export default HomeComponent;