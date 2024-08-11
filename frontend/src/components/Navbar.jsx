import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-slate-400 border shadow-md rounded-md">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <select className="select outline-none active:outline-none hover:outline-none select-bordered select-sm md:w-full max-w-xs">
                    <option disabled selected>Data Structure & Algorithms</option>
                    <option>Java</option>
                    <option>React Js</option>
                </select>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    )
}

export default Navbar