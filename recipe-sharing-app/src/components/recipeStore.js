import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    return set({
      recipes: updatedRecipes,
      filteredRecipes: filter(updatedRecipes, get().searchTerm),
    });
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((r) => r.id !== id);
    return set({
      recipes: updatedRecipes,
      filteredRecipes: filter(updatedRecipes, get().searchTerm),
    });
  },

  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    return set({
      recipes: updatedRecipes,
      filteredRecipes: filter(updatedRecipes, get().searchTerm),
    });
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set({ filteredRecipes: filter(get().recipes, term) });
  },

  setRecipes: (recipes) => {
    set({
      recipes,
      filteredRecipes: filter(recipes, get().searchTerm),
    });
  },

  // ⭐ Favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // 🎯 Recommendations (mocked by random selection of favorite-based recipes)
  generateRecommendations: () => {
    const state = get();
    const recommended = state.recipes.filter(
      (recipe) =>
        state.favorites.includes(recipe.id) && Math.random() > 0.3
    );
    set({ recommendations: recommended });
  },
}));

function filter(recipes, term) {
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
}
