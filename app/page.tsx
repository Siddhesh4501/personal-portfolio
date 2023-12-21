'use client'
import { useState } from 'react';
import './styles/homepage.css'
import ProjectCard from './Components/ProjectCard';
export default function Home() {

  const [workSectionIndex, changeWorkSectionIndex] = useState(0);

  const toggleWorkSectionInformation = (index : number)=>{
    changeWorkSectionIndex(index);
    console.log(index);
  }








  return (
    <>
    <header className="navbar">
      <div className="name-logo">
        S
      </div>
      <div className="navtags col-2">
        <ul>
          <li>
            <span className="neon sf-mono">01.</span> About
          </li>
          <li>
          <span className="neon sf-mono">02.</span> Experience
          </li>
          <li>
          <span className="neon sf-mono">03.</span>  Projects
          </li>
          <li>
          <span className="neon sf-mono">04.</span> Contact
          </li>
          <button  className="neon-btn">
            Resume
          </button>
        </ul>
      </div>
    </header>
    <div className="container-1">

      <section className="introductoion-section mt-180 section">
          <p className="neon mb-20 sf-mono">
            Hello World! My name is
          </p>
          <h1 className="col-2 mb-20 big-font">
            Siddhesh Pawar.
          </h1>
          <h1 className="big-font mb-30">
            I love to explore & Code!
          </h1>
          <p className="mb-30 small-font">
          An aspiring software engineer with the ability to grow as an individual and <br />learn in the surrounding of talented people.
          </p>
          <p className="mb-40 small-font">
          I am always open for discussions @ <span className='neon'>Linkedin</span>.
          </p>

          <button className="neon-btn neon-btn-big">
            Hire Me!
          </button>
      </section>

      <section className="about-section section mb-300">
        <h2 className='col-2 sub-header-1 mb-40 flex'>
          <span className="neon sf-mono">01. </span>
          About Me 
          <span className='dash-line'></span>
        </h2>
        <div className="about-me-content">
          <div className="intro-para small-font">
            <p>
            Hello! Interestingly, I have been a student of Maths in my high school and got introduced to programming in my freshman year at Lovely Professional University. My interest in coding started back in 2020 during first year of B.tech . Since then, I started learning programming languages & solving problems based on data structure and algorithms. Most importantly Im a Problem Solver.
            </p>
            <p>
            Today, Im currently pursuing my Bachelors in Computer Science and Engineering (2020-2024) with 8.59 GPA aggregate.
            </p>
            <p>
            Also Ive knowledge of Web Development and created some projects on that using HTML, CSS, Javascript / React.js / Node.js, MongoDB and some other cool libraries and frameworks. m also part of some student organisations and Leading one of them.
            </p>

            <p className="mb-20"> 
            Here is a list of the technologies that Ive worked with.
            </p>
              <ul className="skills-list neon extra-small-font sf-mono">
                <li> 01. C || C++</li>
                <li> 02. Pytnon</li>
                <li> 03. React</li>
                <li> 04. HTML || CSS</li>
                <li> 05. Javascript</li>
                <li>06. Docker</li>
                <li> 07. Java</li>
                <li> 08. SQL</li>
                <li>09. MongoDB</li>
                <li>10. Git || Github</li>
              </ul>
          </div>
          <div className="profile-picture">

          </div>
        </div>
      </section>

      <section className="work-section section mt-180">
        <h2 className='col-2 sub-header-1 mb-40 flex'>
          <span className="neon sf-mono">02. </span>
            Where I have Worked
          <span className='dash-line'></span>
        </h2>

        <div className="work-content">
            <div className="work-content-sidebar">
                <ul>
                  <li className={(workSectionIndex == 0 ? 'work-content-btn-selected ' : '') + "work-content-li-btn"}  onClick={()=>toggleWorkSectionInformation(0)} >
                    <button className="work-content-btn">
                       BNY Mellon
                    </button>
                  </li>
                  <li className={(workSectionIndex == 1 ? 'work-content-btn-selected ' : '') + "work-content-li-btn"}  onClick={()=>toggleWorkSectionInformation(1)}>
                    <button className="work-content-btn">
                      YEC Club
                    </button>
                  </li>
                  <li className={(workSectionIndex == 2 ? 'work-content-btn-selected ' : '') + "work-content-li-btn"}  onClick={()=>toggleWorkSectionInformation(2)}>
                    <button className="work-content-btn">
                      MindSpark
                    </button>
                  </li>
                </ul>
            </div>
            <div className="work-content-information" style={{ display: workSectionIndex == 0 ? 'block' : 'none' }}>
              <h3 className="sub-header-2 mb-10">
                SDE Intern <span className="neon">
                   @ BNY Mellon
                </span>
              </h3>
              <p className='mb-20'>
                May 2022- July 2022
              </p>
              <ul className="small-font">
                <li>
                <span className="neon sf-mono extra-small-font">01. </span>  It was 4 week mentorship programme offered by Microsoft,being the mentee learnt various new technologies, explored Data science.
                </li>
                <li>
                <span className="neon sf-mono extra-small-font">02. </span>  Built a Recommendation engine in the supervision of Microsoft Engineer and got positive feedback from the mentor for the performance throughout the program.
                </li>
                <li>
                <span className="neon sf-mono extra-small-font">03. </span>  Got a great exposure of working in a real time industry environment.
                </li>
              </ul>
            </div>
            <div className="work-content-information" style={{ display: workSectionIndex == 1? 'block' : 'none' }}>
              <h3 className="sub-header-2 mb-10">
                SDE Intern <span className="neon">
                   @ YEC
                </span>
              </h3>
              <p className='mb-20'>
                May 2022- July 2022
              </p>
              <ul className="small-font">
                <li>
                <span className="neon sf-mono extra-small-font">01. </span>  It was 4 week mentorship programme offered by Microsoft,being the mentee learnt various new technologies, explored Data science.
                </li>
                <li>
                <span className="neon sf-mono extra-small-font">02. </span>  Built a Recommendation engine in the supervision of Microsoft Engineer and got positive feedback from the mentor for the performance throughout the program.
                </li>
                <li>
                <span className="neon sf-mono extra-small-font">03. </span>  Got a great exposure of working in a real time industry environment.
                </li>
              </ul>
            </div>
            <div className="work-content-information" style={{ display: workSectionIndex == 2 ? 'block' : 'none' }}>
              <h3 className="sub-header-2 mb-10">
                SDE Intern <span className="neon">
                   @ Mindspark
                </span>
              </h3>
              <p className='mb-20'>
                May 2022- July 2022
              </p>
              <ul className="small-font">
                <li>
                <span className="neon sf-mono extra-small-font">01. </span>  It was 4 week mentorship programme offered by Microsoft,being the mentee learnt various new technologies, explored Data science.
                </li>
                <li>
                <span className="neon sf-mono extra-small-font">02. </span>  Built a Recommendation engine in the supervision of Microsoft Engineer and got positive feedback from the mentor for the performance throughout the program.
                </li>
                <li>
                <span className="neon sf-mono extra-small-font">03. </span>  Got a great exposure of working in a real time industry environment.
                </li>
              </ul>
            </div>
        </div>
      </section>

      <section className="work-section section mt-180">
        <h2 className='col-2 sub-header-1 mb-40 flex'>
          <span className="neon sf-mono">03. </span>
          Some Things Ive Built
          <span className='dash-line'></span>
        </h2>
        <ProjectCard/>
      </section>
    </div>
    </>
  )
}
