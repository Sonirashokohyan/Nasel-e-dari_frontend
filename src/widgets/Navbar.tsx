import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { IoHome, IoGameController, IoSettingsSharp } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';

const NavStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  height: 100vh;
  background-color: #fff;
  border-right: 1px solid rgb(166, 185, 209);
  padding: 1rem;
  transition: width 0.3s ease;

  @media (max-width: 1000px) {
    width: 12rem;
    padding: 0.5rem;
  }
`;

const NavbarMainStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: green;

  & h2 {
    align-self: center;
    font-size: 1.5rem;

    @media (max-width: 1000px) {
      font-size: 1.3rem;
    }
  }

  & a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    padding: 0.8rem 1rem;
    font-size: 1.5rem;
    color: rgb(11, 105, 220);
    border-radius: 8px;
    transition: border 0.3s ease, color 0.3s ease;
    border: 2px solid transparent;

    @media (max-width: 1000px) {
      font-size: 1rem;
      padding: 0.5rem 0.8rem;
    }

    & p {
      color: rgb(85, 80, 80);
      font-size: 1rem;
      margin: 0;

      @media (max-width: 1000px) {
        font-size: 0.8rem;
      }
    }
  }

  /* Active link - blue border */
  & .active {
    border: 2px solid rgb(3, 114, 249);
  }
`;

const data = [
  { link: '/', label: 'Home', icon: <IoHome /> },
  { link: '/games', label: 'Games', icon: <IoGameController /> },
  { link: '/profile', label: 'Profile', icon: <FaUser /> },
  { link: '/settings', label: 'Settings', icon: <IoSettingsSharp /> },
];

export default function Navbar() {
  return (
    <NavStyle>
      <NavbarMainStyle>
        <h2>Nasle-Dari</h2>
        {data.map(({ link, label, icon }) => (
          <NavLink key={label} to={link} className={({ isActive }) => (isActive ? 'active' : '')}>
            {icon}
            <p>{label}</p>
          </NavLink>
        ))}
      </NavbarMainStyle>
    </NavStyle>
  );
}
