import React from 'react';

import './styles/Navbar.css'
import logo from '../images/GitHub_Logo.svg'

class Navbar extends React.Component {
    render (){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                <a className="Navbar__brand" href="/">
                    <img className="Navbar__brand-logo" src= {logo} width="50" height="50" alt="Logo"/>
                    <span className="font-weight-light">Github</span>
                    <span className="font-weight-bold">Conference</span>
                </a>
                </div>
            </div>
        )
    }
}
export default Navbar