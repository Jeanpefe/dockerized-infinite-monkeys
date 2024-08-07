import { useEffect, useRef, useState } from 'react';
import './App.css'
import { CHARACTERS } from './consts';

function App() {
  const [generate, setGenerate] = useState(false)
  const [inputText, setInputText] = useState('')
  const [displayText, setDisplayText] = useState(''); // Estado para actualizar la pantalla
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (generate) {
      const interval = setInterval(() => {
        const characters = CHARACTERS;
        const charactersLength = characters.length;
        setDisplayText(prevDisplayText => prevDisplayText + characters.charAt(Math.floor(Math.random() * charactersLength)))
      }, 100);

      // Limpiar el intervalo cuando el componente se desmonte o 'generate' cambie
      return () => clearInterval(interval);
    }
  }, [generate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGenerate(!generate)
    if (inputRef.current) {
      setInputText(inputRef.current.value)
      console.log(inputRef.current.value)
    }
  }

  return (
    <>
      <h1>Dockerized Infinite Monkeys</h1>
      <p>Enter a text</p>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>🐒⌨️</button>
      </form>
      <section style={{ "background": "#404040", "maxWidth": "40rem", "overflow": "scroll", "borderRadius": "0.5rem" }} >
        <p>{displayText}</p>
      </section >
    </>
  )
}

export default App
