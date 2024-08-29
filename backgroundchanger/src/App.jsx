import { useState } from 'react';



function App() {
  const [color, setColor] = useState("olive");

  function Button ({color}){
    return(
        <button onClick={()=>{setColor(color)}} className="px-4 py-2 rounded-full text-white text-xl font-semibold uppercase mx-2"style={{backgroundColor: color}}>{color}</button>
    )
  }
  return (
    <>
      <div className="screen h-screen w-screen" style={{backgroundColor: color}}>
        <h1 className='text-4xl font-bold text-white text-center absolute bottom-0 w-screen py-2 underline'>Background Changer</h1>
        <div className="btn-container bg-white rounded-full p-2 flex gap-2 justify-around">
          <Button color="red" />
          <Button color="pink" />
          <Button color="green" />
          <Button color="brown" />
          <Button color="yellow" />
          <Button color="olive" />
          <Button color="gray" />
          <Button color="violet" />
          <Button color="black" />
          <Button color="silver" />
          <Button color="lightgreen" />
          <Button color="beige" />
        </div>
      </div>
    </>
  )
}

export default App
