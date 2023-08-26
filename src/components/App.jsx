import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from 'pages/Home';
import { Rates } from 'pages/Rates';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBaseCurrency } from 'redux/operations';
import { setBaseCurrency } from 'redux/currencySlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const value = '15 USD in UAH';
    const [amount, from, , to] = value.split(' ');
    console.log({ amount, from, to });

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      dispatch(fetchBaseCurrency(crd));
    }

    function error(err) {
      dispatch(setBaseCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="rates" element={<Rates />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
