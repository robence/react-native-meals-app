/* eslint-disable no-case-declarations */
import { MEALS } from '../data/dummy-data';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export default function mealsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex > -1) {
        const updatedFavMeals = state.favoriteMeals;
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      }

      return {
        ...state,
        favoriteMeals: state.favoriteMeals.concat(
          state.meals.find((meal) => meal.id === action.mealId)
        ),
      };
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.isVegeterian && !meal.isVegeterian) {
          return false;
        }
        if (appliedFilters.isVegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        filteredMeals,
      };
    default:
      return state;
  }
}

export const toggleFavorite = (mealId) => ({
  type: TOGGLE_FAVORITE,
  mealId,
});
export const setFilters = (filterSettings) => ({
  type: SET_FILTERS,
  filters: filterSettings,
});
