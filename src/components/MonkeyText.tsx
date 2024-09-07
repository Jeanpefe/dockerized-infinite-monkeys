import { useGenerateText } from "../hooks/useGenerateText"

interface MonkeyTextProps {
	index: number;
	inputText: string;
	generate: boolean;
	charactersPerSecond: number;
	onTextFound: () => void;
	setCharactersTyped: React.Dispatch<React.SetStateAction<number>>; // Funcion de estado
	indexFound: number | null;
}

export default function MonkeyText({ index, inputText, generate, charactersPerSecond, onTextFound, setCharactersTyped, indexFound }: MonkeyTextProps) {
	const { displayText } = useGenerateText({ generate, charactersPerSecond, inputText, onTextFound, setCharactersTyped })
	return (
		<section style={{
			"background": "#f6eee3", "maxWidth": "90rem", "borderRadius": "0.5rem", "overflowX": "auto", "padding": "0.5rem 1rem", "opacity": indexFound !== null && index !== indexFound ? "0.5" : "1"
		}} >
			<p style={{ 'fontFamily': 'Special Elite', 'color': 'black' }
			} > {displayText}</ p>
		</section >
	)
}