import { useEffect, useState } from "react";
import { CHARACTERS } from "../consts";

interface useGenerateTextProps {
	generate: boolean;
	charactersPerSecond: number;
	inputText: string;
	onTextFound: () => void;
}
export const useGenerateText = ({generate, charactersPerSecond, inputText, onTextFound}: useGenerateTextProps) => {
	const [displayText, setDisplayText] = useState('')
	const characters = CHARACTERS;
	const charactersLength = characters.length;

	useEffect(() => {
		if (generate) {
			setDisplayText('')
			const interval = setInterval(() => {
				setDisplayText(prev => {
					const newText = prev + characters.charAt(Math.floor(Math.random() * charactersLength))
					if (newText.includes(inputText)) {
						onTextFound();
						console.log(newText)
					  }
					return newText
				})
			}, 1000 / charactersPerSecond);
			// Limpiar el intervalo cuando el componente se desmonte o 'generate' cambie
			return () => clearInterval(interval);
		}
	}, [generate, charactersPerSecond]);


	return { displayText }
} 