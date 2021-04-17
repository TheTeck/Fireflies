import './App.css';
import Display from "../Display/Display";
import { useEffect, useState } from 'react';

function App() {
  // Component State
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [fireflies, setFireflies] = useState([]);

  // Update the width and height state of display
  function updateSize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  // Handler for button to add a firefly
  function handleAddFirefly() {
    const fireflyArray = [...fireflies];
    fireflyArray.push({
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight),
      size: Math.floor(Math.random() * 10) + 5
    })
    setFireflies(fireflyArray)
  }

  // Handler for button to remove a firefly
  function handleRemoveFirefly() {
    const fireflyArray = [...fireflies];
    fireflyArray.pop();
    setFireflies(fireflyArray);
  }

  // Listen for any changes to display size
  useEffect(() => {
    window.addEventListener('resize', updateSize);
    setFireflies([
    {
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight),
      size: Math.floor(Math.random() * 10) + 5
    }
    ])
  }, []);

  return (
    <div className="App">
      <button onClick={handleAddFirefly}>Add Firefly</button>
      <button onClick={handleRemoveFirefly}>Remove Firefly</button>
      <Display fireflies={fireflies} />
    </div>
  );
}

export default App;
