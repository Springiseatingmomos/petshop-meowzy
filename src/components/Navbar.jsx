import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';
const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search form submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  // Handle logout logic
  const handleLogout = () => {
    setUser(null); // clear user state
    navigate("/"); // redirect to home
  };

  return (
    <div className="navbar shadow-sm px-4 bg-white text-black">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Meo<img className="w-8" src={logo} alt="logo" />zy
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/care-tips">Care Tips</Link>
          </li>

          {/* Shop with hover dropdown */}
          <li className="relative group">
            <a onClick={() => navigate("/shop")} className="cursor-pointer select-none">
              Shop
            </a>
            <ul className="absolute top-full left-0 z-10 hidden group-hover:block bg-base-100 rounded-box shadow p-2 w-40">
              <li>
                <Link to="/shop?category=cat">Cat</Link>
              </li>
              <li>
                <Link to="/shop?category=dog">Dog</Link>
              </li>
              <li>
                <Link to="/shop?category=fish">Fish</Link>
              </li>
              <li>
                <Link to="/shop?category=small pet">Small Pet</Link>
              </li>
              <li>
                <Link to="/shop?category=reptile">Reptile</Link>
              </li>
              <li>
                <Link to="/shop?category=bird">Bird</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/vet-appointment">Vet Appointment</Link>
          </li>
        </ul>
      </div>

      {/* Right side: search + profile */}
      <div className="flex gap-2 items-center">
        {/* Search form */}
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered border-black w-24 md:w-auto bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Link to="/cart" className="btn btn-ghost btn-circle text-black">
  <ShoppingCartIcon className="w-6 h-6" />
</Link>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full overflow-hidden">
              <img
                alt="User Avatar"
                src={
                  user?.avatar ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              {user ? (
                <button onClick={handleLogout} className="w-full text-left">
                  Logout
                </button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
