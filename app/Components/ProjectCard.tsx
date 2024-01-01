import './projectCard.css';
import Image from 'next/image';
// import globalData from '@/app/Data/global.json'


const ProjectCard = (props : any) => {
    const {reverse = 0, projectName, projectDesc, projectTechStack , projectLinks, projectImgLink, globalData} = props;

    const projectCardClass = `project-card mb-100 ${reverse ? "row-reverse" : ""}`
    const firstHalf = `first ${reverse ? "text-align-right" : ""}`;
    const projectTechStackClass = `project-tech-stack sf-mono extra-small-font ${reverse ? "row-reverse" : ""}`;
    const projectDescClass = `project-desc mb-20 ${reverse ? "ml--10" : ""}`;
    const projectImgClass = `project-img second ${reverse ? "left-0" : ""}`;
    const animationValue = reverse ? "fade-left" : "fade-right"
    return (
        <div className={projectCardClass}  data-aos={animationValue}  data-aos-once="true">
            <div className={firstHalf}>
                <h6 className="neon sf-mono mb-10 extra-small-font">Featured project</h6>
                <h2 className="mb-20 project-card-name ">{projectName}</h2>
                <div className={projectDescClass}>
                    {projectDesc}
                </div>
                <div className="mb-20">
                    <ul className={projectTechStackClass}>
                        {projectTechStack.map((tech : string,index : number) =>(
                                <li key={index}>{tech}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="project-links">
                    <ul className={projectTechStackClass}>
                    {projectLinks.map((link : any, index : number) => (
                        <a href={link["resourceLink"]} key={index} target="_blank">
                            <Image  className="account-link-icons" src={globalData["iconsBasePath"] + link["iconLink"]} alt={link["name"]} width={0} height={0}/>
                        </a>
                    ))}
                    </ul>
                </div>
            </div>

            <div className={projectImgClass}>
                <Image src={projectImgLink} alt={projectName} width={500} height={300} />
                <div className="overlay">
                </div>
            </div>

        </div>
    )
  };
  
  export default ProjectCard;