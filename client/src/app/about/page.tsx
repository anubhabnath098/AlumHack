import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

function page() {
  return (
    <>
    <div>
      <Navbar/>

      <div className="min-h-screen bg-yellow-100 flex flex-col items-center py-10 relative top-[50px]">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl text-red-950 font-bold mb-6">
          Welcome to the IIIT Allahabad Cafeteria!
        </h1>
        <p className="text-green-950 text-lg mb-8 leading-7">
          At the Indian Institute of Information Technology, Allahabad, our cafeteria is more than just a place to eat. 
          It's a hub of relaxation, socializing, and re-energizing. Whether you're grabbing a quick snack between classes, 
          sharing a meal with friends, or just looking for a place to unwind, our cafeteria offers a welcoming environment 
          for all students, faculty, and visitors.
        </p>

        <img 
          src="/bg.jpg" 
          alt="IIIT Allahabad Cafeteria" 
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
        />

        <div className="text-left text-lg">
          <h2 className="text-3xl text-red-950 font-bold mb-4">
            Our Story
          </h2>
          <p className="text-green-950 mb-6">
            Established alongside the institution in 1999, the cafeteria has grown to become a central part of campus life. 
            With its modern design, hygienic standards, and diverse menu, the IIIT Allahabad Cafeteria reflects the vibrant, 
            innovative, and inclusive spirit of the college. 
          </p>
          <h2 className="text-3xl text-red-950 font-bold mb-4">
            What We Offer
          </h2>
          <ul className="list-disc pl-8 mb-6 text-green-950">
            <li>Fresh and healthy food options for every meal of the day</li>
            <li>Affordable pricing to fit every student's budget</li>
            <li>A diverse menu that caters to all dietary preferences, including vegetarian, vegan, and gluten-free options</li>
            <li>Cozy seating areas perfect for group studies, individual work, or just catching up with friends</li>
            <li>Fast service to ensure you never miss a class or event</li>
          </ul>
          <h2 className="text-3xl text-red-950 font-bold mb-4">
            Our Vision
          </h2>
          <p className="text-green-950 mb-6">
            Our mission is to provide the IIIT Allahabad community with delicious and nutritious meals that fuel both minds and bodies. 
            We believe that a great meal can inspire creativity, enhance academic performance, and foster connections among students. 
            That's why we prioritize quality, variety, and excellent service in everything we do.
          </p>

          <div className="bg-red-950 text-yellow-100 px-6 py-4 rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              Location: IIIT Allahabad Main Campus, Jhalwa, Prayagraj, Uttar Pradesh
            </p>
            <p>
              Opening Hours: 8 AM - 10 PM (Mon-Sun)
            </p>
            <p>
              Email: <a href="mailto:cafeteria@iiita.ac.in" className="underline">cafeteria@iiita.ac.in</a>
            </p>
            <p>
              Phone: +91 12345 67890
            </p>
          </div>
        </div>
      </div>
    </div>
        
    </div>
    <Footer/>
    </>
  
  )
}

export default page
