import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful!");
      // TODO: Add registration logic here (API call, Firebase, etc.)
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      setErrors({});
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card max-w-md w-full bg-base-100 shadow-xl p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
            </label>
            <input
              name="name"
              type="text"
              className={`input input-bordered w-full ${errors.name ? "input-error" : ""}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              className={`input input-bordered w-full ${errors.email ? "input-error" : ""}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              name="password"
              type="password"
              className={`input input-bordered w-full ${errors.password ? "input-error" : ""}`}
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {errors.password && <p className="text-error text-sm mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Confirm Password</span>
            </label>
            <input
              name="confirmPassword"
              type="password"
              className={`input input-bordered w-full ${errors.confirmPassword ? "input-error" : ""}`}
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {errors.confirmPassword && (
              <p className="text-error text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
