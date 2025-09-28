import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Card from './component/Card'
import About from './component/About'
import ProductDetail from './component/ProductDetail'

// Home component
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Welcome to Our Store
          </h1>
          <p className="text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Discover amazing products with exceptional quality and design
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
            <p className="text-blue-100">Lightning-fast shipping to your doorstep</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold mb-3">Premium Quality</h3>
            <p className="text-purple-100">Only the finest products make it to our store</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">💯</div>
            <h3 className="text-2xl font-bold mb-3">Best Support</h3>
            <p className="text-pink-100">24/7 customer support for all your needs</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center border border-white/20">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our collection of products fetched directly from our Spring Boot backend API
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              View Products
            </button>
            <button className="bg-white text-gray-800 border-2 border-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Learn More
            </button>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-300">1</div>
              <div className="bg-blue-300">2</div>
              <div className="bg-blue-300">3</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/card" element={<Card />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App