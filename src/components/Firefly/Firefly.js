import "./Firefly.css";
import { useEffect, useState } from "react";

export default function Firefly ({ details }) {

    const [pull, setPull] = useState(1);
    const [direction, setDirection] = useState(details.direction);
    const [styles, setStyles] = useState({
        top: details.y,
        left: details.x,
        width: details.size,
        height: details.size
    });

    function calculateY() {
        if (direction >= 15 && direction <= 165) {
            return -1;
        } else if (direction >= 195 && direction <= 345) {
            return 1;
        }
        return 0;
    }

    function calculateX() {
        if (direction >= 105 && direction <= 255) {
            return -1;
        } else if (direction >= 0 && direction <= 75) {
            return 1;
        } else if (direction >= 285 && direction <= 359) {
            return 1;
        }
        return 0;
    }

    function calculateNewDirection() {
        const dirChoice = Math.floor(Math.random() * 5);
        if (pull === -1) {
            if (dirChoice) {
                return direction === 357 ? 0 : direction + 3;
            } else {
                setPull(1)
                return direction === 0 ? 357 : direction - 3;
            }
        } else if (pull === 1) {
            if (dirChoice) {
                return direction === 0 ? 357 : direction - 3;
            } else {
                setPull(-1)
                return direction === 357 ? 0 : direction + 3;
            }
        }
    }

    function updatePosition() {
        const dirX = calculateX();
        const dirY = calculateY();
        setDirection(calculateNewDirection());
        setStyles({
            ...styles,
            top: styles.top + dirY,
            left: styles.left + dirX,
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