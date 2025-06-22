import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Home.jpg')" }} // Replace with your image path
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <main className="relative z-10 bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl px-10 py-14 max-w-lg w-full flex flex-col items-center">
        <img src="/images/Logo.png" alt="ZenTask Logo" className="w-16 h-16 mb-6 drop-shadow-lg" />
        <h1 className="typewriter font-['Alice','serif'] text-4xl font-extrabold text-gray-800 mb-2 tracking-tight">
          Welcome to <span className="text-[#F76C6C]">ZenTask</span>
        </h1>
        <p className="font-['Lora','serif'] text-lg text-gray-600 mb-8 text-center">
          Organize, focus, and achieve your goals with style.
        </p>
        <div className="flex gap-6 w-full justify-center">
        <button
        onClick={() => navigate('/auth')}
        className="bg-[#F76C6C] hover:bg-[#e65c5c] text-white font-bold px-10 py-3 rounded-xl text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
        >
        Get Started
        </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
