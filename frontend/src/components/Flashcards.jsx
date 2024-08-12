import React, { useState } from 'react'
import "./flashcard.css"

const Flashcards = ({ flashcard, idx }) => {
    const [flip, setFlip] = useState(false);

    return (
        <>
            <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
                <div onClick={() => setFlip(!flip)} className={`fCard ${flip ? 'flip' : ''} border-2 rounded-lg border-[#00CED1] flex flex-col justify-center items-center relative h-[60vh] w-[80%]`}>
                    <div className='flex front flex-col justify-center items-center text-center'>
                        <div className='text-4xl font-semibold'>
                            <p className='text-center mb-7 fixed top-5 text-[#00CED1]'>Question :-</p>
                            {
                                flashcard.Question
                            }
                        </div>
                    </div>
                    <div className='back text-2xl font-semibold'>
                        <p className='text-left mb-7 text-[#00CED1]'>Answer :-</p>
                        {flashcard.Answer}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Flashcards