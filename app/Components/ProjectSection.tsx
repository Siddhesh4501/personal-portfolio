import ProjectCard from './ProjectCard'
import data from '@/app/Data/Project.json'
import globalData from '@/app/Data/global.json'
import { Element } from 'react-scroll';
const ProjectSection = () => {

    return (
      <Element name="Projects" className="element">

        <section className="section mt-180" id = "Projects"  data-aos="fade-up"  data-aos-once="true">
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
      </Element>

    )
  };
  
  export default ProjectSection;