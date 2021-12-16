const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_TO_CART':
      const newItems = {
        ...state.items,
        //to refactor
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const totalPizzasCount = [].concat(...Object.values(newItems));
      const totalPrice = totalPizzasCount.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);

      return {
        ...state,
        items: newItems,
        //to refactor
        totalCount: totalPizzasCount.length,
        totalPrice,
      };

    default:
      return state;
  }
};

export default cartReducer;
