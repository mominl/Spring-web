import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddProduct from './AddProduct';

function Card() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/Products");
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };
    fetchData();
}, []);


    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
                <div className="w-full h-full mx-auto">
                    <div className="flex justify-end mb-6 h-12">
                        <Link
                            to="/addProduct"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            Add New Product
                        </Link>
                    </div>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Premium Products</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-bold">
                            Discover our collection of high-quality products with exceptional design and performance
                        </p>
                    </div>

                    {data.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                            <p className="text-gray-500 text-lg">Loading amazing products...</p>
                        </div>

                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 rounded-2xl display flex-wrap">
                            {data.map((product) => (
                                <div key={product.id} className="group relative bg-white border border-black shadow-lg hover:shadow-2xl transition-all duration-300 border-gray-300 rounded-2xl ">
                                    {/* Product Image Placeholder */}
    
                            
                                        <div className="bottom-8 ">
                                                <span className=" text-black px-3 py-1 font-bold text-xl">
                                                {product.brand}
                                                </span>
                                        </div>
                                        
                                    

                                    {/* Product Content */}
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            {product.name}
                                        </h2>
                                        <div className="text-gray-600 mb-4 h-12  font-bold">
                                            {product.about}
                                        </div>

                                        {/* Price and Date */}
                                        <div className="flex justify-between items-center mb-6">
                                            <div>
                                                <span className="text-3xl font-bold">
                                                    INR {product.price}
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-md text-gray-500">Released</p>
                                                <p className="text-md font-medium text-gray-700">
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