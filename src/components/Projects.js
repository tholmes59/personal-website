import React from 'react';
import celtics from '../assets/celtics-roster1.jpg'
import sinatra from '../assets/sinatra-wine-app1.jpg'
import fitness from '../assets/fitness-app1.jpg'
import fitnessjs from '../assets/fitness-app-js1.jpg'
import recipe from '../assets/recipe-finder1.jpg'
import nhl from '../assets/NHL2.jpg'

const Projects = () => {
    return (
        <>
        <h1 className="project-header">Project Portfolio</h1>
        <div className="projects-container">
            <div className="project-item">
                <img src={nhl} alt="NHL Stats" className="project-item-img"/>
                <p className="project-title">NHL Stats</p>
                <div className="project-overlay"></div>
                <div className="project-button">
                    <a href="https://github.com/tholmes59/nhl-stats" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://drive.google.com/open?id=15ud9qbVJUunRiPF1m2o7VwuukxIOC6uQ" target="_blank" rel="noopener noreferrer">DEMO</a>
                </div>
            </div>
            <div className="project-item">
                <img src={recipe} alt="recipe finder" className="project-item-img"/>
                <p className="project-title">Recipe Finder</p>
                <div className="project-overlay"></div>
                <div className="project-button">
                    <a href="https://github.com/tholmes59/recipe-finder-frontend.git" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://drive.google.com/open?id=1YC61DAm99lLXjq7kaaSueg-r3S1UQ2nv" target="_blank" rel="noopener noreferrer">DEMO</a>
                </div>
            </div>
            <div className="project-item">
                <img src={fitness} alt="fitness app" className="project-item-img"/>
                <p className="project-title">Fitness App</p>
                <div className="project-overlay"></div>
                <div className="project-button">
                    <a href="https://github.com/tholmes59/fitness-app" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://drive.google.com/open?id=1A_5WAZq63dudWBj0aCqbDfXDNfEjcH47" target="_blank" rel="noopener noreferrer">DEMO</a>
                </div>
            </div>
            <div className="project-item">
                <img src={fitnessjs} alt="fitness app with js" className="project-item-img"/>
                <p className="project-title">Fitness App w/ js</p>
                <div className="project-overlay"></div>
                <div className="project-button">
                    <a href="https://github.com/tholmes59/fitness-app-js" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://drive.google.com/open?id=1KItdynB9GHr9sAYiTKNlKdSfv4m7uz60" target="_blank" rel="noopener noreferrer">DEMO</a>
                </div>
            </div>
            <div className="project-item">
                <img src={sinatra} alt="sinatra wine app" className="project-item-img"/>
                <p className="project-title">Sinatra Wine App</p>
                <div className="project-overlay"></div>
                <div className="project-button">
                    <a href="https://github.com/tholmes59/sinatra-wine-app" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://drive.google.com/open?id=1g0Th6Q-3_Buvb0QD7Z-mNrMkTX-YgfAD" target="_blank" rel="noopener noreferrer">DEMO</a>
                </div>
            </div>
            <div className="project-item">
                <img src={celtics} alt="celtics roster" className="project-item-img"/>
                <p className="project-title">Celtics Roster</p>
                <div className="project-overlay"></div>
                <div className="project-button">
                    <a href="https://github.com/tholmes59/celtics-roster-cli-project" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://drive.google.com/open?id=1Ip4hY0_xTlX2SFCeSje85CoAZnsa1eOS" target="_blank" rel="noopener noreferrer">DEMO</a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Projects;