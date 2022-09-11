import React from "react";

export default function Answer(props) {
    const wth =
        (props.size < 5 ? "50%" : 1 / Math.ceil(props.size / 2)) * 100 + "%";

    return (
        <div className="answer-label" style={{ width: wth }}>
            <input
                type="radio"
                value={props.value}
                name={props.name}
                className="radio-btn"
                onChange={props.change}
            />
            <label htmlFor={props.value}>{props.value}</label>
        </div>
    );
}
