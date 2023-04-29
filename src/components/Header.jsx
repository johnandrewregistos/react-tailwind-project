import React from 'react'
// images
import Logo from '../assets/logo.png'

export const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <a href="mailto:registosandrew@gmail.com"><button className="btn btn-sm">Work With Me</button></a>
        </div>
      </div>
    </header>
  )
}
