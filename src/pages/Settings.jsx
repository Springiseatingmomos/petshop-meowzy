import React, { useState } from 'react';

const Settings = ({ user }) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [notifications, setNotifications] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Add actual save logic (API call)
    alert('Settings saved successfully!');
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-700 mb-4">Please log in to access settings.</p>
          <a href="/login" className="btn btn-primary">Go to Login</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-50 py-10 px-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Account Settings</h2>

        <form onSubmit={handleSave} className="space-y-5">
          {/* Name */}
          <div>
            <label className="label" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label" htmlFor="password">New Password</label>
            <input
              id="password"
              type="password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Leave blank to keep current password"
            />
          </div>

          {/* Notifications toggle */}
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Email Notifications</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-8">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;