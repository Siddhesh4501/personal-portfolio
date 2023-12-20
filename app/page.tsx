import './styles/homepage.css'
export default function Home() {
  return (
    <>
    <header className="navbar">
      <div className="name-logo">
        S
      </div>
      <div className="navtags col-2">
        <ul>
          <li>
            <span className="neon">01.</span> About
          </li>
          <li>
          <span className="neon">02.</span> Experience
          </li>
          <li>
          <span className="neon">03.</span>  Projects
          </li>
          <li>
          <span className="neon">04.</span> Contact
          </li>
          <button  className="neon-btn">
            Resume
          </button>
        </ul>
      </div>
    </header>
    <div className="container-1">

      <section className="introductoion-section mt-180 section">
          <p className="neon mb-20">
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

      <section className="about-section section mt-180">
        <h3 className='col-2 sub-header-1 mb-40'>
          <span className="neon">01. </span>
          About Me 
          <span className='dash-line'></span>
        </h3>
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

            <p> 
            Here is a list of the technologies that Ive worked with.
            </p>
              <ul className="skills-list">
                <li>C || C++</li>
                <li>C || C++</li>
                <li>C || C++</li>
                <li>C || C++</li>
                <li>C || C++</li>
                <li>C || C++</li>
                <li>C || C++</li>
                <li>C || C++</li>
                <li>C || C++</li>
                <li>C || C++</li>
              </ul>
          </div>
          <div className="profile-picture">

          </div>
        </div>
      </section>

    </div>
    </>
  )
}
