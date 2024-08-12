import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";

const ViewCards = () => {
    const [list, setList] = useState([])

    // Fetching Flashcard data from db
    const fetchList = async () => {
        const response = await axios.get("http://localhost:3000/getcard")
        if (response.data) {
            setList(response.data)
        } else {
            console.log("Error !!!")
        }
    }

    useEffect(() => {
        fetchList();
    }, [])


    // Removing card form the database
    const removeCard = async (id) => {
        const card = await axios.delete(`http://localhost:3000/deletecard/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }, { withCredentials: true });
        await fetchList();
        if (card.data.success) {
            console.log("Flashcard removed")
        } else {
            console.log("Error !!!")
        }
    }


    return (
        <div className='w-full'>

            <div className='w-full flex flex-col'>

                <p className='text-2xl font-semibold mt-4 mb-6'>All Flashcards List</p>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>QuestionId</th>
                                <th>Question</th>
                                <th>Answer</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((e, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>
                                                {e.QuestionId}
                                            </td>
                                            <td>
                                                <p>{e.Question}</p>
                                            </td>
                                            <td>
                                                <p>{e.Answer}</p>
                                            </td>
                                            <td>
                                                <p>{e.Category}</p>
                                            </td>
                                            <th>
                                                <p onClick={() => removeCard(e.QuestionId)} className='text-2xl text-orange-700 cursor-pointer hover:scale-110'><MdDelete /></p>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )
}

export default ViewCards