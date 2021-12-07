import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from './../components';
import { setCategory } from '../redux/actions/filters';

const categories = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'Популярности', type: 'popular' },
  { name: 'Цене', type: 'price' },
  { name: 'Алфавиту', type: 'alphabet' },
];

const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categories} />
        <SortPopup items={sortItems} />
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
