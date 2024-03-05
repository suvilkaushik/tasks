import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");
    function changeQType(): void {
        if (qType === "short_answer_question") {
            setQType("multiple_choice_question");
        } else {
            setQType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={changeQType}>Change Type</Button>
            {qType === "multiple_choice_question" && <p>Multiple Choice</p>}
            {qType === "short_answer_question" && <p>Short Answer</p>}
        </div>
    );
}
