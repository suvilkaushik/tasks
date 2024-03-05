import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🏮");

    function advanceAlphabet(): void {
        if (holiday === "🏮") {
            setHoliday("🎄");
        } else if (holiday === "🎄") {
            setHoliday("🪔");
        } else if (holiday === "🪔") {
            setHoliday("🗿");
        } else if (holiday === "🗿") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🏮");
        }
    }

    function advanceYear(): void {
        if (holiday === "🗿") {
            setHoliday("🏮");
        } else if (holiday === "🏮") {
            setHoliday("🪔");
        } else if (holiday === "🪔") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🎄");
        } else if (holiday === "🎄") {
            setHoliday("🗿");
        }
    }
    return (
        <div>
            <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceYear}>Advance by Year</Button>
            <p> Cycle Holiday Holiday: {holiday}</p>
        </div>
    );
}
