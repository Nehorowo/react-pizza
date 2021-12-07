import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => dispatch(setPizzasAction(data)));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
