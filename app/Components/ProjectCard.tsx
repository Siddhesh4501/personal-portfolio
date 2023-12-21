import './projectCard.css';
import Image from 'next/image';
const ProjectCard = () => {

    return (
        <div className="project-card mb-100">
            <h6 className="neon sf-mono mb-10  extra-small-font">Featured project</h6>
            <h2 className="mb-20 project-card-name ">Book Desk</h2>
            <div className="project-desc mb-20">
            An android && ios application which suggests the best study material to the students reviewed by senior students and professors. Here any one can sell/buy/donate the old study material along with sharing the soft-copies.
            </div>
            <div className="project-tech-stack sf-mono extra-small-font mb-20">
                <ul>
                    <li>Dart</li>
                    <li>Firebase</li>
                </ul>
            </div>
            <div className="project-links">
                <ul>
                    <li>Github</li>
                </ul>
            </div>

            <div className="project-img">
                <Image src="/static/img1.jpg" alt="Example" width={500} height={300} />
            </div>

        </div>
    )
  };
  
  export default ProjectCard;