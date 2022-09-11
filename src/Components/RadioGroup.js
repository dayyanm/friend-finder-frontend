import React, { useId } from "react";
import Answer from "./Answer";

export default function RadioGroup(props) {
    const id = useId();

    const posAnswers = () => {
        let ansList = [];

        for (let i = 0; i < props.options.length; i++) {
            ansList.push(
                <Answer
                    key={i}
                    size={props.options.length}
                    value={props.options[i]}
                    name={id}
                    change={() => {
                        props.change(props.iden, props.options[i]);
                    }}
                />
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
