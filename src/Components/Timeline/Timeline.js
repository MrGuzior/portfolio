import React from 'react';
import {useSelector} from 'react-redux'
import {selectData} from '../../store/AppSlice'
import Timeline from '@material-ui/lab/Timeline';

import TimelineItem from './TimelineItem'



const CustomizedTimeline = () => {
    const {projects} = useSelector(selectData).timeline


  return (
    <section id="timeline">
      <Timeline align="left" >

      {projects.map((project, id)=><TimelineItem key={id} data={project}/>)}

      </Timeline>

    </section>
  );
}

export default CustomizedTimeline