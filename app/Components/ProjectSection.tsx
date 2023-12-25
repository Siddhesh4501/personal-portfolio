import ProjectCard from './ProjectCard'
import data from '@/app/Data/Project.json'
import globalData from '@/app/Data/global.json'

const ProjectSection = () => {

    return (
        <section className="section mt-180" id = "Projects">
        <h2 className='col-2 sub-header-1 mb-40 flex'>
          <span className="neon sf-mono">03. </span>
          {data["sectionName"]}
          <span className='dash-line'></span>
        </h2>
        {
          data["projects"].map((project, index) =>(
            <ProjectCard 
              key = {index} 
              reverse = {index % 2} 
              projectName = {project["projectName"]} 
              projectDesc = {project["projectDesc"]}
              projectTechStack = {project["projectTechStack"]}
              projectImgLink = {project["projectImgLink"]}
              projectLinks = {project["projectLinks"]}
              imagesBasePath = {globalData["imagesBasePath"]}
              iconsBasePath = {globalData["iconsBasePath"]}
            />
          ))
        }
      </section>

    )
  };
  
  export default ProjectSection;