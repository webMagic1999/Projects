import * as model from './model.js';
import { MODAL_TIMEOUT_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarkView.js';
import addRecipeView from './views/addRecipeView.js';

// import icons from '../img/icons.svg'; old verison parcel v1
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import bookmarkView from './views/bookmarkView.js';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0 - Update results view for mark selected in search
    resultView.update(model.getSearchResultsPage());

    bookmarksView.update(model.state.bookmarkArray);

    // 1- Loading the recipe
    await model.loadRecipe(id);

    // 2- Rendering the recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultView.renderSpinner();
    // 1 - Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2 - Load search results
    await model.loadSearchResults(query);

    // 3 - Render result
    // resultView.render(model.state.search.results);
    resultView.render(model.getSearchResultsPage());

    // 4 - Initial pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
    resultView.renderError();
  }
};

const controlPagination = function (goToPage) {
  // 1 - Render new result
  resultView.render(model.getSearchResultsPage(goToPage));

  // 2 - Updated pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (updatedServings) {
  // Update the recipe servings( in state )
  model.updateServings(updatedServings);

  // Update the recipe View
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1 - Add or remove bookmakrs
  if (!model.state.recipe.bookmarks) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);

  // 2- Update recipe view
  recipeView.update(model.state.recipe);

  // 3- Render Bookmarks
  bookmarksView.render(model.state.bookmarkArray);
};

const controlBooksmarks = function () {
  bookmarksView.render(model.state.bookmarkArray);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Render spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe
    await model.uploadRecipe(newRecipe);

    //  Render recipe
    recipeView.render(model.state.recipe);

    // Success Message
    addRecipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarkArray); // check

    // change id in url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // close form
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_TIMEOUT_SEC * 1000);
  } catch (error) {
    addRecipeView.renderError(error.message);
  }
};

const init = function () {
  bookmarkView.addHandlerRender(controlBooksmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
