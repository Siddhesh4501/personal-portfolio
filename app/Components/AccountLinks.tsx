import './accountlinks.css';
import Image from 'next/image';
// import data from '@/app/Data/AccountLinks.json'
// import globalData from '@/app/Data/global.json'



interface AccountLinksProps {
    AccountLinksData: any/* specify the type for NavbarData */;
    globalData: any; // Use any if you want to allow any type
  }


const AccountLinks : React.FC<AccountLinksProps>  = ({AccountLinksData, globalData}) => {
    const initialDelay = 2000;
    return (
        AccountLinksData ? 
    <>
        <section className="accounts-section"  data-aos="fade-right"  data-aos-delay={initialDelay}>
            <div className="accounts-link flex-col">
            {AccountLinksData["accountLinks"].map((account:any, index:any) => (
                <a href={account["url"]} key={index} target="_blank">
                    <Image  className="account-link-icons" src={globalData["iconsBasePath"] + account["iconPath"]} alt={account["iconName"]} width={0} height={0}/>
                </a>
                ))}
            </div>
            <div className="vertical-line">
            </div>
        </section>

        <section className="email-section"   data-aos="fade-left"  data-aos-delay={initialDelay}>
            <div className="email-link neon">
            <a href={"mailto:" + globalData["email"]} target="_blank">
                {globalData["email"]}
            </a>
            </div>
            <div className="vertical-line">
            </div>
        </section>
    </> : <></>
    )
  };
  
  export default AccountLinks;