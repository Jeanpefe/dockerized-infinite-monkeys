import { useGenerateText } from "../hooks/useGenerateText"

interface MonkeyTextProps {
	inputText: string;
	generate: boolean;
	charactersPerSecond: number;
	onTextFound: () => void;
	setCharactersTyped: React.Dispatch<React.SetStateAction<number>>; // Funcion de estado
}

export default function MonkeyText({ inputText, generate, charactersPerSecond, onTextFound, setCharactersTyped }: MonkeyTextProps) {
	const { displayText } = useGenerateText({ generate, charactersPerSecond, inputText, onTextFound, setCharactersTyped })
	return (
		<section style={{ "background": "#f6eee3", "maxWidth": "90rem", "borderRadius": "0.5rem", "overflowX": "auto", "padding": "0.5rem 1rem" }} >
			<p style={{ 'fontFamily': 'Special Elite', 'color': 'black' }}>{displayText}</p>
		</section >
	)
}
1