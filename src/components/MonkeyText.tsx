import { useGenerateText } from "../hooks/useGenerateText"

export default function MonkeyText({ inputText, generate }: { inputText: string, generate: boolean }) {
	const { displayText } = useGenerateText(generate)
	return (
		<section style={{ "background": "#404040", "maxWidth": "90rem", "borderRadius": "0.5rem", "overflow-x": "auto", "padding": "0.5rem 1rem" }} >
			<p>{displayText}</p>
		</section >
	)
}
