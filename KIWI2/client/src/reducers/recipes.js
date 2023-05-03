import { FETCH_ALL } from '../constants/actionTypes';

const recipes = (state = {recipes: [] }, action) => {
  switch (action.type) {
  
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
    
    return {
      ...state,
      recipes: action.payload.data
    };
    default:
      return state;
  }
};

export default recipes;
