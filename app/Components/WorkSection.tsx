'use client'
import './worksection.css';
import { useState } from 'react';
import data from '@/app/Data/Work.json'
const WorkSection = () => {

  const [workSectionIndex, changeWorkSectionIndex] = useState(0);

  const toggleWorkSectionInformation = (index : number)=>{
    changeWorkSectionIndex(index);
    console.log(index);
  }
    return (
        <section className="section mt-180" id="Experience">
        <h2 className='col-2 sub-header-1 mb-40 flex'>
          <span className="neon sf-mono">02. </span>
            {data["sectionName"]}
          <span className='dash-line'></span>
        </h2>

        <div className="work-content">
            <div className="work-content-sidebar">
                <ul>

                {data["Companies"].map((company, index) => (
                  <li key = {index} className={(workSectionIndex == index ? 'work-content-btn-selected ' : '') + "work-content-li-btn"}  onClick={()=>toggleWorkSectionInformation(index)} >
                    <button className="work-content-btn">
                       {company["companyName"]}
                    </button>
                  </li>
                ))}
                </ul>
            </div>
            {data["Companies"].map((company, index) => (
                 
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
                      {company["description"].map((information, index) => (
                        <li key={index}>
                          <span className="neon sf-mono extra-small-font">0{index + 1}. </span>  {information}
                        </li>
                    ))}
                  </ul>
                </div>
                ))}
        </div>
      </section>
    )
  };
  
  export default WorkSection;