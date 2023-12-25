import './contactme.css';

import globalData from '@/app/Data/global.json'
import data from '@/app/Data/Footer.json'

const ContactMe = () => {
    return (
        <section className="contact-me-section" id = "Contact">
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
    )
  };
  
  export default ContactMe;