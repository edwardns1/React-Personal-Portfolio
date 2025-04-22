import React from 'react';

function About() {
    return (
        <div className="about-page">
            <h2>About Me</h2>

            <p className="bio">
                I am a passionate web developer and designer focused on creating seamless, visually engaging digital experiences. With a keen eye for design and a strong understanding of development principles, I craft responsive websites that are both functional and aesthetically pleasing. Always eager to learn and grow, I aim to combine creativity and technical expertise to deliver high-quality web solutions that meet user needs and industry standards.
            </p>

            <h3 className="section-heading">Skills</h3>
            <ul className="skills-list">
                <li>HTML, CSS, JavaScript</li>
                <li>React.js</li>
                <li>PHP, MySQL</li>
                <li>Web Design and User Experience</li>
                <li>Git, GitHub</li>
            </ul>

            <h3 className="section-heading">Interests</h3>
            <p className="interests-description">In addition to web development, I have a strong interest in:</p>
            <ul className="interests-list">
                <li>Graphic Design</li>
                <li>Filmmaking</li>
                <li>Music</li>
            </ul>
        </div>
    );
}

export default About;
