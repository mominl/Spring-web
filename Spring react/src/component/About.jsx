import React from 'react'



function About() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            About Our Story
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional experiences through innovative technology and passionate design
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-6">🎯</div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-emerald-100 text-lg leading-relaxed">
              To revolutionize the way people discover and experience premium products by bridging 
              cutting-edge technology with exceptional user experiences.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-teal-100 text-lg leading-relaxed">
              Building a future where technology seamlessly connects people with products they love, 
              creating meaningful and lasting relationships.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Makes Us Special
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-500 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Built with modern React and Spring Boot for optimal performance and user experience.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-teal-400 to-cyan-500 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                🎨
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Beautiful Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Crafted with attention to detail using Tailwind CSS for stunning visual appeal.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                🔒
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade security with robust backend architecture you can trust.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Passionate developers and designers working together to create amazing experiences
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                👨‍💻
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Full Stack Developer</h3>
              <p className="text-gray-600">React & Spring Boot Expert</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                🎨
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">UI/UX Designer</h3>
              <p className="text-gray-600">Creative Design Specialist</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Product Manager</h3>
              <p className="text-gray-600">Strategy & Innovation Lead</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
      <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center my-12">
            About Us
        </div>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 text-lg leading-relaxed">
                Welcome to our application! We are dedicated to providing you with the best experience possible. Our team is passionate about building high-quality software that meets your needs.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
                If you have any questions or feedback, please don't hesitate to contact us. We're here to help!
            </p>
        </div>
   
  </>

  )}

export default About
