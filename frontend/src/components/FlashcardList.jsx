import React from 'react'
import Flashcards from './Flashcards'

const FlashcardList = ({ flashCard }) => {
    return (
        <>
            <div className='w-full flex justify-center items-center'>
                <div className='w-[96%] mt-4 grid grid-cols-1 gap-4 justify-center'>
                    <div className="carousel w-full flex justify-center items-center ">
                        {
                            flashCard.map(flashItem => {
                                return <Flashcards flashcard={flashItem} key={flashItem.id} />
                            })
                        }
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default FlashcardList