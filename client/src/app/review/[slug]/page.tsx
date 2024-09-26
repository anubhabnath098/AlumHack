"use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';

const ReviewsPage = () => {
  const router = useRouter();
  const {slug} = useParams();
  const username = localStorage.getItem('username');
  const goBack=()=>{
    router.back();
}

  // Hardcoded reviews data for now
  const [reviews, setReviews] = useState([
    {
      username: 'john_doe',
      title: 'Great Taste!',
      description: 'The burger was juicy and full of flavor. Totally recommend it!',
      stars: 5,
      date: '2024-09-20',
    },
  ]);

  useEffect(()=>{
    const getReviews = async()=>{
      try{
      const response = await axios.get(`http://localhost:5000/api/reviews/${slug}`)
      if(response.data.review){
        setReviews(response.data.review);
      }else{
        console.log("error fetching data");
      }

      }
      catch(err){
        console.log(err);
      }

    }
    getReviews();
  },[reviews]);

  // State for new review
  const [newReview, setNewReview] = useState({
    foodId:slug,
    username:username,
    title: '',
    description: '',
    stars: 0,
  });

  // Show or hide the review form
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    try{
      const response = await axios.post(`http://localhost:5000/api/reviews/${slug}`,{
        newReview
      })
      if(response.data.review){
        setReviews([...reviews, response.data.review]);
      }
        
    }
    catch(err){
      console.log(err);
    }

  }

  return (
    <div className="min-h-screen bg-yellow-100 py-10 px-6">
                        
      <div className="max-w-3xl mx-auto">
      
        {/* Add Review Button */}
        <div className="flex justify-between mb-6">
        <div className="h-[50px] w-[50px] rounded-full border-2 flex justify-center items-center self-start border-gray-500 cursor-pointer" onClick={goBack}><ArrowBackIcon/></div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-red-950 text-yellow-100 px-4 py-2 rounded hover:bg-red-900 transition duration-200"
          >
            Add Review
          </button>
        </div>

        {/* List of Reviews */}
        <div className="space-y-6 mb-10">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl text-red-950 font-bold">{review.title}</h2>
                <p className="text-green-950 text-sm">{review.date}</p>
              </div>
              <p className="text-green-950 mt-2 mb-4">{review.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-950 text-bold text-[15px]">Reviewed by: {review.username}</span>
                <div className="">
                        {Array(Math.min(5,Math.floor(review.stars))).fill(null).map((_, index) => (
                            <StarIcon key={index} />
                        ))}
                        {Array(5-Math.min(5,Math.floor(review.stars))).fill(null).map((_, index) => (
                            <StarBorderIcon key={index} />
                        ))}

                    </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Review Form - Display as overlay when button is clicked */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-yellow-100 p-8 rounded-lg shadow-lg relative w-11/12 max-w-lg">
              <h2 className="text-2xl text-red-950 font-bold mb-4">Add Your Review</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-green-950 font-semibold mb-2">Review Title</label>
                  <input
                    type="text"
                    name="title"
                    value={newReview.title}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-green-950 rounded bg-yellow-50"
                    placeholder="Enter review title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-green-950 font-semibold mb-2">Review Description</label>
                  <textarea
                    name="description"
                    value={newReview.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-green-950 rounded bg-yellow-50"
                    placeholder="Enter review description"
                    required
                  />
                </div>
                <div>
                  <label className="block text-green-950 font-semibold mb-2">Number of Stars</label>
                  <input
                    type="number"
                    name="stars"
                    value={newReview.stars}
                    onChange={handleInputChange}
                    min="1"
                    max="5"
                    className="w-full p-2 border border-green-950 rounded bg-yellow-50"
                    placeholder="Enter number of stars (1-5)"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-green-950 text-yellow-100 px-4 py-2 rounded hover:bg-green-900 transition duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-red-950 text-yellow-100 px-4 py-2 rounded hover:bg-red-900 transition duration-200"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsPage;
