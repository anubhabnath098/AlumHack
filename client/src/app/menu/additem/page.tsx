"use client"
import Navbar from '@/components/navbar/navbar';
import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function AdminPage() {
  const admin = true; // Assuming admin status is true for now
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

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [fat, setFat] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [type, setType] = useState('snack');
  const [image, setImage] = useState(""); // Keep as null initially
  const [price, setPrice] = useState(0);
  const [availability, setAvailability] = useState('true');

  const handleFile = (e:any) => {
    //console.log(e.target.files);
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile.name.toString()); // Update image state with the selected file name
      console.log(image);
    } else {
      setImage("background.png"); // Default image if no file selected
    }
  };

  const handleClick = async (e:any) => {
    e.preventDefault();
    setDishData({
      name: name,
      availability: availability==='true',
      type: type,
      image: image,
      desc: desc,
      nutrition: { fat: fat, protein: protein, carbs: carbs },
      price: price,
      reviews: 0,
      upvote: 0,
      downvote: 0,
      stars: 5
    });
    
    try {
      const response = await axios.post("http://localhost:5000/api/menu/add", { dishData });
      console.log(response.data);
      if(response.data.status===true){
        router.push("/menu");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {admin ? (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-yellow-100">
          <Navbar />
          <div className="w-[80%] h-[90%] relative top-[30px] border-2 border-gray-400 rounded-md p-8 bg-white">
            <form className="flex flex-col space-y-4">
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <input 
                  type="file" 
                  name="image" 
                  onChange={handleFile} // Correctly call the handler here
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
                  onChange={e => setName(e.target.value)} 
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
                  onChange={e => setDesc(e.target.value)} 
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
                    onChange={e => setFat(parseInt(e.target.value))} 
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
                    onChange={e => setProtein(parseInt(e.target.value))} 
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
                    onChange={e => setCarbs(parseInt(e.target.value))} 
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
                  onChange={e => setPrice(parseInt(e.target.value))} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="Enter price" 
                  required 
                />
              </div>

              <div className='flex gap-4'>
                <div><label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select 
                  name="category" 
                  onChange={e => setType(e.target.value)} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="snack">Snack</option>
                  <option value="drink">Drink</option>
                </select></div>
                <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select 
                  name="category" 
                  onChange={e => setAvailability(e.target.value)} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="p-2 transition-all bg-red-950 rounded text-white hover:text-yellow-200 w-[10%]" 
                onClick={handleClick}
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
