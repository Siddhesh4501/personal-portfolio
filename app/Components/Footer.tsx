import './footer.css';
import Image from 'next/image';
// import data from '@/app/Data/AccountLinks.json'
// import globalData from '@/app/Data/global.json'


interface FooterProps {
  AccountLinksData: any/* specify the type for NavbarData */;
  globalData: any; // Use any if you want to allow any type
}


const Footer: React.FC<FooterProps>  = ({AccountLinksData, globalData}) => {


    return (
        AccountLinksData ? 
        <footer className="footer-section mt-180 mb-20">
          <div className="accounts-link mb-20 footer-account-links">
            {AccountLinksData["accountLinks"].map((account : any, index : any) => (
                <a href={account["url"]} key={index} target="_blank">
                    <Image className="account-link-icons" src={globalData["iconsBasePath"] + account["iconPath"]} alt={account["iconName"]} width={0} height={0}/>
                </a>
              ))}
          </div>
        <a href={globalData["projectRepositoryLink"]} target="_blank" className="footer-repo-link">
          <h6 className='extra-small-font mb-5 sf-mono'>Made with 🤍 by Siddhesh</h6>
          <h6 className='extra-small-font mb-10 sf-mono'>Star/Follow on Github</h6>
        </a>
      </footer> : <></>
    )
  };
  
  export default Footer;