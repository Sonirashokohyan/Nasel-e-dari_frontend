// src/layout/Layout.tsx
import { Footer } from "@widgets/Footer";
import Navbar from "@widgets/Navbar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
