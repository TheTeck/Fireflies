import { useState } from 'react';
import "./Controls.css";

export default function Controls ( { fireflyCount, getCount }) {

    function handleRemoveFirefly() {
        getCount(fireflyCount - 1);
    }

    function handleAddFirefly() {
        getCount(fireflyCount + 1);
    }

    return (
        <div className="controls">
            <button onClick={handleAddFirefly}>Add Firefly</button>
            <button onClick={handleRemoveFirefly}>Remove Firefly</button>
        </div>
    )
}