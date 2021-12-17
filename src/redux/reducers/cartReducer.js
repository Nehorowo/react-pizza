const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_TO_CART':
      const pizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        //to refactor
        [action.payload.id]: {
          items: pizzaItems,
          totalPrice: getTotalPrice(pizzaItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const totalPizzasCount = [].concat(...Object.values(items));
      const totalPrice = getTotalPrice(totalPizzasCount);

      return {
        ...state,
        items: newItems,
        //to refactor
        totalCount: totalPizzasCount.length,
        totalPrice,
      };

    case 'CLEAR_CART':
      return {
        totalPrice: 0,
        totalCount: 0,
        items: {},
      };

    default:
      return state;
  }
};

export default cartReducer;
