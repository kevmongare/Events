import { useState, useEffect } from "react";

import img1 from "/bg.jpeg";
import img2 from "/bg.jpeg";
import img3 from "/bg.jpeg";

const slides = [
  { image: img1, title: "Weddings", text: "Elegant and unforgettable." },
  { image: img2, title: "Corporate Events", text: "Professional and polished." },
  { image: img3, title: "Birthdays", text: "Celebrate with style." },
];
import './App.css'
import { Link as ScrollLink } from 'react-scroll';

function App() {
 const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <>
    {/* menu bar */}
       <section className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
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
    </section>
    {/* header section */}

    <div className="relative w-full h-[80vh] mt-30 shadow-gray-700 overflow-hidden z-40 max-w-7xl mx-auto rounded-lg "> {/* Adjusted height */}
      {/* Background image */}
      <img
  src={current.image}
  alt={current.title}
  className="absolute top-0 left-0 w-full  h-[80vh] object-cover z-10"
/>

<div className="absolute inset-0 bg-black/70 z-20 flex flex-col justify-center items-center text-center px-4">
  <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
    {current.title}
  </h2>
  <p className="text-white text-lg md:text-xl pb-10">{current.text}</p>

       <a href="#contact"
          className="hidden md:inline-block bg-pink-600 text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-pink-700 transition">
          Book Event
        </a>
</div>
    </div>
    </>
  )
}

export default App
