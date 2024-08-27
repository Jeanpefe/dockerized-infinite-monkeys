import { useEffect, useState } from "react";
import { CHARACTERS } from "../consts";

export const useGenerateText = (generate: boolean, charactersPersSecond: number) => {
	const [displayText, setDisplayText] = useState('')

	useEffect(() => {
		if (generate) {
			setDisplayText('')
			const interval = setInterval(() => {
				const characters = CHARACTERS;
				const charactersLength = characters.length;
				setDisplayText(prevDisplayText => prevDisplayText + characters.charAt(Math.floor(Math.random() * charactersLength)))
			}, 1000 / charactersPersSecond);
			// Limpiar el intervalo cuando el componente se desmonte o 'generate' cambie
			return () => clearInterval(interval);
		}
	}, [generate, charactersPersSecond]);


	return { displayText }
} 