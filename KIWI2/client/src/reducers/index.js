import { combineReducers } from 'redux';

import recipes from './recipes';
import ingredients from './ingredient';


export const reducers = combineReducers({ recipes,ingredients });