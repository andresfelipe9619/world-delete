import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTimelineItem-alternate:nth-of-type(even)": {
      backgroundColor: "#f5f5f5",
    }
  }
}));

function TimelineExample(props) {
  const { events } = props;
  const classes = useStyles();

  return (
    <Timeline position="alternate" className={classes.root}>
      {events.map((event, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              color="text.secondary"
            >
              <h3>{event.title}</h3>
              <p>{event.detail}</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>&nbsp;</TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

export default TimelineExample;