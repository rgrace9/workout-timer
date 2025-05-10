import React from "react";
import CircularTimer from "./CircularTimer";
import CountdownTimer from "./CountdownTimer";
function App() {
  return (
    <div className="App">
      <CountdownTimer initialTime={60} />
      <CircularTimer duration={40} />
    </div>
  );
}

export default App;
