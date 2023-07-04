function saveLS() {
  LS = JSON.stringify(movies);
  localStorage.setItem('moviesListStorage', LS);
}

function setMovie() {
  if (!inputNode.value) {
    alert('Введите название фильма!');
    return;
  }
  const movie = {
    title: '',
    id: 0,
    checked: false,
  };
  movie.title = inputNode.value.trim();
  movie.id = Date.now();
  movies.push(movie);
  saveLS();
  return movie;
}

function render(movies) {
  moviesListNode.innerHTML = '';
  const moviesListHTML = document.createElement('ul');
  moviesListHTML.classList.add('movies-list');
  moviesListNode.appendChild(moviesListHTML);
  movies.forEach((element) => {
    const movieHTML = document.createElement('li');
    movieHTML.classList.add('movies-list-item');
    if (element.checked == true) movieHTML.classList.add('checked');
    movieHTML.innerHTML = element.title;
    movieHTML.setAttribute('id', `${element.id}`);
    moviesListHTML.appendChild(movieHTML);
    const delBtn = document.createElement('button');
    delBtn.classList.add('del-btn');
    movieHTML.appendChild(delBtn);
  });
  inputNode.value = '';
  inputNode.focus();
}

function addMovieByClickHandler() {
  setMovie();
  render(movies);
}

function addMovieByEnterHandler() {
  if (event.keyCode === 13) {
    setMovie();
    render(movies);
  }
}

function moviesListItemManipulationHandler(event) {
  movies.forEach((movie) => {
    if (movie.id == event.target.id && movie.checked == true) {
      event.target.classList.toggle('checked');
      movie.checked = false;
      saveLS();
    } else if (movie.id == event.target.id && movie.checked == false) {
      event.target.classList.toggle('checked');
      movie.checked = true;
      saveLS();
    }
  });
  if (event.target.className == 'del-btn') {
    const itemToDeleteIndex = movies.findIndex((movie) => event.target.parentElement.id == movie.id);
    movies.splice(itemToDeleteIndex, 1);
    event.target.parentElement.remove();
    saveLS();
  }
}
