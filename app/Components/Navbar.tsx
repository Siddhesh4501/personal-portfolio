import './navbar.css';
import data from '@/app/Data/Navbar.json'
import globalData from '@/app/Data/global.json'

const Navbar = async () => {
    return (
        <header className="navbar">
            <div className="name-logo">
                S
            </div>
            <div className="navtags col-2">
                <ul>

                {data["links"].map((sectionName, index) => (
                     <li key={index}>
                        <a href={"#" + sectionName}>
                            <span className="neon sf-mono">0{index + 1}.</span> {sectionName}
                        </a>
                     </li>
                ))}
                <a href={globalData["resumeLink"]} target="_blank" className="nav-resume-btn">
                    <button className="neon-btn">
                        Resume
                    </button>
                </a> 
                </ul>
            </div>
        </header>
    )
  };
  
  export default Navbar;