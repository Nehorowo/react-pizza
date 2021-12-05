import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

function App(props) {
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => props.setPizzas(data.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home pizzas={props.pizzas} />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (pizzas) => dispatch(setPizzasAction(pizzas)), //можно написать просто setPizzas
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
