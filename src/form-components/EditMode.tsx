import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEdit, setEdit] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);
    function changeMode(): void {
        setEdit(!inEdit);
    }
    function nameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }
    function studentCheck(): void {
        setIsStudent(!isStudent);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                // id="is-happy-check"
                label="Edit Mode"
                checked={inEdit}
                onChange={changeMode}
            />
            {inEdit ? (
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={userName}
                            onChange={nameChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formStudent">
                        <Form.Check
                            type="checkbox"
                            label="Is a student"
                            checked={isStudent}
                            onChange={studentCheck}
                        />
                    </Form.Group>
                </Form>
            ) : (
                <p>
                    {userName} is {isStudent ? "" : "not"} a student
                </p>
            )}
        </div>
    );
}
