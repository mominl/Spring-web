import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Card() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {   
        fetch("http://localhost:8080/api/Products")
            .then(response => response.json())
            .then((json) => {
                setData(json)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data:", error)
                setLoading(false)
            });
    }, []);
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
                <div className="max-w-5md mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Premium Products</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover our collection of high-quality products with exceptional design and performance
                        </p>
                    </div>

                    {data.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                            <p className="text-gray-500 text-lg">Loading amazing products...</p>
                        </div>

                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-19">
                            {data.map((product) => (
                                <div key={product.id} className="group relative bg-whiten border border-gray-100">
                                    {/* Product Image Placeholder */}
                                    <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-white bg-opacity-90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                                {product.about}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {product.brand}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Product Content */}
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            {product.name}
                                        </h2>
                                        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                                            {product.description}
                                        </p>

                                        {/* Price and Date */}
                                        <div className="flex justify-between items-center mb-6">
                                            <div>
                                                <span className="text-3xl font-bold text-emerald-600">
                                                    ${product.price}
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-gray-500">Released</p>
                                                <p className="text-sm font-medium text-gray-700">
                                                    {new Date(product.releaseDate).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <Link 
                                                to={`/product/${product.id}`} 
                                                className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-center"
                                            >
                                                View Details
                                            </Link>
                                            <button className="px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                    </div>

                                </div>


                            ))}
                        </div>
                    )}
                </div>
            </div>
            {/* <button onClick={handleAddProduct} className=" justify-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Add product
            </button> */}
        </>
    )

}



export default Card