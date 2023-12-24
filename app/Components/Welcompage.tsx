import './welcomepage.css';
const Welcomepage = () => {
    return (
        <section className="introductoion-section mt-180 section">
          <p className="neon mb-20 sf-mono">
            Hello World! My name is
          </p>
          <h1 className="col-2 mb-20 extra-big-font">
            Siddhesh Pawar.
          </h1>
          <h1 className="extra-big-font mb-30">
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

    )
  };
  
  export default Welcomepage;