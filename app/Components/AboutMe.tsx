import './aboutme.css';
// import data from '@/app/Data/About.json'
// import globalData from '@/app/Data/global.json'
import Image from 'next/image';
import { Element } from 'react-scroll';

interface AboutMeProps {
  AboutData: any/* specify the type for NavbarData */;
  globalData: any; // Use any if you want to allow any type
}


const AboutMe : React.FC<AboutMeProps>  = ({AboutData, globalData}) => {

    return (
      AboutData ? 
      <Element name="About" className="element">

        <section className="about-section section mb-300" id="About" data-aos="fade-up" data-aos-once="true">
        <h2 className='col-2 sub-header-1 mb-40 flex'>
          <span className="neon sf-mono">01. </span>
          <span>
            {AboutData["sectionName"]}
          </span>
          <span className='dash-line'></span>
        </h2>
        <div className="about-me-content">
          <div className="intro-para small-font">
           <p>
           {AboutData["information"].map((info:any, index:any) => {
              if(typeof(info) === 'string')
                  return <span key={index}>{info}</span>;
              else{
                if(info["type"] === "externalLink"){
                  return <a key={index} href={info["url"]} target="_blank" className="hover-underline-animation">
                      <span className='neon'>{info["name"]}</span>
                    </a>
                }
                else if(info["type"] === "break"){
                  return <span key={index}><br/><br/></span>
                }
              }
           })}
           </p>

            <p className="mb-20"> 
            Here is a list of the technologies that Ive worked with.
            </p>
              <ul className="skills-list neon extra-small-font sf-mono">
              {AboutData["skills"].map((skill:any, index:any) => (
                    <li key={index}>{index + 1}. {skill}</li>
                ))}
              </ul>
          </div>
          <div className="profile-picture">
            <Image src="https://i.ibb.co/gVHJphb/1703499046855.jpg" alt="Siddhesh Pawar" width={"100000"} height={"100000"}/>
            {/* <Image src={globalData["imagesBasePath"] + data["profilePictureLink"]} alt="Siddhesh Pawar" width={"100000"} height={"100000"}/> */}
          </div>
        </div>
      </section>

      </Element> : <></>
    )
  };
  
  export default AboutMe;