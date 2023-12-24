import './navbar.css';
import data from '@/app/Data/Navbar.json'
const Navbar = async () => {

    console.log(data);
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
                {/* <li>
                    <span className="neon sf-mono">01.</span> About
                </li>
                <li>
                <span className="neon sf-mono">02.</span> Experience
                </li>
                <li>
                <span className="neon sf-mono">03.</span>  Projects
                </li>
                <li>
                <span className="neon sf-mono">04.</span> Contact
                </li> */}

                   <a href={data["resumeLink"]} target="_blank">
                    <button  className="neon-btn">
                        Resume
                    </button>
                    </a> 
                </ul>
            </div>
        </header>
    )
  };
  
  export default Navbar;