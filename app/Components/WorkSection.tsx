'use client'
import './worksection.css';
import { useState } from 'react';
const WorkSection = () => {

  const [workSectionIndex, changeWorkSectionIndex] = useState(0);

  const toggleWorkSectionInformation = (index : number)=>{
    changeWorkSectionIndex(index);
    console.log(index);
  }
    return (
        <section className="section mt-180">
        <h2 className='col-2 sub-header-1 mb-40 flex'>
          <span className="neon sf-mono">02. </span>
            Where I have Worked
          <span className='dash-line'></span>
        </h2>

        <div className="work-content">
            <div className="work-content-sidebar">
                <ul>
                  <li className={(workSectionIndex == 0 ? 'work-content-btn-selected ' : '') + "work-content-li-btn"}  onClick={()=>toggleWorkSectionInformation(0)} >
                    <button className="work-content-btn">
                       BNY Mellon
                    </button>
                  </li>
                  <li className={(workSectionIndex == 1 ? 'work-content-btn-selected ' : '') + "work-content-li-btn"}  onClick={()=>toggleWorkSectionInformation(1)}>
                    <button className="work-content-btn">
                      YEC Club
                    </button>
                  </li>
                  <li className={(workSectionIndex == 2 ? 'work-content-btn-selected ' : '') + "work-content-li-btn"}  onClick={()=>toggleWorkSectionInformation(2)}>
                    <button className="work-content-btn">
                      MindSpark
                    </button>
                  </li>
                </ul>
            </div>
            <div className="work-content-information" style={{ display: workSectionIndex == 0 ? 'block' : 'none' }}>
              <h3 className="sub-header-2 mb-10">
                SDE Intern <span className="neon">
                   @ BNY Mellon
                </span>
              </h3>
              <p className='mb-20'>
                May 2022- July 2022
              </p>
              <ul className="small-font">
                <li>
                <span className="neon sf-mono extra-small-font">01. </span>  It was 4 week mentorship programme offered by Microsoft,being the mentee learnt various new technologies, explored Data science.
                </li>
                <li>
                <span className="neon sf-mono extra-small-font">02. </span>  Built a Recommendation engine in the supervision of Microsoft Engineer and got positive feedback from the mentor for the performance throughout the program.
                </li>
                <li>
                <span className="neon sf-mono extra-small-font">03. </span>  Got a great exposure of working in a real time industry environment.
                </li>
              </ul>
            </div>
            <div className="work-content-information" style={{ display: workSectionIndex == 1? 'block' : 'none' }}>
              <h3 className="sub-header-2 mb-10">
                SDE Intern <span className="neon">
                   @ YEC
                </span>
              </h3>
              <p className='mb-20'>
                May 2022- July 2022
              </p>
              <ul className="small-font">
                <li>
                <span className="neon sf-mono extra-small-font">01. </span>  It was 4 week mentorship programme offered by Microsoft,being the mentee learnt various new technologies, explored Data science.
                </li>
                <li>
                <span className="neon sf-mono extra-small-font">02. </span>  Built a Recommendation engine in the supervision of Microsoft Engineer and got positive feedback from the mentor for the performance throughout the program.
                </li>
                <li>
                <span className="neon sf-mono extra-small-font">03. </span>  Got a great exposure of working in a real time industry environment.
                </li>
              </ul>
            </div>
            <div className="work-content-information" style={{ display: workSectionIndex == 2 ? 'block' : 'none' }}>
              <h3 className="sub-header-2 mb-10">
                SDE Intern <span className="neon">
                   @ Mindspark
                </span>
              </h3>
              <p className='mb-20'>
                May 2022- July 2022
              </p>
              <ul className="small-font">
                <li>
                <span className="neon sf-mono extra-small-font">01. </span>  It was 4 week mentorship programme offered by Microsoft,being the mentee learnt various new technologies, explored Data science.
                </li>
                <li>
                <span className="neon sf-mono extra-small-font">02. </span>  Built a Recommendation engine in the supervision of Microsoft Engineer and got positive feedback from the mentor for the performance throughout the program.
                </li>
                <li>
                <span className="neon sf-mono extra-small-font">03. </span>  Got a great exposure of working in a real time industry environment.
                </li>
              </ul>
            </div>
        </div>
      </section>
    )
  };
  
  export default WorkSection;