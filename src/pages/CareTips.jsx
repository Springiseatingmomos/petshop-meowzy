import React from 'react';
import { useNavigate } from 'react-router-dom';

const tips = [
  {
    id: 1,
    title: "Regular Vet Checkups",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=600&q=80",
    description: "Schedule regular veterinary visits to keep your pet healthy.",
  },
  {
    id: 2,
    title: "Balanced Diet",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    description: "Feed your pet a balanced and nutritious diet suited for their age and breed.",
  },
  {
    id: 3,
    title: "Daily Exercise",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80",
    description: "Keep your pet active with daily exercise to maintain good health.",
  },
  {
    id: 4,
    title: "Hydration",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=600&q=80",
    description: "Provide fresh water at all times to keep your pet hydrated.",
  },
  {
    id: 5,
    title: "Grooming",
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=600&q=80",
    description: "Regular grooming keeps your pet clean and healthy.",
  },
  {
    id: 6,
    title: "Dental Care",
    image: "https://images.unsplash.com/photo-1558784207-1c2f2cd1d46a?auto=format&fit=crop&w=600&q=80",
    description: "Maintain your pet’s dental hygiene with regular brushing.",
  },
  {
    id: 7,
    title: "Parasite Prevention",
    image: "https://images.unsplash.com/photo-1508214751196-8d696d3d5d3f?auto=format&fit=crop&w=600&q=80",
    description: "Use flea and tick preventatives to protect your pet.",
  },
  {
    id: 8,
    title: "Safe Environment",
    image: "https://images.unsplash.com/photo-1508214751196-5e1436605bc4?auto=format&fit=crop&w=600&q=80",
    description: "Create a safe living space free from hazards.",
  },
  {
    id: 9,
    title: "Mental Stimulation",
    image: "https://images.unsplash.com/photo-1517423440428-2b77daed29b4?auto=format&fit=crop&w=600&q=80",
    description: "Engage your pet with toys and activities to keep their mind sharp.",
  },
  {
    id: 10,
    title: "Love & Attention",
    image: "https://images.unsplash.com/photo-1508214751196-9fbb58d03a19?auto=format&fit=crop&w=600&q=80",
    description: "Show your pet love and affection every day.",
  },
];

const CareTips = () => {
  const navigate = useNavigate();

  return (
    <div className=" mx-auto p-6 space-y-8 bg-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#2D5A9D]">Pet Care Tips</h1>
      
      {tips.map((tip) => (
        <div
          key={tip.id}
          className="card bg-base-100 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
          style={{ minHeight: '180px' }}
        >
          <img
            src={tip.image}
            alt={tip.title}
            className="w-full md:w-64 h-48 object-cover"
          />
          <div className="card-body p-6 flex flex-col justify-center">
            <h2 className="card-title text-2xl">{tip.title}</h2>
            <p className="mt-4 text-gray-700 text-lg">{tip.description}</p>
          </div>
        </div>
      ))}

      <div className="mt-12 text-center">
        <p className="text-xl mb-4">
          Want to appoint a vet? We are here to help!
        </p>
        <button
          onClick={() => navigate('/vet-appointment')}
          className="btn btn-primary px-10 py-3 text-lg"
        >
          Book a Vet Appointment
        </button>
      </div>
    </div>
  );
};

export default CareTips;
