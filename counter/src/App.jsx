import { useState } from "react";

function App() {
  let [counter, setcounter] = useState(10);
  function addValue(){
    if(counter == 20){
      setcounter(counter);
    }
    else{
      setcounter(counter + 1);
    }
  }
  function removeValue(){
    if(counter == 0){
      setcounter(counter);
    }
    else{
      setcounter(counter - 1);
    }
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
