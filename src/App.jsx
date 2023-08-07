import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [expression, setExpression] = useState("");

  const btnPress = (symbol) => {

    if(symbol === "clear") {
      setText("");
      setExpression("0");
    } else if(symbol === "delete"){
      const updatedExpression = expression.trim();
      setExpression(updatedExpression.slice(0, -1));
    } else if(text === '%'){
      if(answer === "") return;
      setText((parseFloat(text) / 100).toString());
    } else if(/[-+/*]/.test(symbol)) { // if it is an operator
      setExpression(expression + " " + symbol + " ");
    } else if(symbol === "=") {
      getAnswer();
    } else if(symbol === ".") {
      const last = expression.split(/[-+/*]/g).pop();

      if(last?.includes(".")) return;
      setExpression(expression + symbol);
    } else if(symbol === "0") {
      if(expression.charAt(0) !== "0") {
        setExpression(expression + symbol);
      } 
    } else {
      if(expression.charAt(0) === "0") {
        setExpression(expression.slice(1) + symbol);
      } else {
        setExpression(expression + symbol);
      }
    }
    
  };

  const getAnswer = () => {
    const expressionWithoutSpaces = expression.replace(/\s+/g, '');
    try {
      const answer = eval(expressionWithoutSpaces);
      setText(answer.toString());
      setExpression("");
    } catch (error) {
      // Handle any error that might occur during evaluation
      setText('Error');
      setExpression('');
    }
  };

  return (
    <>
      <div id="wrapper">
        <h1>Javascript Calculator</h1>
        <br />

        <div id="calculator">
          <div id="display">
            <div id="answer">{text}</div>
            <div id="text">{expression}</div>
          </div>
          <br />

          <button onClick={() => btnPress("clear")} className="btn" id="clear">AC</button>
          <button onClick={() => btnPress("delete")} className="btn" id="delete">DE</button>
          <button onClick={() => btnPress("%")} className="btn" id="percentage">%</button>
          <button onClick={() => btnPress("/")} className="btn" id="divide">/</button>
          <br />

          <button onClick={() => btnPress("7")} className="btn" id="seven">7</button>
          <button onClick={() => btnPress("8")} className="btn" id="eight">8</button>
          <button onClick={() => btnPress("9")} className="btn" id="nine">9</button>
          <button onClick={() => btnPress("*")} className="btn" id="multiply">*</button>
          <br />

          <button onClick={() => btnPress("4")} className="btn" id="four">4</button>
          <button onClick={() => btnPress("5")} className="btn" id="five">5</button>
          <button onClick={() => btnPress("6")} className="btn" id="six">6</button>
          <button onClick={() => btnPress("-")} className="btn" id="subtract">-</button>
          <br />

          <button onClick={() => btnPress("1")} className="btn" id="one">1</button>
          <button onClick={() => btnPress("2")} className="btn" id="two">2</button>
          <button onClick={() => btnPress("3")} className="btn" id="three">3</button>
          <button onClick={() => btnPress("+")} className="btn" id="add">+</button>
          <br />

          <button onClick={() => btnPress("0")} className="btn" id="zero">0</button>
          <button onClick={() => btnPress(".")} className="btn" id="decimal">.</button>
          <button onClick={() => btnPress("=")} className="btn" id="equals">=</button>
        </div>
        <br />
        <p>Made by Emiliano</p>
      </div>
    </>
  )
}

export default App
