import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.password) tempErrors.password = "Password is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login Successful!");
      // TODO: Add login logic here (API call, Firebase, etc.)
      setFormData({ email: "", password: "" });
      setErrors({});
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card max-w-md w-full bg-base-100 shadow-xl p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
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
              autoComplete="username"
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
              autoComplete="current-password"
            />
            {errors.password && <p className="text-error text-sm mt-1">{errors.password}</p>}
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
