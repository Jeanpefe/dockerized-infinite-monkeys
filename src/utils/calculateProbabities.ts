import { CHARACTERS } from "../consts"
import { Decimal } from 'decimal.js';

interface ProbabilityOfTypingAWordWithMultipleMonkeysTypes {
	inputNumberOfMonkeys: number;
	numberOfCharacters: number;
	inputText: string;
	numberOfDecimals: number;
}

export function getProbabilityOfTypingAWordWithMultipleMonkeys({inputNumberOfMonkeys, numberOfCharacters, inputText, numberOfDecimals}: ProbabilityOfTypingAWordWithMultipleMonkeysTypes) {	
	Decimal.set({ precision: 100 });

const probability = new Decimal(1)
  .minus(new Decimal(1).minus((new Decimal(1).div(CHARACTERS.length).pow(inputText.length))).pow(numberOfCharacters / inputText.length * inputNumberOfMonkeys))

// Redondear a la cantidad específica de decimales
const roundedProbability = probability.toDecimalPlaces(numberOfDecimals);

// Convertir a str, usando notación científica si es necesario
let probabilityString = roundedProbability.toFixed(numberOfDecimals);

// Si el valor es muy pequeño, usamos notación científica
if (roundedProbability.lt(new Decimal(1).div(new Decimal(25).pow(numberOfDecimals)))) {
  probabilityString = probability.toExponential(numberOfDecimals);
}

return probabilityString;
	// return (1-Math.pow((1-Math.pow(1/CHARACTERS.length, inputText.length)), (numberOfCharacters/inputText.length*inputNumberOfMonkeys)))
}