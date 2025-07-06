import React from 'react';
import Hero from '../components/Hero';
import FeaturesBanner from '../components/FeaturesBanner';
import hamsterImg from '../assets/hamster.png';
import catImg from '../assets/cat.png';
import dogImg from '../assets/dog.png';
import rabbitImg from '../assets/rabbit.png';
import parrotImg from '../assets/parrot.png';
import shobImg from '../assets/shob.png';


const Home = () => {
    return (
        <div data-theme="light">
            <Hero />
            <h1 className='text-3xl bg-white text-black py-5 font-bold text-center'>Featured Products</h1>
            <FeaturesBanner />
            <section className="relative py-16 bg-gradient-to-r from-pink-100 to-blue-100">
  <div className="container mx-auto px-6 lg:px-20">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2">
        <div className="grid grid-cols-3 gap-3">
          <div className="relative rounded-xl bg-[#2D5A9D] h-28 shadow-xl overflow-visible">
            <img src={hamsterImg} alt="Hamster" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32" />
          </div>
          <div className="relative rounded-xl bg-[#F9BD03] h-28 shadow-xl overflow-visible">
            <img src={catImg} alt="Cat" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40" />
          </div>
          <div className="relative rounded-xl bg-[#2D5A9D] shadow-xl row-span-2 overflow-visible">
            <img src={dogImg} alt="Dog" className="absolute bottom-0 right-0 h-50 rounded-xl" />
          </div>
          <div className="relative rounded-xl bg-[#F9BD03] h-28 shadow-xl col-span-2 overflow-visible">
            <img src={rabbitImg} alt="Rabbit" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32" />
          </div>
          <div className="relative rounded-xl bg-[#2D5A9D] h-28 shadow-xl overflow-visible">
            <img src={parrotImg} alt="Parrot" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 rounded-xl" />
          </div>
          <div className="relative rounded-xl bg-[#26BCAA] h-28 shadow-xl col-span-2 overflow-visible">
            <div className="pt-6">
              <img src={shobImg} alt="All Pets" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-46 rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
        <h2 className="text-5xl font-extrabold text-[#2D5A9D]">Who We Are?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="font-bold text-[#2D5A9D]">Meowzy</span>, we bring joy to pets and their owners! Whether you're looking for the best pet products, adorable companions, or expert pet care tips—we've got you covered.
        </p>
        <p className="text-gray-600">
          Our team is passionate about making tails wag and purrs louder! 🐾
        </p>

        <div className="mt-6 flex justify-center lg:justify-start space-x-4">
          <button className="btn btn-primary border-none bg-[#2D5A9D] btn-lg shadow-lg hover:scale-105 transition">
            Join the Family
          </button>
          <button className="btn btn-outline btn-lg btn-accent hover:scale-105 transition">
            Our Story
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
        {/* testimonial */}
        <section className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-[#2D5A9D] mb-16">
      What Our Happy Customers Say
    </h2>

    <div className="grid md:grid-cols-3 gap-12">
      {/* Testimonial 1 */}
      <div className="relative bg-[#F9BD03] rounded-2xl shadow-2xl p-8 text-black">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
            alt="Customer 1"
          />
        </div>
        <div className="mt-12 text-center">
          <svg
            className="w-8 h-8 mx-auto text-[#2D5A9D]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.5 21h-4C2.67 21 2 20.33 2 19.5v-4C2 14.67 2.67 14 3.5 14H5v-1c0-1.38.56-2.63 1.46-3.54C7.37 8.56 8.62 8 10 8h.5c.28 0 .5.22.5.5V10c0 .28-.22.5-.5.5H10c-.83 0-1.5.67-1.5 1.5V14H13v5c0 .55-.45 1-1 1h-4.5zM20.5 21h-4c-.55 0-1-.45-1-1v-4.5h1.5V12c0-.83-.67-1.5-1.5-1.5h-.5c-.28 0-.5-.22-.5-.5V8.5c0-.28.22-.5.5-.5H17c1.38 0 2.63.56 3.54 1.46.9.91 1.46 2.16 1.46 3.54v1h1.5c.83 0 1.5.67 1.5 1.5v4C23 20.33 22.33 21 21.5 21z" />
          </svg>
          <p className="mt-4 text-sm">
            “Amazing products and fast delivery. My dog loves the new toy and
            the treats are his favorite!”
          </p>
          <h3 className="mt-6 font-bold text-[#2D5A9D]">Anika Rahman</h3>
          <p className="text-sm">Dhaka, BD</p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="relative bg-[#2D5A9D] rounded-2xl shadow-2xl p-8 text-white">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img
            src="https://randomuser.me/api/portraits/men/65.jpg"
            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
            alt="Customer 2"
          />
        </div>
        <div className="mt-12 text-center">
          <svg
            className="w-8 h-8 mx-auto text-[#F9BD03]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.5 21h-4C2.67 21 2 20.33 2 19.5v-4C2 14.67 2.67 14 3.5 14H5v-1c0-1.38.56-2.63 1.46-3.54C7.37 8.56 8.62 8 10 8h.5c.28 0 .5.22.5.5V10c0 .28-.22.5-.5.5H10c-.83 0-1.5.67-1.5 1.5V14H13v5c0 .55-.45 1-1 1h-4.5zM20.5 21h-4c-.55 0-1-.45-1-1v-4.5h1.5V12c0-.83-.67-1.5-1.5-1.5h-.5c-.28 0-.5-.22-.5-.5V8.5c0-.28.22-.5.5-.5H17c1.38 0 2.63.56 3.54 1.46.9.91 1.46 2.16 1.46 3.54v1h1.5c.83 0 1.5.67 1.5 1.5v4C23 20.33 22.33 21 21.5 21z" />
          </svg>
          <p className="mt-4 text-sm">
            “The bird cage was strong and stylish. Very satisfied with both the
            quality and packaging!”
          </p>
          <h3 className="mt-6 font-bold text-white">Mohammad Hasan</h3>
          <p className="text-sm text-gray-300">Chattogram, BD</p>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="relative bg-[#26BCAA] rounded-2xl shadow-2xl p-8 text-white">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img
            src="https://randomuser.me/api/portraits/women/75.jpg"
            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
            alt="Customer 3"
          />
        </div>
        <div className="mt-12 text-center">
          <svg
            className="w-8 h-8 mx-auto text-[#F9BD03]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.5 21h-4C2.67 21 2 20.33 2 19.5v-4C2 14.67 2.67 14 3.5 14H5v-1c0-1.38.56-2.63 1.46-3.54C7.37 8.56 8.62 8 10 8h.5c.28 0 .5.22.5.5V10c0 .28-.22.5-.5.5H10c-.83 0-1.5.67-1.5 1.5V14H13v5c0 .55-.45 1-1 1h-4.5zM20.5 21h-4c-.55 0-1-.45-1-1v-4.5h1.5V12c0-.83-.67-1.5-1.5-1.5h-.5c-.28 0-.5-.22-.5-.5V8.5c0-.28.22-.5.5-.5H17c1.38 0 2.63.56 3.54 1.46.9.91 1.46 2.16 1.46 3.54v1h1.5c.83 0 1.5.67 1.5 1.5v4C23 20.33 22.33 21 21.5 21z" />
          </svg>
          <p className="mt-4 text-sm">
            “Great customer service! I’ll definitely come back for more
            aquarium decorations!”
          </p>
          <h3 className="mt-6 font-bold text-white">Nusrat Jahan</h3>
          <p className="text-sm text-gray-200">Sylhet, BD</p>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
        
    );
};

export default Home;