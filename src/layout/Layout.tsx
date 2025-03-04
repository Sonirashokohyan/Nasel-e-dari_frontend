import { useState, useEffect } from "react";
import Navbar from "@widgets/Navbar";
import MobileNavbar from "@widgets/NavbarMobile";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main<{ $paddingLeft: string }>`
  padding-left: ${(props) => props.$paddingLeft};
  transition: padding-left 0.3s ease;
`;


const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [paddingLeft, setPaddingLeft] = useState("15rem");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 500);
      if (width > 1000) {
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
  }, []);

  return (
    <div>
      {!isMobile && <Navbar />}
      {isMobile && <MobileNavbar />}
      <Main $paddingLeft={paddingLeft}>

        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;
