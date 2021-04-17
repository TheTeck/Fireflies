import React from 'react';
import "./Display.css";

export default function Display ({ fireflies }) {

    return (
        <div className="display">
            {
                fireflies.map((firefly, index) => {
                    return <div className="firefly" style={{ top: firefly.y, left: firefly.x, width: firefly.size, height: firefly.size }}></div>
                })
            }
        </div>
    )
}