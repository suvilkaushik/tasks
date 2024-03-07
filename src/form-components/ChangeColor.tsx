import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [response, setResponse] = useState<string>("red");
    const colors = [
        "red",
        "blue",
        "green",
        "pink",
        "yellow",
        "orange",
        "purple",
        "black"
    ];
    return (
        <div>
            <div>
                {colors.map((color) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        onChange={(e) => setResponse(e.target.value)}
                        label={
                            <span style={{ backgroundColor: color }}>
                                {color}
                            </span>
                        }
                        value={color}
                        checked={response === color}
                    />
                ))}
            </div>
            <div>
                The color is now{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: response }}
                >
                    {response}
                </span>
                .
            </div>
        </div>
    );
}
