import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-container">
            <div className="home">
                <h1>Hello! My name is Tom Holmes</h1>
                <h1>and I'm a Developer!</h1>
                <h1>Welcome to my Personal Site!</h1>
                <button type="button" to="/about" className="home-about-button"><Link className="aboutbutton" to={`/about`}>Learn More About Me</Link></button>
            </div>
        </div>
    )
}

export default Home 