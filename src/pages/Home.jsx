import React from 'react';
import { Categories, SortPopup, PizzaBlock } from './../components';

const Home = ({ pizzas }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup
          items={[
            { name: 'Популярности', type: 'popular' },
            { name: 'Цене', type: 'price' },
            { name: 'Алфавиту', type: 'alphabet' },
          ]}
        />
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
