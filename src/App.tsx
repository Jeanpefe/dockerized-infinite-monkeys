import { useRef, useState } from 'react';
import './App.css'

function App() {
  const [generate, setGenerate] = useState()
  const text = useRef('')
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    text.current += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hola")
  }
  return (
    <>
      <h1>Dockerized Infinite Monkeys</h1>
      <p>Enter a text</p>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>🐒⌨️</button>
      </form>
      <p>{text.current}</p>
    </>
  )
}

export default App
