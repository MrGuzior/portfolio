import React from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../AppSlice'

const Testimonials = () => {
   const data = useSelector(selectData).testimonials

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {
                         data.testimonials.map(testimonials=>{
                           return  <li key={testimonials.user}>
                               <blockquote>
                                  <p>{testimonials.text}</p>
                                  <cite>{testimonials.user}</cite>
                               </blockquote>
                            </li>
                         })
                      }
                  </ul>
               </div>
            </div>
         </div>
   </section>
    )
}

export default Testimonials

