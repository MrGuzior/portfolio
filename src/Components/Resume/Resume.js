import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/AppSlice'

import Collapse from '@material-ui/core/Collapse'

const Resume = () => {
   const data = useSelector(selectData).resume
   const [isOpen, setOpen] = useState(false)
   const toggle = () => setOpen(!isOpen)

    
   return (
      <section id="resume">
         <div className="row education">
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
               <div className="row item">
                  <div className="twelve columns">
                  {
                     data.education.map(education=>{
                     return <div key={education.school}><h3>{education.school}</h3>
                     <p className="info">{education.degree} <span>&#8226;</span><em className="date">{education.graduated}</em></p>
                     <p>{education.description}</p></div>
                     })
                  }
                  </div>
               </div>
            </div>
         </div>

         <div className="row work">

            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
            {
            data.work.map(work=>{
               return <div key={work.company}><h3>{work.company}</h3>
                  <p className="info">{work.title}<span>&#8226;</span> <em className="date">{work.years}</em></p>
                  <p>{work.description}</p>
               </div>
            })
            }
         </div>
      </div>



         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>{data.skillmessage}
               </p>

               <div className="bars" onClick={toggle}>
                  <ul className="skills">
                     {
                        data.skills.map(skills=>{
                           let className = 'bar-expand '+skills.name.toLowerCase()
                           return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
                        })
                     }
                  <Collapse in={!isOpen} className='show-more-skills'><h4>Show more</h4></Collapse>
                  <Collapse onClick={toggle} in={isOpen}>
                     {
                        data.technologies.map(skills=>{
                           let className = 'bar-expand '+skills.name.toLowerCase()
                           return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
                        })
                     }
                  </Collapse>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
  
}

export default Resume
