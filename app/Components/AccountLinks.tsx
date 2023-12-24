import './accountlinks.css';
import Image from 'next/image';
import GithubIcon from '@/public/static/icons/github.svg'
import LinkdedInIcon from '../../public/static/icons/linkedin.svg'
import CodechefIcon from '../../public/static/icons/codechef.svg'
import InstagramIcon from '../../public/static/icons/instagram.svg'
import LeetcodeIcon from '../../public/static/icons/leetcode.svg'
const AccountLinks = () => {
    return (
    <>
        <section className="account-section">
            <div className="accounts-link">
                <Image className="account-link-icons" src={GithubIcon} alt="GithubIcon"/>
                <Image className="account-link-icons" src={LinkdedInIcon} alt="LinkdedInIcon"/>
                <Image className="account-link-icons" src={LeetcodeIcon} alt="LeetcodeIcon"/>
                <Image className="account-link-icons" src={InstagramIcon} alt="InstagramIcon"/>
                <Image className="account-link-icons" src={CodechefIcon} alt="CodechefIcon"/>
            </div>
            <div className="vertical-line">
            </div>
            </section>

            <section className="email-section">
            <div className="email-link neon">
                siddheshdpawar2003@gmail.com
            </div>
            <div className="vertical-line">
            </div>
        </section>
    </>
    )
  };
  
  export default AccountLinks;