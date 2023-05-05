import { FETCH_ALL_INGREDIENTS, FETCH_INGREDIENT , CREATE_INGREDIENT} from '../constants/actionTypes';

const ingredients = (state = {ingredients: [] }, action) => {
  switch (action.type) {
  
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_INGREDIENT:
        return { ...state, ingredient: action.payload.ingredient };
    case CREATE_INGREDIENT:
          return { ...state, ingredients: [...state.ingredients, action.payload] }; // Array of ingredients: new ingredient in the action.payload
    case FETCH_ALL_INGREDIENTS:
    
    return {
      ...state,
      ingredients: action.payload.data
    };
    default:
      return state;
  }
};

export default ingredients;
