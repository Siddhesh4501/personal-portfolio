import './welcomepage.css';
import data from '@/app/Data/Welcompage.json'
import globalData from '@/app/Data/global.json'

const Welcomepage = () => {
    return (
        <section className="introductoion-section mt-180 section">
          <p className="neon mb-20 sf-mono">
            {data["shortIntro"]}
          </p>
          <h1 className="col-2 mb-20 extra-big-font">
            {data["name"]}.
          </h1>
          <h1 className="extra-big-font mb-30">
          {data["tagLine"]}
          </h1>
          <p className="mb-30 small-font">
          {data["shortDesc"]}
          </p>
          <p className="mb-40 small-font">
            I am always open for discussions
            <a href={globalData["linkedIn"]} target="_blank">
              <span className='neon'> @Linkedin</span>
            </a>.
          </p>

            <a href={"mailto:" + globalData["email"]} target="_blank">
              <button className="neon-btn neon-btn-big">
                  Hire Me!
              </button>
            </a>
            <a href={globalData["resumeLink"]} target="_blank" className="homepage-resume-btn">
                <button className="neon-btn  neon-btn-big">
                    Resume
                </button>
            </a> 
      </section>

    )
  };
  
  export default Welcomepage;