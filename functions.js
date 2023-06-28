function renderApp() {
  moviesListNode.innerHTML = localStorage.getItem('moviesList');
}

function saveToLS() {
  localStorage.setItem('moviesList', moviesListNode.innerHTML);
}

function addMovieHandler() {
  let inputText = inputNode.value.trim();
  if (!inputText) alert('Введите название фильма!');
  else {
    let moviesListItem = document.createElement('li');
    moviesListItem.classList.add('movies-list-item');
    moviesListItem.innerHTML = inputNode.value.trim();
    moviesListNode.appendChild(moviesListItem);

    let delBtn = document.createElement('button');
    delBtn.classList.add('del-btn');
    moviesListItem.appendChild(delBtn);
  }
  inputNode.value = '';
  inputNode.focus();
  saveToLS();
}

function moviesListItemManipulationHandler(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    saveToLS();
  }
  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove();
    saveToLS();
  }
}