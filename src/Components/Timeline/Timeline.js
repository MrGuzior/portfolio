import React from 'react';
import {useSelector} from 'react-redux'
import {selectData} from '../../store/AppSlice'
import Timeline from '@material-ui/lab/Timeline';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineDot from '@material-ui/lab/TimelineDot';

import TimelineItem from './TimelineItem'



const CustomizedTimeline = () => {
    const {projects} = useSelector(selectData).timeline


  return (
    <section id="timeline">
      <Timeline align="left" >

      {projects.map(project=><TimelineItem data={project}/>)}

      </Timeline>

    </section>
  );
}

export default CustomizedTimeline