(function() {
  const movies = [
    { name: 'Dumb & Dumber', shortcode: 'dad' },
    { name: 'Elf', shortcode: 'elf' },
    { name: 'Finding Nemo', shortcode: 'fne' },
    { name: 'Home Alone 2', shortcode: 'ha2' },
    { name: 'Father Of The Bride', shortcode: 'fob' },
    { name: 'Wizard Of Oz', shortcode: 'woz' },
    { name: 'Finding Dory', shortcode: 'fdo' },
    { name: 'Love Actually', shortcode: 'lva' },
    { name: 'Coco', shortcode: 'coc' },
  ];

  const SELECTED_CLASS = 'selected';

  function init() {
    addListeners();
    appendMovies(movies);
  }

  init();

  function appendMovies(movies) {
    const moviesContainer = document.querySelector('.movies');

    movies.forEach(movie => {
      // Create list item element
      const movieElement = document.createElement('li');
      movieElement.className = 'movie-item';
      movieElement.setAttribute('name', movie.shortcode);

      // Create and append text element
      const movieText = document.createTextNode(movie.name);
      movieElement.append(movieText);

      moviesContainer.appendChild(movieElement);
    });
  }

  function updateSelectedMovie(selectedMovie, movieName) {
    // Remove current selected
    const currentSelected = document.querySelector(`.${SELECTED_CLASS}`);
    currentSelected && currentSelected.classList.remove(SELECTED_CLASS);

    // Add new selected
    selectedMovie.classList.add(SELECTED_CLASS);

    // Update view
    const selectedMovieSpan = document.querySelector('.selected-movie-title');
    selectedMovieSpan.textContent = movieName;
  }

  function pickRandomMovie() {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovieShortcode = movies[randomIndex].shortcode;

    const selectedMovieElement = document.querySelector(
      `[name=${randomMovieShortcode}]`
    );

    updateSelectedMovie(selectedMovieElement, movies[randomIndex].name);
  }

  function addListeners() {
    const randomBtn = document.querySelector('.random-movie-btn');
    randomBtn.addEventListener('click', pickRandomMovie);
  }
})();
