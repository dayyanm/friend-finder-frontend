import React from "react";
import "./Question.css";
import RadioGroup from "./RadioGroup";

export default function Question() {
  return (
    <div className="question-container">
      <div className="question-header">1. Question goes here</div>
      <div className="question-answer">
        <RadioGroup options={["answer1", "answer2", "answer3"]} />
      </div>
    </div>
  );
}
