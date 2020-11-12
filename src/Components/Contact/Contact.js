import React from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/AppSlice'

const Contact = () => {
   const data = useSelector(selectData).main

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="columns contact-details">
               <h2>Contact Details</h2>
               <p className="address">
                  <span>{data.name}</span><br />
                  <span>{data.phone}</span><br />
                  <span>{data.email}</span>
               </p>
            </div>
         </div>
      </section>
   )
}

export default Contact

