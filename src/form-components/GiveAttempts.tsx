import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttempts] = useState(3);
    const [userInput, setInput] = useState("");
    // if (attemptsLeft < 0) {
    //     setAttempts(0);
    // }
    function handleInputChange(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        setInput(event.target.value);
    }

    function handleUseClick(): void {
        setAttempts((prevAttempts) => prevAttempts - 1);
    }

    function handleGainClick(): void {
        const parsedInput = parseInt(userInput);
        if (!isNaN(parsedInput)) {
            setAttempts((prevAttempts) => prevAttempts + parsedInput);
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            Number of Attempts Left: {attemptsLeft}
            <Form.Group>
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={userInput}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <p>
                <Button onClick={handleUseClick} disabled={attemptsLeft <= 0}>
                    Use
                </Button>
                <Button onClick={handleGainClick}>Gain</Button>
            </p>
        </div>
    );
}
