import { useEffect, useState } from "react";
import { CHARACTERS } from "../consts";

interface useGenerateTextProps {
	generate: boolean;
	charactersPerSecond: number;
	inputText: string;
	onTextFound: () => void;
}
export const useGenerateText = ({generate, charactersPerSecond, inputText, onTextFound}: useGenerateTextProps) => {
	const [displayText, setDisplayText] = useState<string>('')
	const characters = CHARACTERS;
	const charactersLength = characters.length;

	useEffect(() => {
		if (generate) {
			setDisplayText('')
			const interval = setInterval(() => {
				setDisplayText(prev => {
					const newText = prev + characters.charAt(Math.floor(Math.random() * charactersLength))
					console.log(newText)
					if (newText.includes(inputText)) {
						console.log(newText)
						onTextFound();
						clearInterval(interval)
					}
					console.log(newText)
					return newText
				})
			}, 1000 / charactersPerSecond);
			// Limpiar el intervalo cuando el componente se desmonte o 'generate' cambie
			return () => clearInterval(interval);
		}
	}, [generate, charactersPerSecond, inputText]);


	return { displayText }
} 