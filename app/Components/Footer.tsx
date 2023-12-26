import './footer.css';
import Image from 'next/image';
import data from '@/app/Data/AccountLinks.json'
import globalData from '@/app/Data/global.json'
const Footer = () => {


    return (
        <footer className="footer-section mt-180">
          <div className="accounts-link mb-20 footer-account-links">
            {data["accountLinks"].map((account, index) => (
                <a href={account["url"]} key={index} target="_blank">
                    <Image className="account-link-icons" src={globalData["iconsBasePath"] + account["iconPath"]} alt={account["iconName"]} width={0} height={0}/>
                </a>
              ))}
          </div>
        <h6 className='extra-small-font mb-5 sf-mono'>Made with 🤍 by Siddhesh</h6>
        <a href={globalData["projectRepositoryLink"]} target="_blank">
          <h6 className='extra-small-font mb-10 sf-mono'>Star/Follow on Github</h6>
        </a>
      </footer>
    )
  };
  
  export default Footer;