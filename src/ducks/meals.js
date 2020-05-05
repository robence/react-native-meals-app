import { MEALS } from '../data/dummy-data';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const ABC = 'ABC';

export default function mealsReducer(state = initialState, action) {
  return state;
}

export const abc = () => ({});
