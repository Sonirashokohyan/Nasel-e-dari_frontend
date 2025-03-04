
import { NavLink } from 'react-router-dom'; // Import NavLink
import { IoHome, IoGameController, IoSettingsSharp } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { NavbarMainStyle, NavStyle } from '@shared/styled/NavbarStyle';



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
