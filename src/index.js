var keys = ['ArrowUp','ArrowDown','ArrowLeft', 'ArrowRight'];

var elements = {
  navContainer:             document.getElementById('navigation'),
  genresContainer:          document.getElementById('genres'),
  navElements:              document.getElementsByClassName('content-icon'),
  genresListElements:       document.getElementsByTagName('li'),
  moviesContainer:          document.getElementById('moviesContainer'),
  movies:                   document.getElementsByClassName('movieImg-wrapper__item'),
  movieImgWrapper:          document.getElementsByClassName('movieImg-wrapper')[0],
  moviesSection:            document.getElementsByClassName('movies-section')[0],
  elementsDescriptionMovie: {
    name:      document.getElementsByClassName('movieName')[0],
    county:    document.getElementsByClassName('country')[0],
    genre:     document.getElementsByClassName('genre')[0],
    rating:    document.getElementsByClassName('rating')[0],
    imdb:      document.getElementsByClassName('IMDb')[0],
    kinopoisk: document.getElementsByClassName('kinopoisk')[0]
  }
};


var render = {
  renderTransfmGenresAndMovie: function(direction, value, sizeState, container) {
    if (direction === 'right') {
      sizeState.toRight += value;
      container.style.transform = [
        'translateX(-',
        sizeState.toRight,
        'px)'
      ].join('');
      container.style.transition = '0.5s';

    } else if (direction === 'left') {
      var left = sizeState.toRight - value;
      sizeState.toRight = 0;
      sizeState.toLeft += left;
      container.style.transform = [
        'translateX(-',
        sizeState.toLeft,
        'px)'
      ].join('');
      container.style.transition = '0.5s';
    }
  },
  renderBackgroung: function(pathImg) {
    var back = document.getElementsByClassName('backgroundMovie')[0];
    back.style.background = 'url(' + pathImg + ')';
    back.style['background-repeat'] = 'no-repeat';
    back.style['background-size'] = '90% 140%';
    back.style['background-position'] = 'center';
    back.style.filter = 'blur(8px)';
  },
  renderMovie: function(element) {
    element.forEach(function(movie, i, arr) {
      elements.movieImgWrapper.children[i].children[0].setAttribute('src', movie.pathImg);
      elements.elementsDescriptionMovie.name.textContent = arr[0].name;
      elements.elementsDescriptionMovie.county.textContent = arr[0].countryAndYear;
      elements.elementsDescriptionMovie.genre.textContent = arr[0].genre;
      elements.elementsDescriptionMovie.rating.textContent = arr[0].rating;
      elements.elementsDescriptionMovie.imdb.textContent = arr[0].IMDb;
      elements.elementsDescriptionMovie.kinopoisk.textContent = arr[0].kinopoisk;
    });
  },
  renderSwitchMovie: function(el, state) {
    var data = state[state.activeGenre];
    var movieIndex = el.dataset.position;

    var name = document.getElementsByClassName('movieName')[0];
    var county = document.getElementsByClassName('country')[0];
    var genre = document.getElementsByClassName('genre')[0];
    var rating = document.getElementsByClassName('rating')[0];
    var imdb = document.getElementsByClassName('IMDb')[0];
    var kinopoisk = document.getElementsByClassName('kinopoisk')[0];

    data.forEach(function(dataMovie, i, arr) {
      name.textContent = arr[movieIndex].name;
      county.textContent = arr[movieIndex].countryAndYear;
      genre.textContent = arr[movieIndex].genre;
      rating.textContent = arr[movieIndex].rating;
      imdb.textContent = arr[movieIndex].IMDb;
      kinopoisk.textContent = arr[movieIndex].kinopoisk;
    });
  },
  renderNavigationMenu: function(keyCode, prevEl, nextEl, state) {
    if (keyCode === 'ArrowRight') {
      if (nextEl !== null) {
        nextEl.focus();
      }
    }
    if (keyCode === 'ArrowLeft') {
      if (prevEl !== null) {
        prevEl.focus();
      }
    }
    if (keyCode === 'ArrowDown') {
      state.activeState = 'genres';
      state.lastActiveElements.fromNavToGenres = document.activeElement;
      document.activeElement.blur();
      router.routeFromNavToGenres(elements.genresListElements, state.lastActiveElements.fromGenresToNav, state);
    }
  },
  renderGenresList: function(keyCode, prevEl, nextEl, state) {
    if (keyCode === 'ArrowRight') {
      if (nextEl !== null) {
        render.renderTransfmGenresAndMovie('right', 150, state.sizeGenreContainer, elements.genresContainer);

        var nextGenreName = nextEl.getAttribute('id');
        state.activeGenre = nextGenreName;
        var pathNextGenreBackground = state[state.activeGenre][0].pathImg;
        render.renderMovie(state[nextGenreName]);
        render.renderBackgroung(pathNextGenreBackground);

        nextEl.focus();
      }
    }
    if (keyCode === 'ArrowLeft') {
      if (prevEl !== null) {

        render.renderTransfmGenresAndMovie('left', 150, state.sizeGenreContainer, elements.genresContainer);

        var prevGenreName = prevEl.getAttribute('id');
        state.activeGenre = prevGenreName;
        render.renderMovie(state[prevGenreName]);
        var pathPrevGenreBackground = state[state.activeGenre][0].pathImg;
        render.renderBackgroung(pathPrevGenreBackground);

        prevEl.focus();
      }
    }
    if (keyCode === 'ArrowDown') {
      state.activeState = 'movies';
      state.lastActiveElements.fromGenresToMovies = document.activeElement;
      document.activeElement.blur();
      router.routeFromGenreToMovies(elements.moviesContainer, state.lastActiveElements.fromMoviesToGenres, state);
    }
    if (keyCode === 'ArrowUp') {
      state.lastActiveElements.fromGenresToNav = document.activeElement;
      document.activeElement.blur();
      router.routeFromGenresToNav(state.lastActiveElements.fromNavToGenres, state);
    }
  },
  renderMoviesList: function(keyCode, prevEl, nextEl, state) {
    if (keyCode === 'ArrowRight') {
      if (nextEl !== null) {
        render.renderSwitchMovie(nextEl, state);
        var pathImgNextEl = state[state.activeGenre][nextEl.dataset.position].pathImg;
        render.renderBackgroung(pathImgNextEl);
        render.renderTransfmGenresAndMovie('right', 190, state.sizeMoviesContainer, elements.moviesContainer);
        nextEl.focus();
      }
    }
    if (keyCode === 'ArrowLeft') {
      if (prevEl !== null) {
        render.renderSwitchMovie(prevEl, state);
        var pathImgPrevtEl = state[state.activeGenre][prevEl.dataset.position].pathImg;
        render.renderBackgroung(pathImgPrevtEl);
        render.renderTransfmGenresAndMovie('left', 190, state.sizeMoviesContainer, elements.moviesContainer);
        prevEl.focus();
      }
    }
    if (keyCode === 'ArrowUp') {
      state.lastActiveElements.fromMoviesToGenres = document.activeElement;
      state.lastActiveMovieOfGenre[state.activeGenre] = document.activeElement.dataset.position;
      document.activeElement.blur();
      router.routeFromMovieToGenre(state.lastActiveElements.fromGenresToMovies, state);
    }
  }
};


var router = {
  routeFromNavToGenres: function(genres, lastActiveElement, state) {
    elements.moviesSection.style.display = 'flex';
    if (lastActiveElement === null) {
      state.activeGenre = 'detective';
      var pathDetectiveImg = state[state.activeGenre][0].pathImg;
      render.renderMovie(state.detective);
      render.renderBackgroung(pathDetectiveImg);
      genres[0].focus();
    } else {
      var id = lastActiveElement.getAttribute('id');
      var lastGenre = state[id];
      state.activeGenre = id;
      var pathActiveImg = state[id][0].pathImg;
      render.renderMovie(lastGenre);
      render.renderBackgroung(pathActiveImg);
      lastActiveElement.focus();
    }
  },
  routeFromGenresToNav: function(lastEl) {
    lastEl.focus();
  },
  routeFromGenreToMovies: function(movies, lastActiveElement, state) {
    if (lastActiveElement === null) {
      movies.children[0].focus();
    } else {
      var lastActivePositon = state.lastActiveMovieOfGenre[state.activeGenre];
      render.renderBackgroung(state[state.activeGenre][lastActivePositon].pathImg);
      var lastEl = document.getElementById(lastActivePositon);
      lastEl.focus();
    }
  },
  routeFromMovieToGenre: function(lastEl, state) {
    state.sizeMoviesContainer.toRight = 0;
    state.sizeMoviesContainer.toLeft = 0;
    lastEl.focus();
  }
};

function app() {
  var state = new Object({
    detective: [
      {
        name: 'Достать ножи', countryAndYear: 'США, 2019', genre: 'Детектив, Комедия', rating: '16+', IMDb: 'IMDb: 7.9', kinopoisk: 'Кинопоиск: 8.0', 'pathImg': './assets/detective/knifes.jpeg'
      },
      {
        name: 'Шестое чувство', countryAndYear: 'США, 1999',genre: 'Детектив, Фэнтези', rating: '12+', IMDb: 'IMDb: 8.1', kinopoisk: 'Кинопоиск: 8.2', 'pathImg': './assets/detective/sixth-sense.jpeg'
      },
      {
        name: 'Поиск', countryAndYear: 'Россия, США, 1999', genre: 'Детектив, Триллер', rating: '16+', IMDb: 'IMDb: 8.20', kinopoisk: 'Кинопоиск: 8.5', 'pathImg': './assets/detective/searching.jpeg'
      }
    ],
    fantasy: [
      {
        name: 'Начало', countryAndYear: 'США, Великобритания, 2010', genre: 'фантастика, боевик', rating: '12+', IMDb: 'IMDb: 8.80', kinopoisk: 'Кинопоиск: 8.7', 'pathImg': './assets/fantasy/Inception.jpeg'
      },
      {
        name: 'Интерстеллар', countryAndYear: 'США, Великобритания, 2014', genre: 'фантастика, драма', rating: '12+', IMDb: 'IMDb: 8.6', kinopoisk: 'Кинопоиск: 8.6', 'pathImg': './assets/fantasy/inters.jpg'
      },
      {
        name: 'Мстители: Война бесконечности', countryAndYear: 'США, 2018', genre: 'фантастика, боевик', rating: '16+', IMDb: 'IMDb: 8.4', kinopoisk: 'Кинопоиск: 7.9', 'pathImg': './assets/fantasy/avengers.jpeg'
      }
    ],
    actionMovie: [
      {
        name: 'Леон', countryAndYear: 'Франция, США, 1994', genre: 'боевик, триллер', rating: '16+', IMDb: 'IMDb: 8.50', kinopoisk: 'Кинопоиск: 8.7', 'pathImg': './assets/actionMovie/leon.jpeg'
      },
      {
        name: 'Гладиатор', countryAndYear: 'США, Великобритания, 2000', genre: 'боевик, история', rating: '16+', IMDb: 'IMDb: 8.50', kinopoisk: 'Кинопоиск: 8.6', 'pathImg': './assets/actionMovie/gladiator.jpeg'
      },
      {
        name: 'Карты, деньги, два ствола', countryAndYear: 'Великобритания, 1998', genre: 'боевик, комедия', rating: '18+', IMDb: 'IMDb: 8.20', kinopoisk: 'Кинопоиск: 8.5', 'pathImg': './assets/actionMovie/two-guns.jpeg'
      }
    ],
    children: [
      {
        name: 'Бамблби', countryAndYear: 'Китай, США, 2018', genre: 'фантастика, боевик', rating: '6+', IMDb: 'IMDb: 6.80', kinopoisk: 'Кинопоиск: 6.5', 'pathImg': './assets/children/bumb.jpeg'
      },
      {
        name: 'Аладдин', countryAndYear: 'США, Великобритания,  2019', genre: 'мюзикл, фэнтези', rating: '6+', IMDb: 'IMDb: 6.90', kinopoisk: 'Кинопоиск: 7.2', 'pathImg': './assets/children/alladin.jpeg'
      },
      {
        name: 'Приключения Паддингтона', countryAndYear: 'Великобритания, Франция, 2019', genre: 'комедия, семейный',rating: '6+', IMDb: 'IMDb: 7.20', kinopoisk: 'Кинопоиск: 7.2', 'pathImg': './assets/children/paddington.jpeg'
      }
    ],
    comedy: [
      {
        name: 'Залечь на дно в Брюгге', countryAndYear: 'Великобритания, США, 2007', genre: 'комедия, криминал', rating: '18+', IMDb: 'IMDb: 7.90', kinopoisk: 'Кинопоиск: 7.7', 'pathImg': './assets/comedy/brugge.jpeg'
      },
      {
        name: 'Большой Лебовски', countryAndYear: 'США, Великобритания, 1998', genre: 'комедия, криминал', rating: '18+', IMDb: 'IMDb: 8.10', kinopoisk: 'Кинопоиск: 7.7', 'pathImg': './assets/comedy/lebovs.jpeg'
      },
      {
        name: 'Впритык', countryAndYear: 'США, 2010', genre: 'комедия', rating: '16+', IMDb: 'IMDb: 6.50', kinopoisk: 'Кинопоиск: 7.24', 'pathImg': './assets/comedy/vprituk.jpeg'
      }
    ],
    melodrama: [
      {
        name: 'Форрест Гамп', countryAndYear: 'США, 1994', genre: 'драма, мелодрама', rating: '12+', IMDb: 'IMDb: 8.8', kinopoisk: 'Кинопоиск: 8.9', 'pathImg': './assets/melodrama/forest.jpeg'
      },
      {
        name: 'Титаник', countryAndYear: 'США, 1997', genre: 'мелодрама', rating: '12+', IMDb: 'IMDb: 8.8', kinopoisk: 'Кинопоиск: 8.9', 'pathImg': './assets/melodrama/titanic.jpeg'
      },
      {
        name: 'Великий Гэтсби', countryAndYear: 'Австралия, США, 2013', genre: 'драма, мелодрама', rating: '16+', IMDb: 'IMDb: 7.20', kinopoisk: 'Кинопоиск: 7.9', 'pathImg': './assets/melodrama/gatsby.jpeg'
      }
    ],
    adventure: [
      {
        name: 'Властелин колец: Братство Кольца', countryAndYear: 'США, Новая Зеландия, 2001', genre: 'фэнтези, приключения', rating: '12+', IMDb: 'IMDb: 8.8', kinopoisk: 'Кинопоиск: 8.58', 'pathImg': './assets/adventure/ring.jpeg'
      },
      {
        name: 'Выживший', countryAndYear: 'США, 2015', genre: 'приключения, вестерн', rating: '18+', IMDb: 'IMDb: 8.0', kinopoisk: 'Кинопоиск: 7.8', 'pathImg': './assets/adventure/survivor.jpeg'
      },
      {
        name: 'Алиса в Стране чудес', countryAndYear: 'США, Великобритания, 2010', genre: 'фэнтези, приключения', rating: '12+', IMDb: 'IMDb: 6.40', kinopoisk: 'Кинопоиск: 7.1', 'pathImg': './assets/adventure/alice.jpeg'
      }
    ],
    sizeGenreContainer: {
      toRight: 0,
      toLeft:  0
    },
    sizeMoviesContainer: {
      toRight: 0,
      toLeft:  0
    },
    activeGenre:              'detective',
    'lastActiveMovieOfGenre': {
      detective:   0,
      fantasy:     0,
      actionMovie: 0,
      children:    0,
      comedy:      0,
      melodrama:   0,
      adventure:   0
    },
    lastActiveElements: {
      fromNavToGenres:    null,
      fromGenresToMovies: null,
      fromMoviesToGenres: null,
      fromGenresToNav:    null
    }
  });
  document.addEventListener('keydown', function(e) {
    if (keys.indexOf(e.code) > -1) {
      e.preventDefault();
    }
    if (e.code === 'ArrowDown') {
      elements.navElements[0].focus();
    }

    elements.navContainer.addEventListener('keydown', function(e) {
      e.stopImmediatePropagation();
      var active = e.target;
      var prevNavEl = active.previousElementSibling;
      var nextNavEl = active.nextElementSibling;
      render.renderNavigationMenu(e.code, prevNavEl, nextNavEl, state);
    });

    elements.genresContainer.addEventListener('keydown', function(e) {
      e.stopImmediatePropagation();
      var active = e.target;
      var prevGenreEl = active.previousElementSibling;
      var nextGenreEl = active.nextElementSibling;
      render.renderGenresList(e.code, prevGenreEl, nextGenreEl, state);
    });

    elements.moviesContainer.addEventListener('keydown', function(e) {
      e.stopImmediatePropagation();
      var active = e.target;
      var prevMovieEl = active.previousElementSibling;
      var nextMovieEl = active.nextElementSibling;
      render.renderMoviesList(e.code, prevMovieEl, nextMovieEl, state);
    });
  });
}

app();
