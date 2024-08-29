import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (number) {
      string += '0123456789';
    }
    if (character) {
      string += '@#$!*&';
    }
    if (symbol) {
      string += '%()_+-=/,"';
    }
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(index);
    }
    setPassword(pass);

  }, [number, character, symbol, length]);

  useEffect(()=>{
    passwordGenerator();
  },[number,character,length,]);
  return (
    <>
      <div className="body h-screen w-screen bg-blue-300 flex flex-col justify-center items-center">
        <div className="container w-1/2 bg-gray-600 rounded-lg p-8 flex flex-col items-center gap-2">
        <div className="heading text-white text-4xl m-4">Password Generator</div>
          <input className="mb-3 text-2xl text-red-800 px-4 py-2 bg-gray-300 rounded-lg w-full focus:outline-none"
            type="text"
            placeholder="Password"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <div className="flex justify-between w-full">
            <button className="btn p-2 text-2xl text-white bg-pink-800 rounded-lg w-fit" onClick={passwordGenerator}>Generate Password</button>
            <button className="btn active:bg-pink-700 p-2 text-2xl text-white bg-blue-800 rounded-lg w-fit" onClick={()=>{
              passwordRef.current?.select();
              window.navigator.clipboard.writeText(password);
            }}>Copy</button>
          </div>
          <h2 className='text-white text-2xl'>Password Includes:</h2>
          <div className="flex items-center w-full gap-5 text-white text-2xl">
            <label htmlFor="length">Length: {length}</label>
            <input className='cursor-pointer' type="range" min={8} max={50} id='length' value={length} onChange={(e)=> setLength(e.target.value)}/>
          </div>
          <div className="flex items-center w-full gap-5 text-white text-2xl">
            <label htmlFor="number">Number</label>
            <input
            type="checkbox"
            id="number"
            value={number}
            onChange={()=>{
              setNumber((prev)=>!prev);
            }}
            />
          </div>
          <div className="flex items-center w-full gap-5 text-white text-2xl">
            <label htmlFor="number">Symbol</label>
            <input
            type="checkbox"
            id="symbol"
            value={symbol}
            onChange={()=>{
              setSymbol((prev)=>!prev);
            }}
            />
          </div>
          <div className="flex items-center w-full gap-5 text-white text-2xl">
            <label htmlFor="number">Character</label>
            <input
            type="checkbox"
            id="character"
            value={character}
            onChange={()=>{
              setCharacter((prev)=>!prev);
            }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
