import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateUserAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }
    /**function isCorrect(): string {
        if (userAnswer === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }*/
    return (
        <div>
            <Form.Group controlId="checkAnswerForm">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    placeholder="Enter Answer"
                    onChange={updateUserAnswer}
                />
            </Form.Group>
            <div>{userAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
