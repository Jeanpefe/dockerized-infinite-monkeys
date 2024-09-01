import { useCallback, useRef, useState } from 'react';
import './App.css'
import MonkeyText from './components/MonkeyText';
import { ProbabilityUnderConditions } from './components/Probability';

function App() {
  const [generate, setGenerate] = useState<boolean>(false)
  const [inputText, setInputText] = useState<string>('')
  const [inputNumberOfMonkeys, setInputNumberOfMonkeys] = useState<number>(0)
  const [charactersPerSecond, setCharactersPerSecond] = useState<number>(0)
  const [foundMonkeyIndex, setFoundMonkeyIndex] = useState<number | null>(null)
  const [charactersTyped, setCharactersTyped] = useState<number>(0)
  const inputTextRef = useRef<HTMLInputElement>(null);
  const inputNumberOfMonkeysRef = useRef<HTMLInputElement>(null);
  const charactersPerSecondRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
	setFoundMonkeyIndex(null)
    setGenerate(true)
    setCharactersTyped(0)
    if (inputTextRef.current) {
      setInputText(inputTextRef.current.value)
    }
    if (inputNumberOfMonkeysRef.current) {
      setInputNumberOfMonkeys(Number(inputNumberOfMonkeysRef.current.value) || 0)
    }
    if (charactersPerSecondRef.current) {
      setCharactersPerSecond(Number(charactersPerSecondRef.current.value) || 0)
    }
  }

  const handleTextFound = useCallback((index: number) => {
    setFoundMonkeyIndex(index);
    setGenerate(false); // Detener la generación cuando se encuentra el texto
    console.log("coincide");
  }, []);
  return (
    <>
      <h1>Dockerized Infinite Monkeys</h1>
      <section style={{ 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center' }}>
        <form onSubmit={handleSubmit} style={{ 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center' }}>
          <div>
            <label>Text:</label>
            <input type="text" ref={inputTextRef} />
          </div>
          <div>
            <label>Number of Monkeys:</label>
            <input type="number" ref={inputNumberOfMonkeysRef} />
          </div>
          <div>
            <label>Characters per second:</label>
            <input type="number" ref={charactersPerSecondRef} />
          </div>
          <button disabled={generate}>🐒⌨️</button>
        </form>
        <button onClick={() => setGenerate(false)}>Stop generating</button>
      </section>
	  <section>
		{foundMonkeyIndex !== null && <p>Monkey {foundMonkeyIndex + 1} typed the text!</p>}
	  </section>
	{inputText &&
	<>
		<p>Characters typed: {charactersTyped}</p>
		<section>
			<h2>Probabilities</h2>
			<ProbabilityUnderConditions inputNumberOfMonkeys={inputNumberOfMonkeys} numberOfCharacters={1000} displayTextNumberOfCharacters={'1000'} inputText={inputText} numberOfDecimals={15}/>
			<ProbabilityUnderConditions inputNumberOfMonkeys={inputNumberOfMonkeys} numberOfCharacters={10000} displayTextNumberOfCharacters={'10000'} inputText={inputText} numberOfDecimals={15}/>
			<ProbabilityUnderConditions inputNumberOfMonkeys={inputNumberOfMonkeys} numberOfCharacters={1000000} displayTextNumberOfCharacters={'1 million'} inputText={inputText} numberOfDecimals={15}/>
			<ProbabilityUnderConditions inputNumberOfMonkeys={inputNumberOfMonkeys} numberOfCharacters={1000000000} displayTextNumberOfCharacters={'1000 million'} inputText={inputText} numberOfDecimals={15}/>
		</section>
	</>
	  }
	<section style={{ "display": "flex", "gap": "2rem", "flexDirection": "column" }}>
	{inputNumberOfMonkeys > 50 ? (
		(
			Array.from({ length: 50 }).map((_, index) => (
			<MonkeyText
				inputText={inputText}
				generate={generate}
				charactersPerSecond={charactersPerSecond}
				setCharactersTyped={setCharactersTyped}
				onTextFound={() => handleTextFound(index)}
			/>
			))
		)
	) : (
		Array.from({ length: inputNumberOfMonkeys }).map((_, index) => (
		<MonkeyText
			key={index}
			inputText={inputText}
			generate={generate}
			charactersPerSecond={charactersPerSecond}
			onTextFound={() => handleTextFound(index)}
			setCharactersTyped={setCharactersTyped}
		/>
		))
	)}
	</section>

    </>
  )
}

export default App
