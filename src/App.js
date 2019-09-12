import React from "react";
import "./App.css";
import NasaContent from './components/NasaContent'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <NasaContent/>
      {/* <Button/> */}
    </div>
  );
}

export default App;
