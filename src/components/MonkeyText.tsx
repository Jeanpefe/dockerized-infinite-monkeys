import { useGenerateText } from "../hooks/useGenerateText"

export default function MonkeyText({ inputText, generate, charactersPerSecond }: { inputText: string, generate: boolean, charactersPerSecond: number }) {
	const { displayText } = useGenerateText(generate, charactersPerSecond)
	return (
		<section style={{ "background": "#404040", "maxWidth": "90rem", "borderRadius": "0.5rem", "overflowX": "auto", "padding": "0.5rem 1rem" }} >
			<p>{displayText}</p>
		</section >
	)
}
1