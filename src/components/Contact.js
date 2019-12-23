import React from 'react';
import emailjs from 'emailjs-com'

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
        emailjs.sendForm('gmail', 'personal_contact_form', event.target, 'user_m3UPin96EnatPqEJ9n5c8')
            .then((result) => {
                console.log(result.text);
                console.log(result);
                alert("Message Sent!")
            }, (error) => {
                console.log(error.text);
            });
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    render() {
        return (
            <div>
                <div className="contact-container">
                    <div className="contact-form">
                        <form onSubmit={this.handleSubmit} >
                            <h2 className="contact-header">Message Me</h2>
                            <input type="text" className="contact-name" placeholder="Enter Name..." value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                            <input type="email" className="contact-email" placeholder="Enter Email..." value={this.state.email} name="email" onChange={this.handleChange} /><br/>
                            <textarea type="textarea" className="contact-message" placeholder="Enter Message..." value={this.state.message} name="message" onChange={this.handleChange} /><br/>
                            <input type="submit" className="contact-button" value="Send Message!"/>
                        </form>

                        <h3>{this.success}</h3>
                    </div>
                </div>
            </div>
        );
    }
};

export default Contact;

// export default function Contact() {

//     const initialState = {
//         name: "",
//         email: "",
//         message: ""
//     };

//     const [
//         { name, email, message },
//         setState
//       ] = useState(initialState);

//     const clearState = () => {
//         setState({ ...initialState });
//     };

//     const onChange = e => {
//         const { name, value } = e.target;
//         console.log(e.target)
//         setState(prevState => ({ ...prevState, [name]: value }));
//       };

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("")

//     const handleSubmit = e => {
//       e.preventDefault();
//         console.log(e.target)
//       emailjs.sendForm('gmail', 'personal_contact_form', e.target, 'user_m3UPin96EnatPqEJ9n5c8')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         })
//         .then(clearState);

//     }
  
//     return (
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <input type="hidden" name="contact_number" />
//         <label>Name</label>
//         <input type="text" name="name" value={name} onChange={onChange}/>
//         <label>Email</label>
//         <input type="email" name="email" value={email} onChange={onChange}/>
//         <label>Message</label>
//         <textarea type="text" name="message" value={message} onChange={onChange}/>
//         <input type="submit" value="Send" onClick={() => setName("")} />
//       </form>
//     );
//   }