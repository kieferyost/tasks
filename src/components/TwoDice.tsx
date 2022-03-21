import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [right, setRight] = useState<number>(1);
    const [left, setLeft] = useState<number>(2);

    function changeRight(): void {
        setRight(d6());
    }
    function changeLeft(): void {
        setLeft(d6());
    }

    return (
        <div>
            Right die value is <span data-testid="right-die">{right}</span>
            <br />
            Left die value is <span data-testid="left-die">{left}</span>
            <br />
            <Button onClick={changeRight}>Roll Right</Button>
            <br />
            <Button onClick={changeLeft}>Roll Left</Button>
            <br />
            <div>{right === 1 && left === 1 ? <span>Lose</span> : ""}</div>
            <div>{right === left && right != 1 ? <span>Win</span> : ""}</div>
        </div>
    );
}
