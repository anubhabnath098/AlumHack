"use client"
import Navbar from '@/components/navbar/navbar';
import React, { useState } from 'react';

function AdminPage() {
  const admin = true; // Assuming admin status is true for now, could be dynamic.
  
  const [dishData, setDishData] = useState({
    name: '',
    description: '',
    image: null,
    fat: '',
    protein: '',
    carbs: '',
    price: '',
    category: 'snack',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setDishData({
      ...dishData,
      [name]: value,
    });
  };

  const handleFileChange = (e:any) => {
    setDishData({
      ...dishData,
      image: e.target.files[0], // Assuming single image upload
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Logic to upload the form data (e.g., API call)
    console.log(dishData);
  };

  return (
    <>
      {admin ? (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-yellow-100">
          <Navbar />
          <div className="w-[80%] h-[90%] relative top-[30px] border-2 border-gray-400 rounded-md p-8 bg-white">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <input 
                  type="file" 
                  name="image" 
                  onChange={handleFileChange} 
                  accept="image/*" 
                  className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name of Dish
                </label>
                <input 
                  type="text" 
                  name="name" 
                  value={dishData.name} 
                  onChange={handleChange} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="Enter dish name" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea 
                  name="description" 
                  value={dishData.description} 
                  onChange={handleChange} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="Enter dish description" 
                  required 
                />
              </div>

              <div className="flex space-x-4">
                <div>
                  <label htmlFor="fat" className="block text-sm font-medium text-gray-700">
                    Fat (kcal)
                  </label>
                  <input 
                    type="number" 
                    name="fat" 
                    value={dishData.fat} 
                    onChange={handleChange} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                    placeholder="Fat content" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="protein" className="block text-sm font-medium text-gray-700">
                    Protein (g)
                  </label>
                  <input 
                    type="number" 
                    name="protein" 
                    value={dishData.protein} 
                    onChange={handleChange} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                    placeholder="Protein content" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="carbs" className="block text-sm font-medium text-gray-700">
                    Carbs (kcal)
                  </label>
                  <input 
                    type="number" 
                    name="carbs" 
                    value={dishData.carbs} 
                    onChange={handleChange} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                    placeholder="Carbohydrate content" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price (₹)
                </label>
                <input 
                  type="number" 
                  name="price" 
                  value={dishData.price} 
                  onChange={handleChange} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="Enter price" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select 
                  name="category" 
                  value={dishData.category} 
                  onChange={handleChange} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="snack">Snack</option>
                  <option value="drink">Drink</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="p-2 transition-all bg-red-950 rounded text-white hover:text-yellow-200 w-[10%]"
              >
                Submit Dish
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className='text-bold h-screen w-full flex justify-center items-center'>
          You don't have Admin Privileges
        </div>
      )}
    </>
  );
}

export default AdminPage;
