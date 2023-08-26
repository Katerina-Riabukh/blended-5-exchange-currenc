import { NavLink, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <NavLink to="/">Converter</NavLink>
      <NavLink to="rates">Rates</NavLink>
      <Outlet />
    </>
  );
};
