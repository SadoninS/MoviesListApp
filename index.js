const inputNode = document.querySelector('[data-input]');
const addBtnNode = document.querySelector('[data-add-btn]');
const moviesListNode = document.querySelector('[data-moviesList]');

renderApp();

addBtnNode.addEventListener('click', addMovieHandler);
inputNode.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) addMovieHandler();
});
moviesListNode.addEventListener('click', moviesListItemManipulationHandler);
