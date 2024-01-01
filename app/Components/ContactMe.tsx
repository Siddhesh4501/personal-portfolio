import './contactme.css';

// import globalData from '@/app/Data/global.json'
// import data from '@/app/Data/Footer.json'
import { Element } from 'react-scroll';


interface ContactMeProps {
  FooterData: any/* specify the type for NavbarData */;
  globalData: any; // Use any if you want to allow any type
}

const ContactMe : React.FC<ContactMeProps>  = ({FooterData, globalData}) => {
    return (
      FooterData ? 
      <Element name="Contact" className="element">

        <section className="contact-me-section" id = "Contact"  data-aos="fade-up"  data-aos-once="true">
        <h4 className="neon sf-mono mb-20 small-font">
          {FooterData["sectionName"]}
        </h4>
        <h1 className='extra-big-font sub-header-2 mb-40'>
          {FooterData["tagLine"]}
        </h1>
        <p className="contact-me-desc mb-20">
          {FooterData["shortDesc"]}
        </p>
        <a href={"mailto:" + globalData["email"]} target="_blank">
          <button className="neon-btn neon-btn-big">
              Mail Me
          </button>
        </a>
      </section>
      </Element> : <></>
    )
  };
  
  export default ContactMe;