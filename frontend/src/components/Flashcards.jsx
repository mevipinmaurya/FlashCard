import React, { useState } from 'react'
import "./flashcard.css"

const Flashcards = ({ flashcard }) => {
    const [flip, setFlip] = useState(false);

    return (
        <>
            <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
                <div onClick={() => setFlip(!flip)} className={`fCard ${flip ? 'flip' : ''} border-2 rounded-lg flex flex-col justify-center items-center relative h-[60vh] w-[80%]`}>
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
            </div>
        </>
    )
}

export default Flashcards