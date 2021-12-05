const initialState = {
  category: 0,
  sortBy: 'popular',
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
