import React, { useState } from 'react';

const AddImage = ({ onImageAdd, onCancel }: any) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const newImage = {
      url: imagePreview,
      title,
      description,
      username: 'current_user', // Simulating logged-in user
      date: new Date().toISOString().split('T')[0],
    };
    onImageAdd(newImage);
    setTitle('');
    setDescription('');
    setFile(null);
    setImagePreview(null);
  };

  return (
    <div className="bg-yellow-100 p-6 rounded-lg relative top-[20px] z-0">
      <h2 className="text-xl text-red-950 font-bold mb-4">Add New Image</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-green-950 font-semibold mb-2">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="p-2 border border-green-950 rounded bg-yellow-50"
          />
        </div>
        {imagePreview && (
          <div className="flex flex-col">
            <img src={imagePreview} alt="Preview" className="mt-2 rounded border border-gray-300 max-w-[300px] max-h-[200px] object-contain" />
          </div>
        )}
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
