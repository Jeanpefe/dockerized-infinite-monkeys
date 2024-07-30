import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const [generate, setGenerate] = useState(true)
  const [displayText, setDisplayText] = useState(''); // Estado para actualizar la pantalla

  useEffect(() => {
    if (generate) {
      const interval = setInterval(() => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        setDisplayText(prevDisplayText => prevDisplayText + characters.charAt(Math.floor(Math.random() * charactersLength)))
      }, 100);

      // Limpiar el intervalo cuando el componente se desmonte o 'generate' cambie
      return () => clearInterval(interval);
    }
  }, [generate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <>
      <h1>Dockerized Infinite Monkeys</h1>
      <p>Enter a text</p>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>🐒⌨️</button>
      </form>
      <p>{displayText}</p>
    </>
  )
}

export default App
