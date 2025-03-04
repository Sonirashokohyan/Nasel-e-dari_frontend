import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { IoHome, IoGameController, IoSettingsSharp } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { BottomNavStyle } from '@shared/styled/NavbarStyle';

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
