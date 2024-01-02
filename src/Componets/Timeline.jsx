import React from "react";
import "../Styles/Timeline.scss";
import data from "../assets/data.json";

const Timeline = () => {
  const TimelineItem = ({ heading, text, index, url }) => (
    <div
      className={`timelineItem ${
        index % 2 === 0 ? "leftTimeline" : "rightTimeline"
      }`}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ textAlign: "left" }}>
          <h2>{heading}</h2>
          <p>{text}</p>
        </span>

        <a target={"blank"} href={url} className="demo-btn">
          Demo
        </a>
      </div>
    </div>
  );

  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((item, index) => (
          <TimelineItem
            heading={item.title}
            text={item.date}
            url={item.url}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
