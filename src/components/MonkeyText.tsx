import { useGenerateText } from "../hooks/useGenerateText"

export default function MonkeyText ({inputText, generate}: {inputText: string, generate: boolean}) {
	const {displayText} = useGenerateText(generate)
	console.log(displayText)
	return (
	<section style={{ "background": "#404040", "maxWidth": "90rem", "borderRadius": "0.5rem" }} >
		<p>{displayText}</p>
	</section >
	)
}