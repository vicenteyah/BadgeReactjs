import React from 'react';
import CompLogo from '../images/GitHub_Logo.svg'
import './styles/Badge.css'

class Badge extends React.Component {
    render(){
        //const firstName = 'Vicente'
        //const lastName = 'Yah'
        return (
            <div className="badge">
                <div className="badge_header">
                    <img src = {CompLogo} width="150" height="100" alt="Logo de la Empresa"/>
                </div>
                <div className="badge_section-name">
                    <img className="badge_avatar" src= {this.props.Avatar}  width="150" height="100" alt="Avatar"/>
                    <h1>{this.props.firstName} <br/> {this.props.lastName} </h1>
                </div>
                <div className="badge_section-info">
                    <h3> {this.props.jobTitle} </h3>
                    <div> {this.props.twitter} </div>
                </div>
                <div className="badge_footer">#huasechnology,github</div>
            </div>
        )
    }
}

export default Badge;