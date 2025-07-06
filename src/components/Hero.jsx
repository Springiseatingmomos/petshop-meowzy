import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero.jpeg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay w-128 h-80 rounded-3xl opacity-50 bg-black"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            <span className="text-[#F9BD03]">Purr</span>fection Awaits!
          </h1>
          <p className="mb-5 text-xl">
            Welcome to <span className="font-bold">Meowzy</span>, where every pet is treated like family. Whether you're a dog lover, a cat enthusiast, or anything in between, we've got the purrfect products to keep your furry friends happy and healthy. Come on in, your pet's next adventure starts here!
          </p>
          <div className="flex justify-center gap-6">
            <button
              className="btn btn-outline w-32 bg-[#26BCAA]"
              onClick={() => navigate('/login')}
            >
              Sign In
            </button>
            <button
              className="btn btn-outline w-32 bg-[#2D5A9D]"
              onClick={() => navigate('/register')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
