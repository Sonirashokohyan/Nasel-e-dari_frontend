// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./themeProvider";
import { Games, Home, Login, Profile, Settings, Signup } from "@pages/index";
import Layout from "../layout/Layout";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';


const App = () => {
  return (
    <ThemeProvider>
      <MantineProvider  >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/games" element={<Games />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </MantineProvider>
    </ThemeProvider>
  );
};

export default App;
