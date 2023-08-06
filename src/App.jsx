import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const btnPress = (string) => {
    console.log(string);
  }

  return (
    <>
      <div id="wrapper">
        <h1>Calculator</h1>
        <div id="calculator">
          <div id="display">
          </div>
          <button onClick={() => btnPress()} className="btn" id="clear"></button>
          <button onClick={() => btnPress()} className="btn" id="negative"></button>
          <button onClick={() => btnPress()} className="btn" id="percentage"></button>
          <button onClick={() => btnPress()} className="btn" id="divide"></button>
          <button onClick={() => btnPress()} className="btn" id="seven"></button>
          <button onClick={() => btnPress()} className="btn" id="eight"></button>
          <button onClick={() => btnPress()} className="btn" id="nine"></button>
          <button onClick={() => btnPress()} className="btn" id="multiply"></button>
          <button onClick={() => btnPress()} className="btn" id="four"></button>
          <button onClick={() => btnPress()} className="btn" id="five"></button>
          <button onClick={() => btnPress()} className="btn" id="six"></button>
          <button onClick={() => btnPress()} className="btn" id="substract"></button>
          <button onClick={() => btnPress()} className="btn" id="one"></button>
          <button onClick={() => btnPress()} className="btn" id="two"></button>
          <button onClick={() => btnPress()} className="btn" id="three"></button>
          <button onClick={() => btnPress()} className="btn" id="add"></button>
          <button onClick={() => btnPress()} className="btn" id="zero"></button>
          <button onClick={() => btnPress()} className="btn" id="equals"></button>
        </div>
      </div>
    </>
  )
}

export default App
