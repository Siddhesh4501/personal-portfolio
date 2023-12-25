import './footer.css';
import globalData from '@/app/Data/global.json'
const Footer = () => {


    return (
        <footer className="footer-section mt-180">
        <h6 className='extra-small-font mb-5 sf-mono'>Made with 🤍 by Siddhesh</h6>
        <a href={globalData["projectRepositoryLink"]} target="_blank">
          <h6 className='extra-small-font mb-10 sf-mono'>Star/Follow on Github</h6>
        </a>
      </footer>
    )
  };
  
  export default Footer;