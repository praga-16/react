import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div class="container">
        <div class="calculator">
            <div class="display">
                <div id="result"></div>
            </div>
            <div class="buttons">
                <button onclick="clearDisplay()">AC</button>
                <button onclick="deleteLast()">DEL</button>
                <button onclick="appendCharacter('/')">/</button>
                <button onclick="appendCharacter('')"></button>
                <button onclick="appendCharacter('7')">7</button>
                <button onclick="appendCharacter('8')">8</button>
                <button onclick="appendCharacter('9')">9</button>
                <button onclick="appendCharacter('-')">-</button>
                <button onclick="appendCharacter('4')">4</button>
                <button onclick="appendCharacter('5')">5</button>
                <button onclick="appendCharacter('6')">6</button>
                <button onclick="appendCharacter('+')">+</button>
                <button onclick="appendCharacter('1')">1</button>
                <button onclick="appendCharacter('2')">2</button>
                <button onclick="appendCharacter('3')">3</button>
                <button onclick="calculateResult()">=</button>
                <button onclick="appendCharacter('0')">0</button>
                <button onclick="appendCharacter('%')">%</button>
                <button onclick="appendCharacter('.')">.</button>
            </div><br></br>
            <div class="name">PRAGATHEESVARAN <br></br></div>
            <div class="id">212221240039</div>
        </div>
    </div>
    <script src="index.js"></script>
    </>
  )
}

export default App
