import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  
    

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-black text-white p-6 shadow-2xl sticky top-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-200 transition-all duration-300 transform hover:scale-105">
            ✨ Premium Store
          </Link>
        </div>

        <div className="flex space-x-8">
          <Link 
            to="/" 
            className="relative hover:text-blue-200 transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/10 backdrop-blur-sm font-semibold group"
          >
            🏠 Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/about" 
            className="relative hover:text-purple-200 transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/10 backdrop-blur-sm font-semibold group"
          >
            ℹ️ About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/card" 
            className="relative hover:text-pink-200 transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/10 backdrop-blur-sm font-semibold group"
          >
            🛍️ Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
         

          
        </div>
      </div>
    </nav>
  )
}

export default Navbar