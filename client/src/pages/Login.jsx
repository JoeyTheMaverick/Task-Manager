import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', form);
      localStorage.setItem('jwt-token', res.data.token);
      window.location = '/dashboard'; // or use useNavigate from react-router
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage: "url('/images/BG.jpg')" }}>
      <div className="flex w-full max-w-5xl h-[600px] bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-[#F76C6C] flex flex-col justify-between p-10">
          <div>
            <div className="flex items-center mb-8">
              <img src="/images/storeit-logo.png" alt="Logo" className="w-12 h-12 mr-3" />
              <span className="text-white text-2xl font-bold">ZenTask</span>
            </div>
            <h2 className="text-white text-3xl font-extrabold mb-2 leading-tight">
              Find Your Focus
            </h2>
            <p className="text-white mb-8">Mindful productivity for the modern world</p>
          </div>
          <img
            src="/images/TMLogo.png"
            alt="Illustration"
            className="w-48 mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
          />
        </div>
        {/* Right Side */}
        <div className="w-1/2 flex flex-col justify-center px-12 py-10">
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-3xl font-extrabold mb-8 text-gray-800">Login</h2>
            <div className="mb-6">
              <label className="block mb-2 text-gray-700 text-base font-semibold">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                required
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F76C6C] bg-gray-50"
              />
            </div>
            <div className="mb-8">
              <label className="block mb-2 text-gray-700 text-base font-semibold">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                required
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F76C6C] bg-gray-50"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#F76C6C] hover:bg-[#e65c5c] text-white font-bold py-3 rounded-lg shadow-lg transition duration-200 text-lg"
            >
              Login
            </button>
            {error && <div className="mt-4 text-red-600 text-center">{error}</div>}
            <div className="mt-8 text-center text-gray-600 text-sm">
              Don&apos;t have an account?{' '}
              <Link to="/register" className="text-[#F76C6C] font-semibold hover:underline">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
