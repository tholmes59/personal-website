import React from 'react';
import celtics from '../assets/celtics-roster.jpg'
import sinatra from '../assets/sinatra-wine-app.jpg'
import fitness from '../assets/fitness-app.jpg'
import fitnessjs from '../assets/fitness-app-js.jpg'
import recipe from '../assets/recipe-finder.jpg'

const Projects = () => {
    return (
        <>
        <h1>Projects!</h1>
        <div className="projects-container">
            <div className="project-item">
                <img src={recipe} alt="recipe finder" className="project-item-img"/>
                <p className="project-title">Recipe Finder</p>
                <div className="project-overlay"></div>
                <div class="project-button">
                    <a href="#" >Github</a>
                    <a href="#">DEMO</a>
                </div>
            </div>
            <div className="project-item">
                <img src={fitness} alt="fitness app" className="project-item-img"/>
                <p className="project-title">Fitness App</p>
                <div className="project-overlay"></div>
                <div class="project-button">
                    <a href="#" >Github</a>
                    <a href="#">DEMO</a>
                </div>
            </div>
            <div className="project-item">
                <img src={fitnessjs} alt="fitness app with js" className="project-item-img"/>
                <p className="project-title">Fitness App w/ js</p>
                <div className="project-overlay"></div>
                <div class="project-button">
                    <a href="#" >Github</a>
                    <a href="#">DEMO</a>
                </div>
            </div>
            <div className="project-item">
                <img src={sinatra} alt="sinatra wine app" className="project-item-img"/>
                <p className="project-title">Sinatra Wine App</p>
                <div className="project-overlay"></div>
                <div class="project-button">
                    <a href="#" >Github</a>
                    <a href="#">DEMO</a>
                </div>
            </div>
            <div className="project-item">
                <img src={celtics} alt="celtics roster" className="project-item-img"/>
                <p className="project-title">Celtics Roster</p>
                <div className="project-overlay"></div>
                <div class="project-button">
                    <a href="#" >Github</a>
                    <a href="#">DEMO</a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Projects;