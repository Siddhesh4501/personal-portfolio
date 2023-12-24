import './accountlinks.css';
import Image from 'next/image';
import GithubIcon from '@/public/static/icons/github.svg'

import data from '@/app/Data/AccountLinks.json'
import profile from '@/app/Data/Homepage.json'
const AccountLinks = () => {
    console.log(data);
    return (
    <>
        <section className="account-section">
            <div className="accounts-link">

            {data["accountLinks"].map((account, index) => (
                <a href={account["url"]} key={index}>
                    <Image  className="account-link-icons" src={data["basePath"] + account["iconPath"]} alt={account["iconName"]} width={0} height={0}/>
                </a>
                ))}
                {/* <Image className="account-link-icons" src={GithubIcon} alt="GithubIcon"/> */}
            </div>
            <div className="vertical-line">
            </div>
            </section>

            <section className="email-section">
            <div className="email-link neon">
                {profile["email"]}
            </div>
            <div className="vertical-line">
            </div>
        </section>
    </>
    )
  };
  
  export default AccountLinks;