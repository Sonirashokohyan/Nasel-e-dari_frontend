// src/pages/Dashboard.tsx
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Go to Profile</Link>
      </nav>
      <Outlet /> {/* This is where Profile will render */}
    </div>
  );
};

export default Dashboard;
