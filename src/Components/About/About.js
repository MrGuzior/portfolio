import React from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/AppSlice'

const About = () => {
   const data = useSelector(selectData).main

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={`images/${data.image}`} alt="Konrad Guzior profile picture" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>{data.bio}</p>
               <p>{data.bio2}</p>
               <div className="row">
                  <div className="columns download">
                     <p>
                        <a href={data.resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
