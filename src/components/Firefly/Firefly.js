import "./Firefly.css";

export default function Firefly ({ details }) {
    return <div className="firefly" style={{ top: details.y, left: details.x, width: details.size, height: details.size }}></div>
}