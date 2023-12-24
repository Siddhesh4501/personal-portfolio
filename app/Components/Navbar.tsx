import './navbar.css';
const Navbar = () => {

    return (
        <header className="navbar">
            <div className="name-logo">
                S
            </div>
            <div className="navtags col-2">
                <ul>
                <li>
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
                </li>
                <button  className="neon-btn">
                    Resume
                </button>
                </ul>
            </div>
        </header>
    )
  };
  
  export default Navbar;