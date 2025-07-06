import React, { useState } from 'react';

const VetAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    petName: '',
    species: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment submitted:", formData);
    alert("Appointment submitted successfully!");
    // Reset form
    setFormData({
      name: '',
      petName: '',
      species: '',
      date: '',
      time: '',
      reason: ''
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">Vet Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-base-100 p-6 rounded-box shadow-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered w-full"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="petName"
          placeholder="Pet's Name"
          className="input input-bordered w-full"
          value={formData.petName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="species"
          placeholder="Species (e.g., Dog, Cat)"
          className="input input-bordered w-full"
          value={formData.species}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          className="input input-bordered w-full"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          className="input input-bordered w-full"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <textarea
          name="reason"
          placeholder="Reason for Visit"
          className="textarea textarea-bordered w-full"
          value={formData.reason}
          onChange={handleChange}
          required
        ></textarea>
        <button className="btn btn-primary w-full">Book Appointment</button>
      </form>
    </div>
  );
};

export default VetAppointment;
