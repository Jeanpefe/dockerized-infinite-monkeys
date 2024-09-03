import { useState, useEffect } from 'react';

export default function Footer() {
    const [currentText, setCurrentText] = useState('Made by Jeanpefe');

    useEffect(() => {

        const texts = [
            'Mdae by Ajenpfe',
            'Made by Jeanpefe',
            'Made bJeapnfe',
            'Mad by Je1npefe',
            'Made by Jeapfene',
            'Mdae by Jeanpef',
            'Mdae b Jeanp3f',
            'Mdae by Jenaepefe',
            'M4ae by Jenaepefe'
        ];

        const intervalId = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * texts.length);
            setCurrentText(texts[randomIndex]);
        }, 1500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer>
            <p>{currentText}</p>
        </footer>
    );
}
