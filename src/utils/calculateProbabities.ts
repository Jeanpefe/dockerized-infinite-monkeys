import { CHARACTERS } from "../consts"

interface ProbabilityOfTypingAWordWithMultipleMonkeysTypes {
	inputNumberOfMonkeys: number;
	numberOfCharacters: number;
	inputText: string;
	numberOfDecimals: number;
}

export function getProbabilityOfTypingAWordWithMultipleMonkeys({inputNumberOfMonkeys, numberOfCharacters, inputText, numberOfDecimals}: ProbabilityOfTypingAWordWithMultipleMonkeysTypes) {
	return (1-(1-(1/CHARACTERS.length)**inputText.length)**(numberOfCharacters/inputText.length*inputNumberOfMonkeys)).toFixed(numberOfDecimals)
}