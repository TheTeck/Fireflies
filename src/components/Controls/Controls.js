import "./Controls.css";

export default function Controls ( { fireflyCount, getCount, getRandomState }) { 

    function handleRemoveFirefly() {
        getCount(fireflyCount - 1);
    }

    function handleAddFirefly() {
        getCount(fireflyCount + 1);
    }

    function handleRandomClick(e) {
        getRandomState(e.target.checked);
    }

    return (
        <div className="controls">
            <button onClick={handleAddFirefly}>Add Firefly</button>
            <button onClick={handleRemoveFirefly}>Remove Firefly</button>
            <p className="count">{fireflyCount} {fireflyCount === 1 ? "Firefly" : "Fireflies"}</p>
            <div className="randomCheckbox">
                <label for="randomColor">Random Color</label>
                <input onChange={handleRandomClick} id="randomColor" type="checkbox" name="randomColor" />
            </div>
        </div>
    )
}