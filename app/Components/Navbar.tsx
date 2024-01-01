import './navbar.css';
// import data from '@/app/Data/Navbar.json'
// import globalData from '@/app/Data/global.json'
import Image from 'next/image';
import Logo from '../../public/static/icons/logo.svg';
import { Link } from 'react-scroll';

interface NavbarProps {
    NavbarData: any/* specify the type for NavbarData */;
    globalData: any; // Use any if you want to allow any type
  }


const Navbar: React.FC<NavbarProps> = ({NavbarData, globalData}) => {
    return (
        NavbarData ? 
        <header className="navbar">
            <div className="name-logo">
            </div>
            <div className="navtags col-2" >
                <ul> 
                {NavbarData["links"].map((sectionName:any, index:any) => (
                     <li key={index} data-aos="fade-down" data-aos-delay={`${50*index}`}  data-aos-once="true">
                        <Link to={sectionName} spy={true} smooth={true} duration={100 * (index + 1)} offset={-75} >
                            <span className="neon sf-mono">0{index + 1}.</span> {sectionName}
                        </Link>
                     </li>
                ))}
                <a href={globalData["resumeLink"]} target="_blank" className="nav-resume-btn" data-aos="fade-down" data-aos-delay={`${50*NavbarData["links"].length}`}  data-aos-once="true">
                    <button className="neon-btn">
                        Resume
                    </button>
                </a> 
                </ul>
            </div>
        </header> : <></>
    )
  };
  
  export default Navbar;