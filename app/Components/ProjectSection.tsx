import ProjectCard from './ProjectCard'
// import data from '@/app/Data/Project.json'
// import globalData from '@/app/Data/global.json'
import { Element } from 'react-scroll';

interface ProjectSectionProps {
  ProjectData: any/* specify the type for NavbarData */;
  globalData: any; // Use any if you want to allow any type
}

const ProjectSection : React.FC<ProjectSectionProps>= ({ProjectData, globalData}) => {

    return (
      ProjectData ? 
      <Element name="Projects" className="element">
        <section className="section mt-180" id = "Projects"  data-aos="fade-up"  data-aos-once="true">
        <h2 className='col-2 sub-header-1 mb-40 flex'>
          <span className="neon sf-mono">03. </span>
          {ProjectData["sectionName"]}
          <span className='dash-line'></span>
        </h2>
        {
          ProjectData["projects"].map((project : any, index : any) =>(
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
              globalData={globalData}
            />
          ))
        }
      </section>
      </Element> : <></>

    )
  };
  
  export default ProjectSection;