import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, MyLoader } from './../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categories = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'Популярности', type: 'popular', order: 'desc' },
  { name: 'Цене', type: 'price', order: 'desc' },
  { name: 'Алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onChangeSort = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categories}
        />
        <SortPopup activeSortType={sortBy.type} items={sortItems} onChangeSort={onChangeSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj} />)
          : Array(10)
              .fill(0)
              .map((_, index) => <MyLoader key={index} />)}
      </div>
    </div>
  );
};

export default Home;
