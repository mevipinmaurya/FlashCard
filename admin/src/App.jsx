import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import AddCards from './components/AddCards'
import ViewCards from './components/ViewCards'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full lg:flex-row flex-col gap-5">
        <div className="w-full lg:w-[20%] lg:h-screen lg:border-r-[1px] flex justify-start items-start h-auto flex-grow ">
          <Sidebar />
        </div>
        <div className="w-full lg:w-[80%] flex justify-start items-start h-auto flex-grow">
          <Routes>
            <Route path='/add' element={<AddCards />} />
            <Route path='/list' element={<ViewCards />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App