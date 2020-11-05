import React from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../AppSlice'

const About = () => {
   const data = useSelector(selectData).main

    return (
       <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic"  src={`images/${data.image}`} alt="Tim Baker Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p>{data.bio}</p>
                  <p>{data.bio2}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{data.name}</span><br />
                           <span>{data.phone}</span><br />
                           <span>{data.email}</span>
                        </p>
                     </div>
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
