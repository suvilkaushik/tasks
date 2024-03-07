import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [input, setInput] = useState("");
    function checkAnswer() {
        if (input === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }
    function updateInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setInput(event.target.value);
    }

    return (
        <div>
            <Form.Group>
                <Form.Label>Input Answer:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={input}
                    onChange={updateInput}
                />
            </Form.Group>
            <div>Your answer is {checkAnswer()}.</div>
        </div>
    );
}
