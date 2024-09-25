import React, { useState } from 'react';

const AddImage = ({ onImageAdd, onCancel }:any) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const newImage = {
      url,
      title,
      description,
      username: 'current_user', // Simulating logged-in user
      date: new Date().toISOString().split('T')[0],
    };
    onImageAdd(newImage);
    setTitle('');
    setDescription('');
    setUrl('');
  };

  return (
    <div className="bg-yellow-100 p-6 rounded-lg top-[10px] z-0">
      <h2 className="text-xl text-red-950 font-bold mb-4">Add New Image</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-green-950 font-semibold mb-2">Image URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="p-2 border border-green-950 rounded bg-yellow-50"
            placeholder="Enter image URL"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-green-950 font-semibold mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border border-green-950 rounded bg-yellow-50"
            placeholder="Enter image title"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-green-950 font-semibold mb-2">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border border-green-950 rounded bg-yellow-50"
            placeholder="Enter a short description"
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-red-950 text-yellow-100 px-4 py-2 rounded"
          >
            Add Image
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-yellow-100 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddImage;
