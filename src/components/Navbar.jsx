import React from 'react'

const Navbar = () => {
  return (
    <nav className='px-10 py-3 flex justify-between  items-center'>
      <h1 className='text-[#ffffff]'>VISHLOGO</h1>
      <div className='text-[#C2C2C2] flex  items-center gap-5 capitalize'>
        <h1 className='nav-text'>Home</h1>
        <h1 className='nav-text'>Resume</h1>
        <h1 className='nav-text'>work</h1>
        <h1 className='nav-text'>contact us</h1>
        <h1 className='nav-text'>Services</h1>
      </div>
      <div>
        <button className='btn px-5 py-2 rounded-3xl border-gray-500 hover:bg-[#0073BF] text-[#ffffff] text-[16px]'>Let's Connect</button>
      </div>
    </nav>
  )
}

export default Navbar
