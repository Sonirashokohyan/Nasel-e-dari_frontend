// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./themeProvider";
// import Layout from "@/layout/Layout";
// import HomePage from "@/pages/HomePage";
import Dashboard from "./Dashboard";
import { Games, Home, Profile, Settings } from "@pages/index";
import Layout from "../layout/Layout";
// import AboutPage from "@/pages/AboutPage";
// import Profile from "@/pages/Profile";
// import NotFoundPage from "@/pages/NotFoundPage";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Layout Wrapper for Public Routes */}
          
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/games" element={<Games />} />
            <Route path="/settings" element={<Settings />} />


            {/* Nested Routes for Dashboard */}
            <Route path="/dashboard" element={<Dashboard />}>
              {/* <Route path="profile" element={<Profile />} /> */}
            </Route>

            {/* Catch-All for 404 Page */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
