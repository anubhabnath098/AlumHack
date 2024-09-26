"use client"
import Navbar from '@/components/navbar/navbar'
import React, { useState } from 'react';
import AddImage from '@/components/AddImage/AddImage';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EditIcon from '@mui/icons-material/Edit';
import EditImageForm from '@/components/EditImage/EditImage';
import Footer from '@/components/footer/Footer';

// Simulating current logged-in user
const currentUser = 'current_user';

// Sample hardcoded data
const initialImages = [
  {
    url: 'coffee2.webp',
    title: 'Cappuccino Morning',
    username: 'john_doe',
    description: 'A fresh cappuccino to start the day!',
    date: '2024-09-22'
  },
  {
    url: 'coffee4.avif',
    title: 'Afternoon Delight',
    username: 'jane_smith',
    description: 'Enjoying some coffee and pastries.',
    date: '2024-09-21'
  },
  {
    url: 'cola.avif',
    title: 'Café Vibes',
    username: 'current_user', // Simulating an image uploaded by the logged-in user
    description: 'Cozy and relaxing atmosphere at our favorite spot.',
    date: '2024-09-20'
  },
  {
    url: 'mojito1.avif',
    title: 'Great taste',
    username: 'xyz123', // Simulating an image uploaded by the logged-in user
    description: 'Cozy and relaxing atmosphere at our favorite spot.',
    date: '2024-09-20'
  },

];

const Page = () => {
  const [images, setImages] = useState(initialImages);
  const [showAddImageForm, setShowAddImageForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editingImage, setEditingImage] = useState(null);

  const recentlyAddedImages = [...images].sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleImageClick = (image:any) => {
    setSelectedImage(image);
  };

  const closeDetails = () => {
    setSelectedImage(null);
  };

  const handleImageAdd = (newImage:any) => {
    setImages([newImage, ...images]);
    setShowAddImageForm(false);
  };
  const handleCancelAdd = () => {
    setShowAddImageForm(false);
  };

  const handleEditImage = (image: any, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the event from bubbling up to the image click handler
    setEditingImage(image);
    setSelectedImage(null); // Close details modal while editing
    window.scrollTo(0, 0);
};

  const handleImageEditSubmit = (updatedImage:any) => {
    setImages(images.map(img => img === editingImage ? updatedImage : img));
    setEditingImage(null);
  };
  const handleCancelEdit = () => {
    setEditingImage(null);
  };

  return (
    <>
    <div className="min-h-screen bg-yellow-100 sticky">
      <Navbar />

      {/* Sticky header with Add Image button */}
      <div className="relative top-[50px] bg-yellow-100 py-4 px-6 flex justify-between items-center z-10">
        <h1 className="text-2xl text-red-950 font-bold">Cafeteria Gallery</h1>
        <button
          className="bg-red-950 text-yellow-100 px-4 py-2 rounded flex items-center space-x-2"
          onClick={() => setShowAddImageForm(!showAddImageForm)}
        >
          <AddPhotoAlternateIcon />
          <span>Add Image</span>
        </button>
      </div>

      {/* Add Image Form */}
      {showAddImageForm && (
        <div className="px-6 py-4">
          <AddImage onImageAdd={handleImageAdd}  onCancel={handleCancelAdd} />
        </div>
      )}

      {/* Edit Image Form */}
      {editingImage && (
        <div className="px-6 py-4">
          <EditImageForm image={editingImage} onSubmit={handleImageEditSubmit} onCancel={handleCancelEdit} />
        </div>
      )}

      <div className="px-6 py-4">
        {/* Recently Added Section */}
        <section>
          <h2 className="text-xl text-green-950 font-semibold mb-4">Recently Added</h2>
          <div className="grid grid-cols-4 gap-4" style={{ height: '300px' }}>
            {recentlyAddedImages.slice(0, 4).map((image, idx) => (
              <div
                key={idx}
                className="cursor-pointer overflow-hidden rounded-lg"
                onClick={() => handleImageClick(image)}
              >
                <img src={image.url} alt={image.title} className="w-full h-[70%] object-cover hover:scale-105 transition-transform" />
                <p className="text-center text-red-950 font-semibold mt-2">{image.title}</p>
                {image.username === currentUser && (
                  <button
                    className="text-white mt-2 flex items-center space-x-2 h-[50px] w-[50px] rounded-full bg-green-950 justify-center"
                    onClick={(e) => handleEditImage(image, e)}
                  >
                    <EditIcon />
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* All Images Section */}
        <section className="mt-8 sticky overflow-y-scroll">
          <h2 className="text-xl text-green-950 font-semibold mb-4">All Images</h2>
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, idx) => (
              <div
                key={idx}
                className="cursor-pointer overflow-hidden rounded-lg"
                onClick={() => handleImageClick(image)}
              >
                <img src={image.url} alt={image.title} className="w-full h-[70%] object-cover hover:scale-105 transition-transform" />
                <p className="text-center text-red-950 font-semibold mt-2">{image.title}</p>
                {image.username === currentUser && (
                  <button
                    className="text-white mt-2 flex items-center space-x-2 h-[50px] w-[50px] rounded-full bg-green-950 justify-center relative z-50"
                    onClick={(e) => handleEditImage(image,e)}
                  >
                    <EditIcon />
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
              
      </div>
      {/* Image Details Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-yellow-100 p-6 rounded-lg max-w-lg w-full">
            <img src={selectedImage.url} alt={selectedImage.title} className="w-full h-64 object-cover rounded" />
            <h2 className="text-xl text-red-950 font-bold mt-4">{selectedImage.title}</h2>
            <p className="text-green-950 mt-1">By {selectedImage.username} on {new Date(selectedImage.date).toLocaleDateString()}</p>
            <p className="text-green-950 mt-2">{selectedImage.description}</p>
            <button className="mt-4 bg-red-950 text-yellow-100 px-4 py-2 rounded" onClick={closeDetails}>
              Close
            </button>
          </div>
        </div>
      )}
              
      
    </div>
    <Footer/>
    </>
  );
};

export default Page;
