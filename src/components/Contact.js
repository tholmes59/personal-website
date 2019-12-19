import React from 'react';

class Contact extends React.Component {

    state = {
        name: '',
        email: '',
        message: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Contact!</h1>
                <div className="signup-container">
                    <div className="signup-form">
                        <form onSubmit={this.handleSubmit} >
                            <h2 className="signup-header">Message Me</h2>
                            <input type="text" className="signup-name" placeholder="Enter Name..." value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                            <input type="email" className="signup-email" placeholder="Enter Email..." value={this.state.email} name="email" onChange={this.handleChange} /><br/>
                            <input type="textarea" className="signup-message" placeholder="Enter Message..." value={this.state.message} name="message" onChange={this.handleChange} /><br/>
                            <input type="submit" className="signup-button" value="Send Message!"/>
                        </form>
    
                        
                    </div>
                </div>
            </div>
        );
    }
};

export default Contact;