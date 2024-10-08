import { useCallback, useState } from 'react'
import './App.css'
import MonkeyText from './components/MonkeyText'
import { ProbabilityUnderConditions } from './components/Probability'
import Footer from './components/Footer/Footer'
import FormSection from './components/FormSection/FormSection'
import MathExplanation from './components/MathExplanation/MathExplanation'

function App() {
  const [generate, setGenerate] = useState<boolean>(false)
  const [inputText, setInputText] = useState<string>('')
  const [inputNumberOfMonkeys, setInputNumberOfMonkeys] = useState<number>(0)
  const [charactersPerSecond, setCharactersPerSecond] = useState<number>(0)
  const [foundMonkeyIndex, setFoundMonkeyIndex] = useState<number | null>(null)
  const [charactersTyped, setCharactersTyped] = useState<number>(0)

  const handleTextFound = useCallback((index: number) => {
    setFoundMonkeyIndex(index)
    setGenerate(false) // Detener la generación cuando se encuentra el texto
  }, [])

  const handleFormSubmit = (inputText: string, numberOfMonkeys: number, charactersPerSecond: number) => {
    setInputText(inputText)
    setInputNumberOfMonkeys(numberOfMonkeys)
    setCharactersPerSecond(charactersPerSecond)
    setGenerate(!generate)
    setFoundMonkeyIndex(null)

    if (charactersTyped !== 0 && generate === false) {
      setCharactersTyped(0)
    }
  }

  return (
    <>
      <main>
        <h1>Dockerized Infinite Monkeys</h1>
		<MathExplanation />
        <FormSection onFormSubmit={handleFormSubmit} generate={generate} />
        <section>
          {foundMonkeyIndex !== null && <p>Monkey {foundMonkeyIndex + 1} typed the text!</p>}
        </section>
        {inputText &&
          <>
            <p>Keys pressed: <strong>{charactersTyped}</strong></p>
            <h2>Probabilities</h2>
            <section style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': '#e5d9d0', 'borderRadius': '1rem', 'border': '0.5rem solid #b49159', 'padding': '1rem', 'gap': '2rem', 'flexWrap': 'wrap'}}>
              <ProbabilityUnderConditions inputNumberOfMonkeys={inputNumberOfMonkeys} numberOfCharacters={1000} displayTextNumberOfCharacters={'1000'} inputText={inputText} numberOfDecimals={15} />
              <ProbabilityUnderConditions inputNumberOfMonkeys={inputNumberOfMonkeys} numberOfCharacters={10000} displayTextNumberOfCharacters={'10000'} inputText={inputText} numberOfDecimals={15} />
              <ProbabilityUnderConditions inputNumberOfMonkeys={inputNumberOfMonkeys} numberOfCharacters={1000000} displayTextNumberOfCharacters={'1 million'} inputText={inputText} numberOfDecimals={15} />
              <ProbabilityUnderConditions inputNumberOfMonkeys={inputNumberOfMonkeys} numberOfCharacters={1000000000} displayTextNumberOfCharacters={'1000 million'} inputText={inputText} numberOfDecimals={15} />
            </section>
          </>
        }
        <section style={{ "display": "flex", "gap": "2rem", "flexDirection": "column", "marginTop": '2rem' }}>
          {
            Array.from({ length: Math.min(inputNumberOfMonkeys, 50) }).map((_, index) => (
              <MonkeyText
                index={index}
                inputText={inputText}
                generate={generate}
                charactersPerSecond={charactersPerSecond}
                onTextFound={() => handleTextFound(index)}
                setCharactersTyped={setCharactersTyped}
                indexFound={foundMonkeyIndex}
              />
            ))
          }
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
