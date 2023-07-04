const moviesListNode = document.querySelector('[data-output-area]');
const addBtnNode = document.querySelector('[data-add-btn]');
const inputNode = document.querySelector('[data-input]');
let LS = JSON.parse(localStorage.getItem('moviesListStorage'));
let movies = Array.isArray(LS) ? LS : [];
render(movies);

moviesListNode.addEventListener('click', moviesListItemManipulationHandler);
addBtnNode.addEventListener('click', addMovieByClickHandler);
inputNode.addEventListener('keypress', addMovieByEnterHandler);
