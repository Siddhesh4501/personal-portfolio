import './contactme.css';

import globalData from '@/app/Data/global.json'
import data from '@/app/Data/Footer.json'
import { Element } from 'react-scroll';
const ContactMe = () => {
    return (
      <Element name="Contact" className="element">

        <section className="contact-me-section" id = "Contact"  data-aos="fade-up"  data-aos-once="true">
        <h4 className="neon sf-mono mb-20 small-font">
          {data["sectionName"]}
        </h4>
        <h1 className='extra-big-font sub-header-2 mb-40'>
          {data["tagLine"]}
        </h1>
        <p className="contact-me-desc mb-20">
          {data["shortDesc"]}
        </p>
        <a href={"mailto:" + globalData["email"]} target="_blank">
          <button className="neon-btn neon-btn-big">
              Mail Me
          </button>
        </a>
      </section>
      </Element>
    )
  };
  
  export default ContactMe;