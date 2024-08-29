import { useEffect, useState } from "react";
import { CHARACTERS } from "../consts";

export const useGenerateText = (generate: boolean, charactersPersSecond: number, inputText:string, onTextFound: () => void) => {
	const [displayText, setDisplayText] = useState('')

	useEffect(() => {
		if (generate) {
			setDisplayText('')
			const interval = setInterval(() => {
				const characters = CHARACTERS;
				const charactersLength = characters.length;
				const newText = displayText + characters.charAt(Math.floor(Math.random() * charactersLength))
				if (newText.includes(inputText)) {
					onTextFound();
				  }
				setDisplayText(prevDisplayText => prevDisplayText + characters.charAt(Math.floor(Math.random() * charactersLength)))
			}, 1000 / charactersPersSecond);
			// Limpiar el intervalo cuando el componente se desmonte o 'generate' cambie
			return () => clearInterval(interval);
		}
	}, [generate, charactersPersSecond]);


	return { displayText }
} 