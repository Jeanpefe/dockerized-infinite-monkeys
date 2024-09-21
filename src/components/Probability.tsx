import { getProbabilityOfTypingAWordWithMultipleMonkeys } from "../utils/calculateProbabities";

interface ProbabilityUnderConditionsProps {
	inputNumberOfMonkeys: number;
	numberOfCharacters: number;
	displayTextNumberOfCharacters: string;
	inputText: string;
	numberOfDecimals: number;
}
export function ProbabilityUnderConditions({ inputNumberOfMonkeys, numberOfCharacters, displayTextNumberOfCharacters, inputText, numberOfDecimals }: ProbabilityUnderConditionsProps) {
	return (
		<p>Probability of typing the word in less than {displayTextNumberOfCharacters} characters with {inputNumberOfMonkeys} {inputNumberOfMonkeys > 1 ? 'monkeys' : 'monkey'}: {getProbabilityOfTypingAWordWithMultipleMonkeys({ inputNumberOfMonkeys, numberOfCharacters, inputText, numberOfDecimals })}</p>
	)
}