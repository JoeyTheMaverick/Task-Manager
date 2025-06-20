import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0);
  const [authChanged, setAuthChanged] = useState(false);


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/auth' element={<Auth setAuthChanged={setAuthChanged} />} />
      <Route path="/login" element={<Navigate to="/auth" replace />} />
      <Route path="/register" element={<Navigate to="/auth" replace />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App
