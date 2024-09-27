"use client";
import Navbar from '@/components/navbar/navbar';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

function EditItemPage() {
  const admin = true; // Assuming admin status is true for now
  const { slug } = useParams(); // Retrieve the dish ID from the URL
  const [dishData, setDishData] = useState({
    name: '',
    availability: true,
    type: 'snack',
    image: "background.png",
    desc: '',
    nutrition: { fat: 0, protein: 0, carbs: 0 },
    price: 0,
    reviews: 0,
    upvote: 0,
    downvote: 0,
    stars: 5
  });

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(""); // State for the image file

  // Fetch the existing dish data by ID
  useEffect(() => {
    const fetchDish = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/menu/${slug}`);
        console.log(response.data);
        setDishData(response.data.data);
        setImage(response.data.data.image); // Set the existing image
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDish();
  }, [slug]);

  // Handle file input change
  const handleFile = (e: any) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile.name); // Update image state with selected file name
    }
  };

  // Handle form submission for editing
  const handleUpdate = async (e: any) => {
    e.preventDefault();
    try {
      const updatedData = {
        ...dishData,
        image: image // Update image data
      };
      console.log(updatedData);
      const response = await axios.put(`http://localhost:5000/api/menu/${slug}`, updatedData);
      console.log(response.data);
      if (response.data.status === true) {
        alert("Dish updated successfully!");
        router.push("/menu");
      }
    } catch (err) {
      console.log(err);
      alert("Error updating the dish.");
    }
  };

  return (
    <>
      {admin ? (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-yellow-100">
          <Navbar />
          <div className="w-[80%] h-[90%] relative top-[30px] border-2 border-gray-400 rounded-md p-8 bg-white">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <form className="flex flex-col space-y-4" onSubmit={handleUpdate}>
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                    Upload Image
                  </label>
                  <input 
                    type="file" 
                    name="image" 
                    onChange={handleFile} 
                    accept="image/*" 
                    className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none" 
                  />
                  <p className="mt-2 text-gray-500 text-sm">{image}</p> {/* Show the selected image file name */}
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name of Dish
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    value={dishData.name} 
                    onChange={e => setDishData({ ...dishData, name: e.target.value })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea 
                    name="description" 
                    value={dishData.desc} 
                    onChange={e => setDishData({ ...dishData, desc: e.target.value })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
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
                      value={dishData.nutrition?.fat} 
                      onChange={e => setDishData({ 
                        ...dishData, 
                        nutrition: { ...dishData.nutrition, fat: parseInt(e.target.value) } 
                      })} 
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
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
                      value={dishData.nutrition?.protein} 
                      onChange={e => setDishData({ 
                        ...dishData, 
                        nutrition: { ...dishData.nutrition, protein: parseInt(e.target.value) } 
                      })} 
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
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
                      value={dishData.nutrition?.carbs} 
                      onChange={e => setDishData({ 
                        ...dishData, 
                        nutrition: { ...dishData.nutrition, carbs: parseInt(e.target.value) } 
                      })} 
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
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
                    onChange={e => setDishData({ ...dishData, price: parseInt(e.target.value) })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                    required 
                  />
                </div>

                <div className='flex gap-4'>
                  <div><label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select 
                    name="category" 
                    value={dishData.type} 
                    onChange={e => setDishData({ ...dishData, type: e.target.value })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="snack">Snack</option>
                    <option value="drink">Drink</option>
                  </select></div>
                  <div><label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select 
                    name="category" 
                    value={dishData.availability.toString()} 
                    onChange={e => setDishData({ ...dishData, availability: e.target.value==='true' })} 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select></div>
                </div>

                <button 
                  type="submit" 
                  className="p-2 transition-all bg-green-950 rounded text-white hover:text-yellow-200 w-[10%]" 
                >
                  Update Dish
                </button>
              </form>
            )}
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

export default EditItemPage;
