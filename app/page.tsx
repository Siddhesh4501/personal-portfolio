
'use client'

import './styles/homepage.css'
import Navbar from './Components/Navbar';
import AccountLinks from './Components/AccountLinks';
import Welcomepage from './Components/Welcompage';
import AboutMe from './Components/AboutMe';
import WorkSection from './Components/WorkSection';
import ProjectSection from './Components/ProjectSection';
import Footer from './Components/Footer';
import ContactMe from './Components/ContactMe';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoaderComp from './Components/Loader';

import { useEffect, useState } from 'react'
import {  toast } from 'react-toastify';



export default function Home() {

  const [allData ,setAllData] = useState<any>({});
  const [loader ,setLoader] = useState<any>(false);

  const notify = () => toast.error('Check your connection and try again later!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
    

  const fetchAllData = async()=>{
    setLoader(true);
    let data = await fetch("/api",{ next: { revalidate: 3600 } });
    if(data.status == 400){
      notify();
    }
    else{
      data = await data.json();
      setAllData(data);
    }
    setLoader(false);
  }
  useEffect(() => {
    fetchAllData();
    AOS.init({
         duration: 800,
         once: false,
       });
 }, [])
  return (
    
    loader ?
      <LoaderComp/>
    :
      <>
        <Navbar NavbarData = {allData["NavbarData"]} globalData={allData["GlobalData"]}/>
        <AccountLinks AccountLinksData = {allData["AccountLinksData"]} globalData={allData["GlobalData"]}/>
        <div className="container-1">
          <Welcomepage  WelcomePageData = {allData["WelcomePageData"]} globalData={allData["GlobalData"]}/>
          <AboutMe  AboutData = {allData["AboutData"]} globalData={allData["GlobalData"]}/>
          <WorkSection WorkData = {allData["WorkData"]} globalData={allData["GlobalData"]}/>
          <ProjectSection ProjectData = {allData["ProjectData"]} globalData={allData["GlobalData"]}/>
          <ContactMe FooterData = {allData["FooterData"]} globalData={allData["GlobalData"]}/>
          <Footer AccountLinksData = {allData["AccountLinksData"]} globalData={allData["GlobalData"]}/>
        </div>
      </>
  )
}
