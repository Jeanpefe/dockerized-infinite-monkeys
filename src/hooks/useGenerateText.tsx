import { useEffect, useState } from "react";
import { CHARACTERS } from "../consts";

export const useGenerateText = (generate: boolean, charactersPersSecond: number, inputText:string, onTextFound: () => void) => {
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
					  }
					return newText
				})
			}, 1000 / charactersPersSecond);
			// Limpiar el intervalo cuando el componente se desmonte o 'generate' cambie
			return () => clearInterval(interval);
		}
	}, [generate, charactersPersSecond]);


	return { displayText }
} 