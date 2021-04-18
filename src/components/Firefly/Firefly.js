import "./Firefly.css";
import { useEffect, useState } from "react";

export default function Firefly ({ details }) {

    const [styles, setStyles] = useState({
        top: details.y,
        left: details.x,
        width: details.size,
        height: details.size
    });

    function updatePosition() {
        setStyles({
            ...styles,
            top: styles.top + 1
        })
    }

    // mounting and unmounting with timer
    useEffect(() => {
        const interval = setInterval(() => {
            updatePosition();
        }, 50);
        return () => clearInterval(interval);
    })



    return <div className="firefly" style={ styles }></div>
}