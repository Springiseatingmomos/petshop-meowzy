import React from 'react';
import { Link } from 'react-router-dom';

import birdcage from '../assets/birdcage.jpeg';
import catToy from '../assets/cat toy.jpeg';
import leash from '../assets/leash.jpeg';
import petbed from '../assets/petbed.jpeg';
import dogfood from '../assets/dogfood.jpeg';
import chew from '../assets/chew.jpeg';
import aqua from '../assets/aqua.jpeg';

const FeaturesBanner = () => {
  const images = [
    { id: 1, src: birdcage, title: "Bird Cage", price: "$45" },
    { id: 2, src: aqua, title: "Aquarium", price: "$75" },
    { id: 3, src: dogfood, title: "Pet Food", price: "$25" },
    { id: 4, src: leash, title: "Dog Leash", price: "$15" },
    { id: 5, src: petbed, title: "Pet Bed", price: "$60" },
    { id: 6, src: chew, title: "Chew Toy", price: "$10" },
    { id: 7, src: catToy, title: "Cat Toy", price: "$12" },
  ];

  return (
    <div className="carousel rounded-box p-4 mb-10">
      {images.map((img) => (
        <div className="carousel-item" key={img.id}>
          <Link to={`/product/${img.id}`} className="block text-center">
            <div className="bg-white shadow-md rounded-lg w-80 h-[370px] flex flex-col items-center justify-start p-2 transition-transform duration-300 hover:scale-105">
              <img
                src={img.src}
                alt={img.title}
                title={img.title}
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-2">
                <h3 className="text-lg font-semibold">{img.title}</h3>
                <p className="text-gray-600">{img.price}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeaturesBanner;
