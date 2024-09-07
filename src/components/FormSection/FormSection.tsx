import { useRef, useState } from "react";

interface FormSectionProps {
    onFormSubmit: (
        inputText: string,
        inputNumberOfMonkeys: number,
        charactersPerSecond: number
    ) => void;
    generate: boolean;
}

export default function FormSection({ onFormSubmit, generate }: FormSectionProps) {
    const [isFormInvalid, setIsFormInvalid] = useState<boolean>(false);
    const inputTextRef = useRef<HTMLInputElement>(null);
    const inputNumberOfMonkeysRef = useRef<HTMLInputElement>(null);
    const charactersPerSecondRef = useRef<HTMLInputElement>(null);

    const validateForm = () => {
        if (
            inputTextRef.current?.value &&
            Number(inputNumberOfMonkeysRef.current?.value) > 0 &&
            Number(charactersPerSecondRef.current?.value) > 0
        ) {
            setIsFormInvalid(true);
        } else {
            setIsFormInvalid(false);
        }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            inputTextRef.current &&
            inputNumberOfMonkeysRef.current &&
            charactersPerSecondRef.current
        ) {
            onFormSubmit(
                inputTextRef.current.value,
                Number(inputNumberOfMonkeysRef.current?.value),
                Number(charactersPerSecondRef.current?.value)
            )
        }
    }
    return (
        <section className='input_block'>
            <form className='input_block__form' onSubmit={handleSubmit}>
                <div className='formFieldContainer'>
                    <label className='formField'>Text to type</label>
                    <input required type="text" ref={inputTextRef} onChange={validateForm} />
                </div>
                <div className='formFieldContainer'>
                    <label className='formField'>Number of Monkeys</label>
                    <input required type="number" ref={inputNumberOfMonkeysRef} onChange={validateForm} />
                </div>
                <div className='formFieldContainer'>
                    <label className='formField'>Keys per second</label>
                    <input required type="number" ref={charactersPerSecondRef} onChange={validateForm} />
                </div>
                <button disabled={!isFormInvalid}>{generate ? '🐒🍌' : '🐒⌨️'}</button>
            </form>
        </section>
    )
}