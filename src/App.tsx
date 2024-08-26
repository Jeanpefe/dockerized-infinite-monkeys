import { useRef, useState } from 'react';
import './App.css'
import MonkeyText from './components/MonkeyText';

function App() {
  const [generate, setGenerate] = useState(false)
  const [inputText, setInputText] = useState('')
  const [inputNumberOfMonkeys, setInputNumberOfMonkeys] = useState(0)
  const inputTextRef = useRef<HTMLInputElement>(null);
  const inputNumberOfMonkeysRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGenerate(true)
    if (inputTextRef.current) {
      setInputText(inputTextRef.current.value)
    }
    if (inputNumberOfMonkeysRef.current) {
      setInputNumberOfMonkeys(Number(inputNumberOfMonkeysRef.current.value) || 0)
    }
  }

  return (
    <>
      <h1>Dockerized Infinite Monkeys</h1>
	  <section style={{'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'}}>	  
      <form onSubmit={handleSubmit} style={{'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'}}>
        <div>
          <label>Text:</label>
          <input type="text" ref={inputTextRef} />
        </div>
        <div>
          <label>Number of Monkeys:</label>
          <input type="number" ref={inputNumberOfMonkeysRef} />
        </div>
        <button disabled={generate}>🐒⌨️</button>
      </form>
      <button onClick={() => setGenerate(false)}>Stop generating</button>
      </section>
	  <section style={{ "display": "flex", "gap": "2rem", "flexDirection": "column" }}>
        {
          Array.from({ length: inputNumberOfMonkeys }).map((_, index) => (
            <MonkeyText key={index} inputText={inputText} generate={generate} />
          ))
        }
      </section>
    </>
  )
}

export default App
