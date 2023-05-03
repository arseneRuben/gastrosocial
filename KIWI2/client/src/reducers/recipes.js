import { FETCH_ALL } from '../constants/actionTypes';

const recipes = (state = { isLoading: true, recipes: [] }, action) => {
  switch (action.type) {
  
    case FETCH_ALL:
      return {
        ...state,
        recipes: action.payload,
    
      };
    default:
      return state;
  }
};

export default recipes;
