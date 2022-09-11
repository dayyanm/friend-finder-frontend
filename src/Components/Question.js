import React from "react";
import "./Question.css";
import RadioGroup from "./RadioGroup";

export default function Question(props) {
    return (
        <div className="question-container">
            <div className="question-header">
                {props.id + 1}. {props.q}
            </div>
            <div className="question-answer">
                <RadioGroup
                    options={props.a}
                    change={props.change}
                    iden={props.id}
                />
            </div>
        </div>
    );
}
