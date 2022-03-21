import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🦃" | "🎄" | "🍻" | "🐇 " | "🇺🇸";
const ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎄": "🐇 ",
    "🐇 ": "🍻",
    "🍻": "🇺🇸",
    "🇺🇸": "🦃",
    "🦃": "🎄"
};
const YEARLY_TRANSITIONS: Record<Holiday, Holiday> = {
    "🐇 ": "🇺🇸",
    "🇺🇸": "🍻",
    "🍻": "🦃",
    "🦃": "🎄",
    "🎄": "🐇 "
};
export function CycleHoliday(): JSX.Element {
    const [Holiday, setHoliday] = useState<Holiday>("🇺🇸");

    function changeAlphabetically(): void {
        const newHoliday = ALPHABET_TRANSITIONS[Holiday];
        setHoliday(newHoliday);
    }
    function changeYearly(): void {
        const newHoliday = YEARLY_TRANSITIONS[Holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <span>Holiday: {Holiday}</span>
            <br />
            <Button onClick={changeAlphabetically}>Advance by Alphabet</Button>
            <br />
            <Button onClick={changeYearly}>Advance by Year</Button>
        </div>
    );
}
