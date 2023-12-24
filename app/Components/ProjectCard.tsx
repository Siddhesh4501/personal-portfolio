import './projectCard.css';
import Image from 'next/image';

const ProjectCard = ({reverse = 0}) => {


    const projectCardClass = `project-card mb-100 ${reverse ? "row-reverse" : ""}`
    const firstHalf = `first ${reverse ? "text-align-right" : ""}`;
    const projectTechStack = `project-tech-stack sf-mono extra-small-font ${reverse ? "row-reverse" : ""}`;
    const projectDesc = `project-desc mb-20 ${reverse ? "ml--25" : ""}`;
    const projectImg = `project-img second ${reverse ? "left-0" : ""}`;
    return (
        <div className={projectCardClass}>
            <div className={firstHalf}>
                <h6 className="neon sf-mono mb-10 extra-small-font">Featured project</h6>
                <h2 className="mb-20 project-card-name ">Book Desk</h2>
                <div className={projectDesc}>
                An android && ios application which suggests the best study material to the students reviewed by senior students and professors. Here any one can sell/buy/donate the old study material along with sharing the soft-copies.
                </div>
                <div className="mb-20">
                    <ul className={projectTechStack}>
                        <li>Dart</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className="project-links">
                    <ul className={projectTechStack}>
                        <li>Github</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>

            <div className={projectImg}>
                <Image src="/static/img1.jpg" alt="Example" width={500} height={300} />
            </div>

        </div>
    )
  };
  
  export default ProjectCard;