import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectBaseCurrency } from 'redux/selectors';

export const Header = () => {
  const baseCurrency = useSelector(selectBaseCurrency);

  return (
    <>
      <NavLink to="/">Converter</NavLink>
      <NavLink to="rates">Rates</NavLink>

      {baseCurrency && <p>Your base currency is: {baseCurrency}</p>}
      <Outlet />
    </>
  );
};
