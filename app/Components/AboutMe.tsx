import './aboutme.css';
import data from '@/app/Data/About.json'
import globalData from '@/app/Data/global.json'
import Image from 'next/image';

const AboutMe = () => {

    return (
        <section className="about-section section mb-300" id="About">
        <h2 className='col-2 sub-header-1 mb-40 flex'>
          <span className="neon sf-mono">01. </span>
          <span>
            {data["sectionName"]}
          </span>
          <span className='dash-line'></span>
        </h2>
        <div className="about-me-content">
          <div className="intro-para small-font">
           <p>
           {data["information"].map((info, index) => {
              if(typeof(info) === 'string')
                  return <span key={index}>{info}</span>;
              else{
                if(info["type"] === "externalLink"){
                  return <a key={index} href={info["url"]} target="_blank">
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
              {data["skills"].map((skill, index) => (
                    <li key={index}>{index + 1}. {skill}</li>
                ))}
              </ul>
          </div>
          <div className="profile-picture">
            <Image src={globalData["imagesBasePath"] + data["profilePictureLink"]} alt="Siddhesh Pawar" width={"100000"} height={"100000"}/>
          </div>
        </div>
      </section>
    )
  };
  
  export default AboutMe;