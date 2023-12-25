import './accountlinks.css';
import Image from 'next/image';
import data from '@/app/Data/AccountLinks.json'
import globalData from '@/app/Data/global.json'
const AccountLinks = () => {
    console.log(data);
    return (
    <>
        <section className="account-section">
            <div className="accounts-link">

            {data["accountLinks"].map((account, index) => (
                <a href={account["url"]} key={index} target="_blank">
                    <Image  className="account-link-icons" src={globalData["iconsBasePath"] + account["iconPath"]} alt={account["iconName"]} width={0} height={0}/>
                </a>
                ))}
            </div>
            <div className="vertical-line">
            </div>
            </section>

            <section className="email-section">
            <div className="email-link neon">
            <a href={"mailto:" + globalData["email"]} target="_blank">
                {globalData["email"]}
            </a>
            </div>
            <div className="vertical-line">
            </div>
        </section>
    </>
    )
  };
  
  export default AccountLinks;