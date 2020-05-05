import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Temperature(props) {
  var styles = {
    path: {
      stroke: "rgba(62,152,199,100)",
    },
    text: {
      fill: "#2d6481",
    },
  };

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <CircularProgressbar
        value={props.temperature}
        text={`${props.temperature}°`}
        minValue={65}
        maxValue={88}
        styles={styles}
      />
    </div>
  );
}
