import { useState } from "react";

function App() {
  let [counter, setcounter] = useState(23);
  function addValue(){
    setcounter(counter + 1)
  }
  function removeValue(){
    setcounter(counter - 1)
  }
  return (
    <>
    <h1>React Counter Project</h1>
    <h2>counter {counter}</h2>
    <button onClick={addValue}>Increase Value {counter}</button><br /><br />
    <button onClick={removeValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
