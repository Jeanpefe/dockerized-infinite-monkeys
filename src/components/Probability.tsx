import { getProbabilityOfTypingAWordWithMultipleMonkeys } from "../utils/calculateProbabities";

interface ProbabilityUnderConditionsProps {
	inputNumberOfMonkeys: number;
	numberOfCharacters: number;
	displayTextNumberOfCharacters: string;
	inputText: string;
	numberOfDecimals: number;
}
export function ProbabilityUnderConditions({ inputNumberOfMonkeys, numberOfCharacters, displayTextNumberOfCharacters, inputText, numberOfDecimals }: ProbabilityUnderConditionsProps) {
	const probability = getProbabilityOfTypingAWordWithMultipleMonkeys({ inputNumberOfMonkeys, numberOfCharacters, inputText, numberOfDecimals});
	
	  return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4e6d7', padding: '1rem', borderRadius: '12px', textAlign: 'center', width: '17rem', height: '12rem'}}>
		  <h3 style={{ fontSize: '1.25rem', color: '#5d4037'}}>
			{probability}
		  </h3>
		  <p style={{ fontSize: '1.2rem', color: '#6d4c41'}}>
			Probability in <strong>{displayTextNumberOfCharacters}</strong> characters
		  </p>
		</div>
	  )
}