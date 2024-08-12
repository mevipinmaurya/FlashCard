import React, { useState } from 'react'
import axios from "axios"

const AddCards = () => {

    const [data, setData] = useState({
        question: "",
        answer: "",
        category: "Programming",
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const question = data.question;
        const answer = data.answer;
        const category = data.category;

        const response = await axios.post("http://localhost:3000/addcard", {
            question, answer, category
        }, { withCredentials: true })
        if (response.data.success) {
            // Reset the form data
            setData({
                question: "",
                answer: "",
                category: "Programming",
            })
            console.log(response.data.message)
        } else {
            console.log(response.data.message)
        }
    }

    return (
        <>
            <div className='w-full flex flex-col p-5 lg:ml-20'>
                <p className='text-2xl font-semibold mt-4 mb-6'>Add Flashcard </p>
                <form onSubmit={onSubmitHandler} className='md:w-[40%] flex flex-col gap-4'>

                    <div className='flex flex-col gap-2'>
                        <p className="text-lg">Your Question</p>
                        <textarea onChange={onChangeHandler} value={data.question} name="question" className="textarea textarea-bordered w-full resize-none" required></textarea>
                    </div>

                    <div>
                        <p className="text-lg">Correct Answer</p>
                        <textarea onChange={onChangeHandler} value={data.answer} name="answer" className="textarea textarea-bordered w-full resize-none" required></textarea>
                    </div>

                    <div>
                        <p className="text-lg">Question Category</p>
                        <select onChange={onChangeHandler} name="category" className="select select-bordered w-full" required>
                            <option value="Programming">Programming</option>
                            <option value="Science">Science</option>
                            <option value="DBMS">DBMS</option>
                        </select>
                    </div>

                    <div>
                        <button type='submit' className='btn bg-orange-600 hover:bg-orange-700 text-white'>ADD</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default AddCards