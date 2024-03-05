import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numOfAttempts, setNumberOfAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setQuizInProgress(true);
        setNumberOfAttempts(numOfAttempts - 1);
    }
    return (
        <div>
            Number of Attempts: {numOfAttempts}
            <Button
                onClick={startQuiz}
                disabled={quizInProgress || numOfAttempts <= 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setQuizInProgress(false)}
                disabled={!quizInProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => setNumberOfAttempts(numOfAttempts + 1)}
                disabled={quizInProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}
