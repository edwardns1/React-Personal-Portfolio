import React from 'react';
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';

function Projects() {
    return (
        <div className="projects-page">
            <h2>My Projects</h2>

            <div className="project">
                <div className="project-content">
                    <img src={project1Image} alt="Project 1" className="project-image" />
                    <div className="project-text">
                        <h3>Game Review Website</h3>
                        <p>
                            This project is a funtional game review website which lets users log in either as an admin or reviewer. Reviewers can log in and see reviews, view comments, and posts their own reviews. Admins can do the same but also have the ability to delete reviews.
                        </p>
                        <a href="https://students.gaim.ucf.edu/~ed040534/dig3134c/assignment05/" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-content">
                    <img src={project2Image} alt="Concert Ticket App Design" className="project-image" />
                    <div className="project-text">
                        <h3>Event Ticketing App</h3>
                        <p>
                            This project is a design for a ticketing app where users can purchase tickets for concerts and festivals. The design aims to be intuitive and bold with vibrant colors and a simple layout.
                        </p>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-content">
                    <img src={project3Image} alt="Project 3" className="project-image" />
                    <div className="project-text">
                        <h3>Quiz App</h3>
                        <p>
                            This app lets users take a three question quiz with a variety of choices from mulitple choice to multiple selection and true or false. After users submit their answers they are given a summary screen which shows their choices and their score.
                        </p>
                        <a href="https://github.com/edwardns1/React-Native-Quiz-App" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Projects;
