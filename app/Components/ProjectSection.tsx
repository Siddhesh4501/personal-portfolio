import ProjectCard from './ProjectCard'

const ProjectSection = () => {

    return (
        <section className="section mt-180">
        <h2 className='col-2 sub-header-1 mb-40 flex'>
          <span className="neon sf-mono">03. </span>
          Some Things Ive Built
          <span className='dash-line'></span>
        </h2>
        <ProjectCard reverse={0}/>
        <ProjectCard reverse={1}/>
        <ProjectCard reverse={0}/>
      </section>

    )
  };
  
  export default ProjectSection;