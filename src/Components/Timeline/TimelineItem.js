import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import TimelineCard from './TimelineCard'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    background: 'transparent',
    color: 'white'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  timeLineItem: {
      width: 'auto',
  },
  desc: {
    color: '#787878'
  }
}));

const CustomizedTimelineItem = ({data}) => {
  const classes = useStyles();


  return (

      <TimelineItem className={classes.timeLineItem}>

        <TimelineOppositeContent>
          <Typography  >
              {data.date}
          </Typography>
          <Paper elevation={0} className={classes.paper}>
            <Typography variant="h5" component="h1" className={classes.desc}>
                {data.description}
            </Typography>
          </Paper>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
            <TimelineCard data={data}/>
        </TimelineContent>

      </TimelineItem>





  );
}

export default CustomizedTimelineItem