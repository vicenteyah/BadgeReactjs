import React from 'react';
import '../components/styles/BadgeNew.css'
import header from '../images/badge-header.svg'
//import Navbar from '../components/Navbar.jsx'
import Badge from '../components/Badge.jsx'
import BadgeForm from '../components/BadgeForm.jsx'

class BadgeNew extends React.Component {
    state = { form: {
        firstName: '',
        lastName: '',
        Email: '',
        jobTitle: '',
        Twitter:''
    } }

    handleChange = e => {
       // const nextForm  = this.state.form
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
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src = {header} alt="Logo"  />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                           <Badge
                           firstName={this.state.form.firstName}
                           lastName={this.state.form.lastName}
                           twitter={this.state.form.Twitter}
                           jobTitle={this.state.form.jobTitle}
                           />
                        </div>
                        <div className="col-6">
                           <BadgeForm onChange= {this.handleChange} formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default BadgeNew