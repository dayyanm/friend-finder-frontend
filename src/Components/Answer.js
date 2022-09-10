import React from "react";

export default function Answer(props) {
  const wth = (props.size < 5 ? "50%" : 1 / (props.size / 2)) * 100 + "%";

  return (
    <div className="answer-label" style={{ width: wth }}>
      <input
        type="radio"
        value={props.value}
        name={props.value}
        className="radio-btn"
      />
      <label htmlFor={props.value}>{props.value}</label>
    </div>
  );
}
