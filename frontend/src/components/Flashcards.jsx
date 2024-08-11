import React, { useState } from 'react'
import "./flashcard.css"

const Flashcards = ({ flashcard }) => {
    const [flip, setFlip] = useState(false);

    return (
        <>
            <div onClick={() => setFlip(!flip)} className={`fCard ${flip ? 'flip' : ''} border rounded-lg flex flex-col justify-center items-center`}>
                <div className='flex front flex-col justify-center'>
                    <div className='text-xl font-semibold'>
                        {flashcard.question}
                    </div>
                    <div className='text-slate-700 '>
                        {flashcard.option.map(opt => (
                            <div key={opt}>{opt}</div>
                        ))}
                    </div>
                </div>
                <div className='back'>
                    {flashcard.answer}
                </div>
            </div>
        </>
    )
}

export default Flashcards