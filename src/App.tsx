import { useState, useEffect } from "react";

import img1 from "/bg.jpeg";
import img2 from "/bg.jpeg";
import img3 from "/bg.jpeg";
import Ruracio from "/8.jpeg"
import Weddings from "/bg.jpeg"
// components/Gallery.jsx
import img_1 from "/6.jpeg";
import img_2 from "/7.jpeg";
import img_3 from "/8.jpeg";

const galleryItems = [
    {
      title: "Elegant Wedding",
      image: img_1,
      category: "Weddings",
    },
    {
      title: "Corporate Gala",
      image: "/4.jpeg",
      category: "Corporate",
    },
    {
      title: "Birthday Bash",
      image: "/5.jpeg",
      category: "Birthdays",
    },
    {
      title: "Outdoor Festival",
      image: img_2,
      category: "Festivals",
    },
    {
      title: "Office Launch",
      image: img_3,
      category: "Corporate",
    },
    {
      title: "Luxury Wedding",
      image: "/1.jpeg",
      category: "Weddings",
    },
  ];
const categories = ["All", "Weddings", "Birthdays", "Corporate", "Festivals"];
const slides = [
  { image: img1, title: "Weddings", text: "Elegant and unforgettable." },
  { image: img2, title: "Corporate Events", text: "Professional and polished." },
  { image: img3, title: "Birthdays", text: "Celebrate with style." },
];
import './App.css'
import { Link as ScrollLink } from 'react-scroll';

function App() {
    const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

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
     <div className="max-w-7xl mx-auto columns-2 md:columns-4 gap-8 text-center p-8 bg-gradient-to-b from-transparent to-white shadow-pink-100 shadow-lg rounded-lg mt-10">
            <div>
                <h1 className="text-pink-500 font-bold text-4xl">5000+</h1>
                <p className="text-gray-500 pt-5">People served</p>
            </div>
             <div >
                <h1 className="text-pink-500 font-bold text-4xl">99%</h1>
                <p className="text-gray-500 pt-4">Success Rate</p>
            </div>
            <div>
                <h1 className="text-pink-500 font-bold text-4xl">150+</h1>
                <p className="text-gray-500 pt-4">Events hosted</p>
            </div>
            <div>
                <h1 className="text-pink-500 font-bold text-4xl">5</h1>
                <p className="text-gray-500 pt-4">Branches within the country</p>
            </div>
        </div>
        <div>
           
                
        <div className="flex columns-auto max-w-7xl mx-auto px-5 py-8">
            <div className="overflow-hidden hover:shadow-lg bg-white mx-2 my-8  border-2 border-gray-100 w-80 rounded-xl pb-5 hover:scale-105 hover:border-0" >
                
                <img src="4.jpeg" alt="" 
                className="h-50 object-cover mx-auto  w-80"/>
                
                <h1 className="ml-5 text-2xl font-semibold text-black pt-5">Coporate Events</h1>
                <p className="text-gray-600 p-2 ml-5 text-sm"> Shtua your inlaws show them who the man is 
                </p>
                <a href="" className="text-pink-500 border-2 border-pink-500 rounded-full text-1xl px-2 py-1 font-bold ml-5 hover:bg-pink-500 hover:text-white"> Book Now</a>
            </div>
            <div className="overflow-hidden hover:shadow-lg bg-white mx-2 my-8  border-2 border-gray-100 w-80 rounded-xl pb-5 hover:scale-105 hover:border-0" >
                
                <img src={Weddings} alt="" 
                className="h-50 object-cover mx-auto  w-80"/>
                <h1 className="ml-5 text-2xl font-semibold text-black pt-5">Weddings</h1>
                <p className="text-gray-600 p-2 ml-5 text-sm"> Shtua your inlaws show them who the man is 
                </p>
                <a href="" className="text-pink-500 border-2 border-pink-500 rounded-full text-1xl px-2 py-1 font-bold ml-5 hover:bg-pink-500 hover:text-white"> Book Now</a>
            </div>
            <div className="overflow-hidden hover:shadow-lg bg-white mx-2 my-8  border-2 border-gray-100 w-80 rounded-xl pb-5 hover:scale-105 hover:border-0" >
                
                <img src={Ruracio} alt="" 
                className="h-50 object-cover mx-auto  w-80"/>
                <h1 className="ml-5 text-2xl font-semibold text-black pt-5">Ruracios</h1>
                <p className="text-gray-600 p-2 ml-5 text-sm"> Shtua your inlaws show them who the man is 
                </p>
                <a href="" className="text-pink-500 border-2 border-pink-500 rounded-full text-1xl px-2 py-1 font-bold ml-5 hover:bg-pink-500 hover:text-white"> Book Now</a>
            </div>
            <div className=" overflow-hidden hover:shadow-lg bg-white mx-2 my-8  border-2 border-gray-100 w-80 rounded-xl pb-5 hover:scale-105 hover:border-0" >
                
                <img src ="/1.jpeg" alt="" 
                className="h-50 object-cover mx-auto  w-80"/>
                <h1 className="ml-5 text-2xl font-semibold text-black pt-5">Birthdays</h1>
                <p className="text-gray-600 p-2 ml-5 text-sm"> Shtua your inlaws show them who the man is 
                </p>
                <a href="" className="text-pink-500 border-2 border-pink-500 rounded-full text-1xl px-2 py-1 font-bold ml-5 hover:bg-pink-500 hover:text-white"> Book Now</a>
            </div>
        </div>
        </div>

        <section className=" py-12 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-pink-600">
        Event Gallery
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium border transition 
              ${
                selectedCategory === cat
                  ? "bg-pink-600 text-white border-pink-600"
                  : "bg-white text-pink-600 border-pink-600 hover:bg-pink-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-md"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/45 bg-opacity-40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* newsletter */}
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 pb-5 bg-white  shadow-xl">
    
  
            <div className="flex-1 p-8 ">
            <div className="text-center">
            <div className="text-5xl font-extrabold text-pink-600 tracking-tight text-center pb-5">
                Jurn<span className="text-yellow-500">Events</span>
                </div>
                <h1 className="text-4xl font-extrabold text-pink-600 pt-5 border-t">Join Our Newsletter</h1>
                <p className="mt-2 text-gray-600">Get the latest updates and offers straight to your inbox.</p>
            </div>
            <form id="newsletter-form" className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                <div className="mb-4">
                    <label  className="sr-only">Full Name</label>
                    <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400
                            focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    />
                </div>
                <div>
                    <label  className="sr-only">Email address</label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400
                            focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    />
                </div>
                </div>
                <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium
                        rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2
                        focus:ring-offset-2 focus:ring-pink-500 transition"
                >
                    Subscribe
                </button>
                </div>
            </form>
            <div id="successMessage" className="hidden text-center text-green-600 mt-4">
                Thank you for subscribing!
            </div>
            </div>

            <section id="contact" className="flex-1 bg-white rounded-xl p-8">
            <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Get in Touch</h2>
            <div className="space-y-4">
                <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 9V7a5 5 0 00-10 0v2M5 9h14v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9z" />
                </svg>
                <p className="text-gray-700">
                    123 Event Avenue<br />
                    Nairobi, Kenya
                </p>
                </div>
                <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 12h2a2 2 0 012 2v6a2 2 0 01-2 2h-2M8 12H6a2 2 0 00-2 2v6a2 2 0 002 2h2m8-14V6a4 4 0 00-8 0v2h8z" />
                </svg>
                <a href="mailto:info@jurnevents.com" className="text-pink-600 hover:underline">info@jurnevents.com</a>
                </div>
                <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5h2l3.6 7.59a1 1 0 00.9.41h7.02a1 1 0 00.92-.61l3.38-7.09M16 21a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <a href="tel:+254712345678" className="text-pink-600 hover:underline">+254 712 345 678</a>
                </div>
            </div>
            <div className="mt-6">
            <iframe className = "w-150 h=150 shadow-2xl rounded-2xl referrerpolicy="
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9221470790144!2d36.94046947487992!3d-1.3974949985893008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d0078fdcce7%3A0xdde3324ee69cae62!2sMlolongo%20gossip!5e1!3m2!1sen!2ske!4v1747402783315!5m2!1sen!2ske">
            
            </iframe>

            </div>
            </section>
        </div>
        {/* footer */}
         <footer className="mt-12 text-center text-gray-500 text-xs bg-white">
            <p>&copy; 2025 JurnEvents KE. Built by KV @+254706384510.</p>
        </footer>



    </>
  )
}

export default App
