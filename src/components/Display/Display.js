import React from 'react';
import "./Display.css";
import Firefly from "../Firefly/Firefly";

export default function Display ({ fireflies, width, height }) {

    return (
        <div className="display">
            {
                fireflies.map((firefly, index) => {
                    return <Firefly details={firefly} width={width} height={height}/>
                })
            }
        </div>
    )
}