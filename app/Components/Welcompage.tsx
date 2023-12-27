import './welcomepage.css';
import data from '@/app/Data/Welcompage.json'
import globalData from '@/app/Data/global.json'

const Welcomepage = () => {
    const initialDelay = 1000;
    const delay = 100;
    return (
        <section className="introductoion-section mt-180 section">
          <p className="neon mb-20 sf-mono" data-aos="fade-right"  data-aos-delay={initialDelay}  data-aos-once="true">
            {data["shortIntro"]}
          </p>
          <h1 className="col-2 mb-20 extra-big-font"  data-aos="fade-right"  data-aos-delay={initialDelay + delay} data-aos-once="true">
            {data["name"]}.
          </h1>
          <h1 className="extra-big-font mb-30"  data-aos="fade-right"  data-aos-delay={initialDelay + delay * 2} data-aos-once="true">
          {data["tagLine"]}
          </h1>
          <p className="mb-30 small-font"  data-aos="fade-right"  data-aos-delay={initialDelay + delay * 3} data-aos-once="true">
          {data["shortDesc"]}
          </p>
          <p className="mb-40 small-font"  data-aos="fade-right"  data-aos-delay={initialDelay + delay * 4} data-aos-once="true">
            I am always open for discussions
            <a href={globalData["linkedIn"]} target="_blank">
              <span className='neon'> @Linkedin</span>
            </a>.
          </p>

            <a href={"mailto:" + globalData["email"]} target="_blank" >
              <button className="neon-btn neon-btn-big"  data-aos="fade-right"  data-aos-delay={initialDelay + delay * 5} data-aos-once="true">
                  Hire Me!
              </button>
            </a>
            <a href={globalData["resumeLink"]} target="_blank" className="homepage-resume-btn" >
                <button className="neon-btn  neon-btn-big" data-aos="fade-right"  data-aos-delay={initialDelay + delay * 6} data-aos-once="true">
                    Resume
                </button>
            </a> 
      </section>

    )
  };
  
  export default Welcomepage;