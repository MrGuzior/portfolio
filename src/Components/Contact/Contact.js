import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/AppSlice'

const Contact = () => {
   const [name, setName] = useState('')
   const [subject, setSubject] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')
   const data = useSelector(selectData).main

   const handleClick = (e) => {
      e.preventDefault()
      window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`)
   }
    
    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
                  <p className="lead">{data?.message}</p>
            </div>
         </div>
         <div className="row">
            <div className="eight columns">
               <form id="contactForm" name="contactForm">
					<fieldset>
                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input value={name} type="text" valuedefault="" size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)}/>
                  </div>
                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input value={email} type="text" valuedefault="" size="35" id="contactEmail" name="contactEmail" onChange={e=> setEmail(e.target.value)}/>
                  </div>
                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input value={subject} type="text" valuedefault="" size="35" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)}/>
                  </div>
                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>
                  <div>
                     <button type='submit' onClick={handleClick} className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>
           <div id="message-warning"> Error </div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent.<br />
				   </div>
           </div>
            <aside className="four columns footer-widgets">
            <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{data.name}</span><br />
                           <span>{data.phone}</span><br />
                           <span>{data.email}</span>
                        </p>
                     </div>
               <div className="widget widget_tweets">
		         </div>
            </aside>
      </div>
   </section>
   )
}

export default Contact
