import React from 'react'
import './expirience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Expirience = () => {
    return (
        <section>
          <h5>What Skill I Have</h5>
          <h2>My Expirience</h2>  

          <div className="container expirience__container">
            <div className="expirience__frontend">
              <h3>Main Technologies</h3>
              <div className="expirience__content">
                <article className="expirience__details">
                  <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>React</h4>
                    <small className="text-light">Basic</small>
                  </div>
                </article>
                <article className="expirience__details">
                <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>Redux</h4>
                    <small className="text-light">Basic</small>
                  </div>
                </article>
                <article className="expirience__details">
                <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>Next.js</h4>
                    <small className="text-light">Basic</small>
                  </div>
                </article>
                <article className="expirience__details">
                <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>Vue.js</h4>
                    <small className="text-light">Basic</small>
                  </div>
                </article>
                <article className="expirience__details">
                <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>Node.js</h4>
                    <small className="text-light">Intermidiate</small>
                  </div>
                </article>
                <article className="expirience__details">
                <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>JavaScript</h4>
                    <small className="text-light">Basic</small>
                  </div>
                </article>
                <article className="expirience__details">
                <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>GraphQL</h4>
                    <small className="text-light">Basic</small>
                  </div>
                </article>
              </div>
            </div>

            <div className="expirience__Other">
              <h3>Other Technologies</h3>
              <div className="expirience__content">
                <article className="expirience__details">
                <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>Docker</h4>
                    <small className="text-light">Basic</small>
                  </div>
                </article>
                <article className="expirience__details">
                <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>Sketch/Figma</h4>
                    <small className="text-light">Intermidiate</small>
                  </div>
                </article>
                <article className="expirience__details">
                <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>Jira</h4>
                    <small className="text-light">Intermidiate</small>
                  </div>
                </article>
                <article className="expirience__details">
                <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>GIT</h4>
                    <small className="text-light">Expirienced</small>
                  </div>
                </article>
                <article className="expirience__details">
                <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>CSS/SASS</h4>
                    <small className="text-light">Intermidiate</small>
                  </div>
                </article>
                <article className="expirience__details">
                <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>Bootstrap/Tailwind</h4>
                    <small className="text-light">Expirienced</small>
                  </div>
                </article>
                <article className="expirience__details">
                <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>Linux</h4>
                    <small className="text-light">Basic</small>
                  </div>
                </article>
                <article className="expirience__details">
                <BsFillPatchCheckFill className="expirience__details-icon"/>
                  <div>
                    <h4>MacOS</h4>
                    <small className="text-light">Intermidiate</small>
                  </div>
                </article>
              </div>
            
            </div>
          </div>
        </section>
    )
}

export default Expirience
