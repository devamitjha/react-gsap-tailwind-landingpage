import React from 'react'

const Header = () => {
  return (
      <header className="flex justify-between items-center py-4 gap-8">
        <div className="logo text-4xl uppercase font-bold text-yellow">Maria</div>
        <nav className="flex flex-1 justify-center items-center">
            <ul className="menu flex w-full justify-center items-center gap-4">
                <li><a href="/" >Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/services">Portfolio</a></li>
                <li><a href="/services">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <div className="contact w-30 h-14 inline-flex justify-center items-center bg-yellow text-white rounded-lg border-2 border-yellow cursor-pointer text-lg hover:bg-white hover:text-yellow transition-all ease-in-out duration-300">Contact</div>
    </header>
  )
}

export default Header
