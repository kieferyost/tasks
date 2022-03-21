import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [number, setNumber] = useState<number>(4);
    const [boolean, setProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setProgress(!boolean);
        setNumber(number - 1);
    }
    return (
        <div>
            <Button onClick={startQuiz} disabled={boolean || number === 0}>
                Start Quiz
            </Button>
            <Button onClick={() => setProgress(!boolean)} disabled={!boolean}>
                Stop Quiz
            </Button>
            <Button onClick={() => setNumber(number + 1)} disabled={boolean}>
                Mulligan
            </Button>
            <span>Attempts: {number}</span>
        </div>
    );
}
