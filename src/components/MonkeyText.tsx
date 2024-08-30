import { useGenerateText } from "../hooks/useGenerateText"

interface MonkeyTextProps {
	inputText: string;
	generate: boolean;
	charactersPerSecond: number;
	onTextFound: () => void;
  }

export default function MonkeyText({ inputText, generate, charactersPerSecond, onTextFound }: MonkeyTextProps) {
	const { displayText } = useGenerateText({generate, charactersPerSecond, inputText, onTextFound})
	console.log("renderizamos padre")
	return (
		<section style={{ "background": "#404040", "maxWidth": "90rem", "borderRadius": "0.5rem", "overflowX": "auto", "padding": "0.5rem 1rem" }} >
			<p>{displayText}</p>
		</section >
	)
}
1