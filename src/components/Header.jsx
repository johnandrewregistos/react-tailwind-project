import React from 'react'
// images
import Logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <button className="btn btn-sm">Work With Me</button>
        </div>
      </div>
    </header>
  )
}
