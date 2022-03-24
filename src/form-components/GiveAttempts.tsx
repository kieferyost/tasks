import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface attemptProps {
    attempts: string;
    setAttempts: (newAttempt: string) => void;
    requestedAttempts: string;
}
function DecreaseButton({ attempts, setAttempts }: attemptProps) {
    const num = parseInt(attempts) - 1;
    return (
        <Button
            onClick={() => setAttempts(num.toString())}
            disabled={attempts === "0"}
        >
            Use
        </Button>
    );
}
function IncreaseButton({
    attempts,
    requestedAttempts,
    setAttempts
}: attemptProps) {
    const num = parseInt(attempts) + parseInt(requestedAttempts);
    return (
        <Button
            onClick={() => setAttempts(num.toString())}
            disabled={requestedAttempts === ""}
        >
            Gain
        </Button>
    );
}
export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<string>("3");
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    return (
        <div>
            <Form.Group controlId="giveAttemptsForm">
                <Form.Label>Number of Attempts: {attempts}</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    placeholder="Enter requested number of attempts"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <IncreaseButton
                    attempts={attempts}
                    setAttempts={setAttempts}
                    requestedAttempts={requestedAttempts}
                ></IncreaseButton>
                <DecreaseButton
                    attempts={attempts}
                    setAttempts={setAttempts}
                    requestedAttempts={requestedAttempts}
                ></DecreaseButton>
            </div>
        </div>
    );
}
