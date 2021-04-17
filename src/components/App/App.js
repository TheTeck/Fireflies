import './App.css';
import Display from "../Display/Display";
import { useEffect, useState } from 'react';

function App() {
  // Component State
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [fireflies, setFireflies] = useState([]);

  // Update the width and height state of display
  function updateSize () {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  function updateFireflies () {
    // temporary creation of a firefly
    setFireflies([
      ...fireflies,
      {
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
        size: Math.floor(Math.random() * 100) + 100
      }
    ])
  }

  // Listen for any changes to display size
  useEffect(() => {
    window.addEventListener('resize', updateSize);
    updateFireflies();
  }, []);

  return (
    <div className="App">
      <h1>{width} X {height}</h1>
      <Display fireflies={fireflies} />
    </div>
  );
}

export default App;
