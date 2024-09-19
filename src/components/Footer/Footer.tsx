import { useState, useEffect } from 'react'
import './Footer.css'

export default function Footer() {
    const [currentText, setCurrentText] = useState('Made by Jeanpefe')

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

    // Separar la última palabra del texto
    const splitText = currentText.split(' ')
    const lastWord = splitText.pop()
    const textWithoutLastWord = splitText.join(' ')

    return (
        <footer>
            <p>
                {textWithoutLastWord}{' '}
                <a style={{ "color": "#392c1c" }} href="https://github.com/Jeanpefe" target="_blank">
                    {lastWord}
                </a>
            </p>
        </footer>
    );
}
