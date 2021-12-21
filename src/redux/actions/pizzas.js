import axios from 'axios';

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `https://react-pizza-shop111.herokuapp.com/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy.type}&_order=${sortBy.order}`,
    )
    .then(({ data }) => dispatch(setPizzas(data)));
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
});
