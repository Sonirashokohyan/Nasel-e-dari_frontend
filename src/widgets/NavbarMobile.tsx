import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { IoHome, IoGameController, IoSettingsSharp } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';

const BottomNavStyle = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid rgb(166, 185, 209);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.8rem 0;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  @media (min-width: 500px) {
    transform: translateY(100%);
    visibility: hidden;
  }
`;

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: rgb(11, 105, 220);
  font-size: 1.8rem;
  transition: color 0.3s ease;
  border: 2px solid transparent;
  padding: 0.5rem;
  border-radius: 8px;

  &.active {
    border: 2px solid rgb(3, 114, 249);
  }
`;

const data = [
  { link: '/', label: 'Home', icon: <IoHome /> },
  { link: '/games', label: 'Games', icon: <IoGameController /> },
  { link: '/profile', label: 'Profile', icon: <FaUser /> },
  { link: '/settings', label: 'Settings', icon: <IoSettingsSharp /> },
];

export default function MobileNavbar() {
  return (
    <BottomNavStyle>
      {data.map(({ link, label, icon }) => (
        <NavItem key={label} to={link}>
          {icon}
        </NavItem>
      ))}
    </BottomNavStyle>
  );
}
