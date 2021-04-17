import React from 'react';
import "./Display.css";

export default function Display ({ fireflies }) {

    return (
        <div className="display">
            <h1>This is the display</h1>
            {
                fireflies.map((firefly, index) => {
                    return <div className="firefly" style={{ top: firefly.y, left: firefly.x, width: firefly.size, height: firefly.size }}></div>
                })
            }
        </div>
    )
}