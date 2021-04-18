import './App.css';
import Display from "../Display/Display";
import Controls from "../Controls/Controls";
import { useEffect, useState } from 'react';

function App() {
  // Component State
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [fireflies, setFireflies] = useState([]);
  const [randomColor, setRandomColor] = useState(false);

  // Update the width and height state of display
  function updateSize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  // Function lifts count from Controls component
  function getCount(newCount) {
    if (newCount > fireflies.length) {
      const fireflyArray = [...fireflies];
      fireflyArray.push({
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
        size: Math.floor(Math.random() * 10) + 5,
        direction: Math.floor(Math.random() * 72) * 5
      })
      setFireflies(fireflyArray)
    } else {
      const fireflyArray = [...fireflies];
      fireflyArray.pop();
      setFireflies(fireflyArray);
    }
  }

  // Function to handle clicks on the random color checkbox
  function getRandomState(isRandom) {
    setRandomColor(isRandom);
  }

  // Listen for any changes to display size
  useEffect(() => {
    window.addEventListener('resize', updateSize);
    setFireflies([
    {
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight),
      size: Math.floor(Math.random() * 10) + 5,
      direction: Math.floor(Math.random() * 120) * 3
    }
    ])
  }, []);

  return (
    <div className="App">
      <Controls fireflyCount={fireflies.length} getCount={getCount} getRandomState={getRandomState} />
      <Display fireflies={fireflies} width={width} height={height} randomColor={randomColor} />
    </div>
  );
}

export default App;
