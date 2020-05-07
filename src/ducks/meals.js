import { MEALS } from '../data/dummy-data';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export default function mealsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      // eslint-disable-next-line no-case-declarations
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
    default:
      return state;
  }
}

export const toggleFavorite = (mealId) => ({
  type: TOGGLE_FAVORITE,
  mealId,
});
