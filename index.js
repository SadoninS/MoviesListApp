const inputNode = document.querySelector('[data-input]');
const addBtnNode = document.querySelector('[data-add-btn]');
const moviesListNode = document.querySelector('[data-moviesList]');

let movies = [];

function setMovie() {
  if (!inputNode.value) {
    alert('Введите название фильма!');
    return;
  }
  let movie = {
    title: '',
    id: 0,
    checked: false,
  };
  movie.title = inputNode.value;
  movie.id = Date.now();
  movies.push(movie);
  return movie;
}

function render(movies) {
  moviesListNode.innerHTML = '';
  movies.forEach((element) => {
    const movieHTML = document.createElement('li');
    movieHTML.classList.add('movies-list-item');
    movieHTML.innerHTML = element.title;
    movieHTML.setAttribute('id', `${element.id}`);
    moviesListNode.appendChild(movieHTML);
    const delBtn = document.createElement('button');
    delBtn.classList.add('del-btn');
    movieHTML.appendChild(delBtn);
  });

  inputNode.value = '';
  inputNode.focus();
}

function moviesListItemManipulationHandler(event) {
  movies.forEach((movie) => {
    if (movie.id == event.target.id) {
      event.target.classList.toggle('checked');
      movie.checked = true;
    }
  });

  if (event.target.className == 'del-btn') {
    event.target.parentElement.remove();
    let itemToDeledeIndex = movies.findIndex((item) => item.id == event.target.id);
    movies.splice(itemToDeledeIndex, 1);
  }
}

addBtnNode.addEventListener('click', function () {
  setMovie();
  render(movies);
});

moviesListNode.addEventListener('click', moviesListItemManipulationHandler);

inputNode.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    setMovie();
    render(movies);
  }
});
