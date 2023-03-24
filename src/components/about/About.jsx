import React from 'react'
import './about.css'
import ME from '../../assets/meAboutB.png'


const About = () => {
    return (
        <div>
            <section id='about'>
                <h5>Get To Know</h5>
                <h2>About Me</h2>

                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                        </div>
                    </div>
                    <div className="about__content">
                        <p>
                        I am a Front-end junior developer with a minor in UX and UI. I'm interested 
                        in JavaScript, and I'm particularly passionate about reactive frameworks like React and Vue.js. I have a
                        keen eye for detail and therefore place great importance on the visual aspect of my work.
                        </p>
                        <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default About
