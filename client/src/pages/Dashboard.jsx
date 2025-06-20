import { useEffect, useState } from "react";
import api from "../api"; // Make sure you have your Axios instance set up
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set the Authorization header for this request
    api.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

    api.get("/profile")
      .then(res => {
        setProfile(res.data.user || res.data); 
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        navigate("/auth");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {profile ? (
        <div>
          <p className="mb-2">Welcome, <span className="font-semibold">{profile.username || "User"}</span>!</p>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Could not load profile info.</p>
      )}
    </div>
  );
}
