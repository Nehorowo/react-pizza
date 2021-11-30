import React from 'react';
import { Categories, SortPopup, PizzaBlock } from './../components';

const Home = ({ pizzas }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={['Популярности', 'Цене', 'Алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Home;
