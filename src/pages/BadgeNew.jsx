import React from 'react';
import '../components/styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar.jsx'
import Badge from '../components/Badge.jsx'
import BadgeForm from '../components/BadgeForm.jsx'

class BadgeNew extends React.Component {
    state = { form: {} }

    handleChange = e => {
       // const nextForm = this.state.form
        //nextForm[e.target.name] = e.target.form

        this.setState({
            form:{
               ...this.state.form,
               [e.target.name]: e.target.value
            }
        })
    }
    render (){
        return (
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src = {header} alt="Logo"  />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                           <Badge
                           firstName="Vicente"
                           lastName="Yah" 
                           twitter="vimx94"
                           jobTitle="Senior Frontend Engineer"
                           />
                        </div>
                        <div className="col-6">
                           <BadgeForm onChange= {this.handleChange} formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BadgeNew