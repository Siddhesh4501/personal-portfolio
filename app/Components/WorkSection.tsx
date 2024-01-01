'use client'
import './worksection.css';
import { useState } from 'react';
// import data from '@/app/Data/Work.json'
import { Element } from 'react-scroll';

interface WorkSectionProps {
  WorkData: any/* specify the type for NavbarData */;
  globalData: any; // Use any if you want to allow any type
}

const WorkSection: React.FC<WorkSectionProps>  = ({WorkData, globalData}) => {

  const [workSectionIndex, changeWorkSectionIndex] = useState(0);

  const toggleWorkSectionInformation = (index : number)=>{
    changeWorkSectionIndex(index);
    // console.log(index);
  }
    return (
      WorkData ? 
      <Element name="Experience" className="element">
        <section className="section mt-180" id="Experience"  data-aos="fade-up"  data-aos-once="true">
        <h2 className='col-2 sub-header-1 mb-40 flex'>
          <span className="neon sf-mono">02. </span>
            {WorkData["sectionName"]}
          <span className='dash-line'></span>
        </h2>

        <div className="work-content">
            <div className="work-content-sidebar">
                <ul>

                {WorkData["Companies"].map((company : any, index : any) => (
                  <li key = {index} className={(workSectionIndex == index ? 'work-content-btn-selected ' : '') + "work-content-li-btn"}  onClick={()=>toggleWorkSectionInformation(index)} >
                    <button className="work-content-btn">
                       {company["companyName"]}
                    </button>
                  </li>
                ))}
                </ul>
            </div>
            {WorkData["Companies"].map((company : any, index : any) => (
                 
                <div key={index} className="work-content-information" style={{ display: workSectionIndex == index ? 'block' : 'none' }}>
                  <h3 className="sub-header-2 mb-10">
                    {company["position"]} <span className="neon">
                      @{company["companyName"]}
                    </span>
                  </h3>
                  <p className='mb-20'>
                    {company["duration"]}
                  </p>
                  <ul className="small-font">
                      {company["description"].map((information : any, index : any) => (
                        <li key={index}>
                          <span className="neon sf-mono extra-small-font">0{index + 1}. </span>  {information}
                        </li>
                    ))}
                  </ul>
                </div>
                ))}
        </div>
      </section>
      </Element> : <></>
    )
  };
  
  export default WorkSection;