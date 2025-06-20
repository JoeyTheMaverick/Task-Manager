import React, { useState, useEffect } from 'react';

const AuthPage = () => {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({
    identifier: '',
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  const [focusAnim, setFocusAnim] = useState(false);
  const [joinAnim, setJoinAnim] = useState(false);

  const triggerFocusAnim = () => {
    setFocusAnim(false);
    setTimeout(() => setFocusAnim(true), 10);
  };
  const triggerJoinAnim = () => {
    setJoinAnim(false);
    setTimeout(() => setJoinAnim(true), 10);
  };

  useEffect(() => {
    if (mode === "login") {
      setFocusAnim(true);
    } else {
      setJoinAnim(true);
    }
  }, []);

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/BG.jpg')" }}>
      <div className="w-full max-w-3xl h-[500px]" style={{ perspective: '1000px' }}>
        <div className={`flip-card-inner ${mode === 'register' ? 'flipped' : ''}`}>
          
          <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
            <div className="w-full h-full bg-white rounded-3xl shadow-lg flex overflow-hidden">
              <div className="w-1/2 bg-[#F76C6C] flex flex-col justify-between p-10">
                <div>
                  <div className="flex items-center mt-8 mb-12">
                    <img src="/images/Logo.png" alt="Logo" className="w-9 h-9 mr-3" />
                    <span className="text-white text-2xl font-bold">ZenTask</span>
                  </div>
                  <h2 className={`text-white text-4xl font-extrabold leading-tight${focusAnim ? ' animate-jump-once' : ''}`}>
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
              
              <div className="w-1/2 flex flex-col justify-center items-center px-12 py-10 h-full">
                <div className="w-full max-w-sm" onSubmit={handleSubmit}>
                  <h2 className="text-3xl font-extrabold mb-4 text-gray-800">Login</h2>
                  
                  <div className="mb-2">
                    <label className="block mb-2 text-gray-700 text-base font-semibold">Email or Username</label>
                    <input
                      name="identifier"
                      type="text"
                      value={form.identifier}
                      onChange={handleChange}
                      placeholder="Enter your Email or Username"
                      required
                      className="w-full p-3 rounded-lg focus:outline-none transition duration-200 transform focus:[transform:scale(1.08)] bg-gray-50 shadow-md"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-gray-700 text-base font-semibold">Password</label>
                    <input
                      name="password"
                      type="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter your Password"
                      required
                      className="w-full p-3 rounded-lg focus:outline-none transition duration-200 transform focus:[transform:scale(1.08)] bg-gray-50 shadow-md"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-[#F76C6C] hover:bg-[#e65c5c] text-white font-bold py-3 rounded-lg shadow-lg transition duration-200 text-lg"
                  >
                    Login
                  </button>
                  {error && <div className="mt-4 text-red-600 text-center">{error}</div>}
                  {success && <div className="mt-4 text-green-600 text-center">{success}</div>}
                  <div className="mt-8 text-center text-gray-600 text-sm">
                    Don&apos;t have an account?{' '}
                    <button
                      type='button'
                      className='text-[#F76C6C] font-semibold hover:underline'
                      onClick={() => {
                        setMode('register');
                        triggerJoinAnim();
                      }}
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <div className="w-full h-full bg-white rounded-3xl shadow-lg flex overflow-hidden">
              <div className="w-1/2 bg-[#F76C6C] flex flex-col justify-between items-center p-10">
                <div>
                  <div className="flex items-center mt-8 mb-12">
                    <img src="/images/Logo.png" alt="Logo" className="w-9 h-9 mr-3" />
                    <span className="text-white text-2xl font-bold">ZenTask</span>
                  </div>
                  <h2 className={`text-white text-4xl font-extrabold leading-tight${joinAnim ? ' animate-jump-once' : ''}`}>
                    Join ZenTask
                  </h2>
                  <p className="text-white mb-8">Start your journey to mindful productivity</p>
                </div>
                <img
                  src="/images/TMLogo.png"
                  alt="Illustration"
                  className="w-48 mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                />
              </div>
              
              <div className="w-1/2 flex flex-col justify-center items-center px-12 py-10 h-full">
                <div className="w-full max-w-sm" onSubmit={handleSubmit}>
                  <h2 className="text-3xl font-extrabold mb-4 text-gray-800">Create Account</h2>
                  
                  <div className='mb-2'>
                    <label className='block mb-2 text-gray-700 text-base font-semibold'>Username</label>
                    <input
                      name='username'
                      value={form.username}
                      onChange={handleChange}
                      placeholder='Enter your Username'
                      required
                      className='w-full p-3 rounded-lg focus:outline-none transition duration-200 transform focus:[transform:scale(1.08)] bg-gray-50 shadow-md'
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block mb-2 text-gray-700 text-base font-semibold">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your Email"
                      required
                      className="w-full p-3 rounded-lg focus:outline-none transition duration-200 transform focus:[transform:scale(1.08)] bg-gray-50 shadow-md"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-gray-700 text-base font-semibold">Password</label>
                    <input
                      name="password"
                      type="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter your Password"
                      required
                      className="w-full p-3 rounded-lg focus:outline-none transition duration-200 transform focus:[transform:scale(1.08)] bg-gray-50 shadow-md"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-[#F76C6C] hover:bg-[#e65c5c] text-white font-bold py-3 rounded-lg shadow-lg transition duration-200 text-lg"
                  >
                    Register
                  </button>
                  {error && <div className="mt-4 text-red-600 text-center">{error}</div>}
                  {success && <div className="mt-4 text-green-600 text-center">{success}</div>}
                  <div className="mt-8 text-center text-gray-600 text-sm">
                    Already have an account?{' '}
                    <button
                      type='button'
                      className='text-[#F76C6C] font-semibold hover:underline'
                      onClick={() => {
                        setMode('login');
                        triggerFocusAnim();
                      }}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AuthPage;