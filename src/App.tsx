import { useRef, useState } from 'react';
import './App.css'
import MonkeyText from './components/MonkeyText';

function App() {
  const [generate, setGenerate] = useState(false)
  const [inputText, setInputText] = useState('')
  const [inputNumberOfMonkeys, setInputNumberOfMonkeys] = useState(0)
  const inputTextRef = useRef<HTMLInputElement>(null);
  const inputNumberOfMonkeysRef = useRef<HTMLInputElement>(null);

  //   useEffect(() => {
  //     if (generate) {
  //       const interval = setInterval(() => {
  //         const characters = CHARACTERS;
  //         const charactersLength = characters.length;
  //         setDisplayText(prevDisplayText => prevDisplayText + characters.charAt(Math.floor(Math.random() * charactersLength)))
  //       }, 1);

  //       // Limpiar el intervalo cuando el componente se desmonte o 'generate' cambie
  //       return () => clearInterval(interval);
  //     }
  //   }, [generate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGenerate(true)
    if (inputTextRef.current) {
      setInputText(inputTextRef.current.value)
    }
    if (inputNumberOfMonkeysRef.current) {
      setInputNumberOfMonkeys(inputNumberOfMonkeysRef.current.value)
    }
  }

  return (
    <>
      <h1>Dockerized Infinite Monkeys</h1>
      <p>Enter a text</p>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputTextRef} />
        <input type="number" ref={inputNumberOfMonkeysRef} />
        <button disabled={generate}>🐒⌨️</button>
      </form>
      <button onClick={() => setGenerate(false)}>Stop generating</button>
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
