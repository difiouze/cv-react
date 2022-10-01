import React from "react";
import ME from '../../assets/me-about.jpg'
import { FaAward} from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Faisons connaissance</h5>
      <h2>A propos</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ ME } alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>

          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet alias nesciunt voluptates libero optio ratione quaerat nemo numquam incidunt, ipsa deserunt atque, blanditiis neque distinctio commodi labore iste ipsam?</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  );
};

export default About;
