import React from "react";
import Answer from "./Answer";

export default function RadioGroup(props) {
  const posAnswers = () => {
    let ansList = [];

    for (let i = 0; i < props.options.length; i++) {
      ansList.push(
        <Answer size={props.options.length} value={props.options[i]} />
      );
    }

    return ansList;
  };

  return (
    <fieldset id={props.id} className="radio-set">
      {posAnswers()}
    </fieldset>
  );
}
