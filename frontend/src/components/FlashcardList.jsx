import React from 'react'
import Flashcards from './Flashcards'

const FlashcardList = ({ flashCard }) => {
    return (
        <>
            <div className='w-full flex justify-center items-center'>
                <div className='w-[96%] mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        flashCard.map(flashItem => {
                            return <Flashcards flashcard={flashItem} key={flashItem.id} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FlashcardList