/* eslint-disable indent */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "yellow",
    "pink"
];

export function ChangeColor(): JSX.Element {
    const [currentColor, setCurrentColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    onChange={updateColor}
                    label={
                        <div
                            style={{
                                backgroundColor: color
                            }}
                        >
                            {color}
                        </div>
                    }
                    value={color}
                    checked={currentColor === color}
                />
            ))}
            <br />
            <span
                data-testid="colored-box"
                style={{
                    backgroundColor:
                        COLORS[
                            COLORS.findIndex(
                                (color: string): boolean =>
                                    color === currentColor
                            )
                        ]
                }}
            >
                You have chosen {currentColor}
            </span>
        </div>
    );
}
