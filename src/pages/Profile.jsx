import React from 'react';

const Profile = ({ user }) => {
  if (!user) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-700 mb-4">Please log in to view your profile.</p>
          <a
            href="/login"
            className="btn btn-primary text-white px-6"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <div className="flex justify-center">
          <img
            src={
              user.avatar ||
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
            alt="User Avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow"
          />
        </div>

        <h2 className="text-2xl font-bold mt-4">{user.name || "Anonymous User"}</h2>
        <p className="text-gray-600">{user.email || "No email provided"}</p>

        {/* Extra details */}
        <div className="mt-6 space-y-2 text-sm text-gray-500">
          <p>Member since: {user.createdAt || "January 2024"}</p>
          <p>Role: {user.role || "User"}</p>
        </div>

        <div className="mt-6">
          <button className="btn btn-outline btn-primary w-full">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
