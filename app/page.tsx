

import './styles/homepage.css'
import Navbar from './Components/Navbar';
import AccountLinks from './Components/AccountLinks';
import Welcomepage from './Components/Welcompage';
import AboutMe from './Components/AboutMe';
import WorkSection from './Components/WorkSection';
import ProjectSection from './Components/ProjectSection';
import Footer from './Components/Footer';
import ContactMe from './Components/ContactMe';
export default function Home() {
  return (
    <>
      <Navbar/>
      <AccountLinks/>
      <div className="container-1">
        <Welcomepage/>
        <AboutMe/>
        <WorkSection/>
        <ProjectSection/>
        <ContactMe/>
        <Footer/>
      </div>
    </>
  )
}
