import "./Firefly.css";
import { useEffect, useState } from "react";

export default function Firefly ({ details, width, height }) {

    const [hue, setHue] = useState(Math.floor(Math.random() * 256))
    const [pull, setPull] = useState(1);
    const [direction, setDirection] = useState(details.direction);
    const [styles, setStyles] = useState({
        top: details.y,
        left: details.x,
        width: details.size,
        height: details.size,
        backgroundColor: `hsl(${hue}, 98%, 62%)`,
        boxShadow: `0 0 15px hsla(${hue}, 98%, 62%, 0.9), 0 0 40px hsla(${hue}, 97%, 70%, 0.776)`
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
        // Give the firefly a 4 in 5 chance of turning in the same direction
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

    // Redirect firefly if it goes out of the bounds of the screen
    function boundsRedirect() {
        if (styles.left >= (width + 30)) {
            setStyles({
                ...styles,
                left: -40
            })
        } else if (styles.left <= -50) {
            setStyles({
                ...styles,
                left: width + 20
            })
        } else if (styles.top >= (height + 30)) {
            setStyles({
                ...styles,
                top: -40
            })
        } else if (styles.top <= -50) {
            setStyles({
                ...styles,
                top: height + 20
            })
        }
    }

    function updateFirefly() {
        const dirX = calculateX();
        const dirY = calculateY();
        const flickerOdds = Math.floor(Math.random() * 10);
        setDirection(calculateNewDirection());
        setStyles({
            ...styles,
            top: styles.top + dirY,
            left: styles.left + dirX,
            boxShadow: flickerOdds ? 
                `0 0 15px hsla(${hue}, 98%, 62%, 0.9), 0 0 40px hsla(${hue}, 97%, 70%, 0.776)` :
                `0 0 5px hsla(${hue}, 98%, 62%, 0.9), 0 0 13px hsla(${hue}, 97%, 70%, 0.776)`
        })
        boundsRedirect();
    }

    // mounting and unmounting with timer
    useEffect(() => {
        const interval = setInterval(() => {
            updateFirefly();
        }, 50);
        return () => clearInterval(interval);
    })



    return <div className="firefly" style={ styles }></div>

}