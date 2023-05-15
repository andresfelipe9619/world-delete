import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const styles = {
  position: "relative",
  "& .MuiTimelineItem-alternate:nth-of-type(even)": {
    backgroundColor: "#f5f5f5",
  },
  "& .red-line": {
    position: "absolute",
    top: 0,
    left: "49.9%",
    background: "linear-gradient(90deg, #951919 -3.29%, #FF7272 109.21%)",
    width: "3px",
    height: "9%",
  },
  "& .dot-time-line": {
    position: "absolute",
    top: "9%",
    left: "49.4%",
    background: "#fff",
    border: "4px solid #F1F1F4",
    borderRadius: "50%",
    boxShadow: "0px 2px 20px 5px rgba(255, 255, 255, 0.5)",
    height: 16,
    width: 16,
  },
};

function TimelineExample(props) {
  const { events } = props;

  return (
    <Timeline position="alternate" sx={styles}>
      {events.map((event, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="text.secondary">
              <h3>{event.title}</h3>
              <p>{event.detail}</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              {/* <TimelineDot /> */}
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>&nbsp;</TimelineContent>
          </TimelineItem>
        );
      })}
      <div className="red-line"></div>
      <div className="dot-time-line"></div>
    </Timeline>
  );
}

export default TimelineExample;
