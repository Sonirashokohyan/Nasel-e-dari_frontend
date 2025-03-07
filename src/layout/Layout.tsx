import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Navbar from "@widgets/Navbar";
import MobileNavbar from "@widgets/NavbarMobile";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main<{ $paddingLeft: string }>`
  padding-left: ${(props) => props.$paddingLeft};
  transition: padding-left 0.3s ease;
`;

const Layout = () => {
  const location = useLocation(); // Get current route
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [paddingLeft, setPaddingLeft] = useState("15rem");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 500);

      if (location.pathname === "/login" || location.pathname === "/signup") {
        setPaddingLeft("0"); // No padding for login and signup pages
      } else if (width > 1000) {
        setPaddingLeft("15rem");
      } else if (width > 500) {
        setPaddingLeft("12rem");
      } else {
        setPaddingLeft("0"); // No padding on mobile
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname]); // Re-run effect when route changes

  // Hide Navbar & MobileNavbar for login and signup pages
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      {!hideNavbar && !isMobile && <Navbar />}
      {!hideNavbar && isMobile && <MobileNavbar />}
      <Main $paddingLeft={paddingLeft}>
        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;
