import './aboutme.css';
const AboutMe = () => {

    return (
        <section className="about-section section mb-300">
        <h2 className='col-2 sub-header-1 mb-40 flex'>
          <span className="neon sf-mono">01. </span>
          <span>
            About Me 
          </span>
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
    )
  };
  
  export default AboutMe;