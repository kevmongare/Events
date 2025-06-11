// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Link as ScrollLink } from 'react-scroll';

function App() {
 

  return (
    <>
       <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="w-full bg-pink-600 p-2">
        <div className="flex justify-between text-white max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            {/* <Mail className="w-4 h-4" /> */}
            <a href="mailto:kmongare4@gmail.com" className="text-sm">
              kmongare4@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {/* <PhoneCall className="w-4 h-4" /> */}
            <a href="tel:0706384510" className="text-sm">
              0706384510
            </a>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-3xl font-extrabold text-pink-600 tracking-tight">
          Jurn<span className="text-yellow-500">Events</span>
        </div>

        <ul className="hidden md:flex space-x-8 text-base ">
          <li className="flex items-center space-x-1">
            {/* <Home className="w-5 h-5 text-pink-600" /> */}
            <ScrollLink to="home" smooth duration={500} offset={-70} className="cursor-pointer hover:text-pink-600">
              Home
            </ScrollLink>
          </li>

          <li className="flex items-center space-x-1">
            {/* <Image className="w-5 h-5 text-pink-600" /> */}
            <ScrollLink to="gallery" smooth duration={500} offset={-70} className="cursor-pointer hover:text-pink-600">
              Gallery
            </ScrollLink>
          </li>

          <li className="flex items-center space-x-1">
            {/* <Info className="w-5 h-5 text-pink-600" /> */}
            <ScrollLink to="about" smooth duration={500} offset={-70} className="cursor-pointer text-gray-700 hover:text-pink-600">
              About
            </ScrollLink>
          </li>

          <li className="flex items-center space-x-1">
            {/* <CalendarHeart className="w-5 h-5 text-pink-600" /> */}
            <ScrollLink to="services" smooth duration={500} offset={-70} className="cursor-pointer hover:text-pink-600">
              Services
            </ScrollLink>
          </li>

          <li className="flex items-center space-x-1">
            {/* <PhoneCall className="w-5 h-5 text-pink-600" /> */}
            <ScrollLink to="contact" smooth duration={500} offset={-70} className="cursor-pointer hover:text-pink-600 ">
              Contact
            </ScrollLink>

            <ScrollLink
          to="contact"
          smooth
          duration={500}
          offset={-70}
          className="hidden md:inline-block bg-pink-600 text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-pink-700 transition cursor-pointer ml-5"
        >
          Book Event
        </ScrollLink>
          </li>
        </ul>

        
      </nav>
    </header>
    </>
  )
}

export default App
