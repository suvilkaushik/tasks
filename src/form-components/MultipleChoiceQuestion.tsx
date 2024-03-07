import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);
    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedChoice(event.target.value);
    };
    return (
        <div>
            <Form.Label>Multiple Choice Question?</Form.Label>
            <Form.Select value={selectedChoice} onChange={handleSelectChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            {selectedChoice} was the
            {selectedChoice === expectedAnswer ? " ✔️" : " ❌"} answer.
        </div>
    );
}
