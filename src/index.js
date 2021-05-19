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
      name: 'Начало', countryAndYear: 'США, Великобритания, 2010', genre: 'фантастика, боевик', rating: '12+', IMDb: 'IMDb: 8.80', kinopoisk: 'Кинопоиск: 8.7', 'pathImg': './assets/fantasy/inception.jpeg'
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
    prev:   0,
    active: 0,
    next:   0
  },
  activeGenre:        'detective',
  lastActiveElements: {
    fromNavToGenres:    null,
    fromGenresToMovies: null,
    fromMoviesToGenres: null,
    fromGenresToNav:    null
  }
});

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
function renderBackgroung(pathImg) {
  // var backgroundImg = pathImg;
  var back = document.getElementsByClassName('backgroundMovie')[0];
  back.style.background = 'url(' + pathImg + ')';
  back.style['background-repeat'] = 'no-repeat';
  back.style['background-size'] = '90% 120%';
  back.style['background-position'] = 'center';
  back.style.filter = 'blur(8px)';
}

function renderMovie(element) {
  element.forEach(function(movie, i, arr) {
    elements.movieImgWrapper.children[i].children[0].setAttribute('src', movie.pathImg);
    elements.elementsDescriptionMovie.name.textContent = arr[0].name;
    elements.elementsDescriptionMovie.county.textContent = arr[0].countryAndYear;
    elements.elementsDescriptionMovie.genre.textContent = arr[0].genre;
    elements.elementsDescriptionMovie.rating.textContent = arr[0].rating;
    elements.elementsDescriptionMovie.imdb.textContent = arr[0].IMDb;
    elements.elementsDescriptionMovie.kinopoisk.textContent = arr[0].kinopoisk;
  });
}

function renderSwitchMovie(el) {
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
}

var router = {
  routeFromNavToGenres: function(genres, lastActiveElement) {
    elements.moviesSection.style.display = 'flex';
    if (lastActiveElement === null) {
      state.activeGenre = 'detective';
      var pathDetectiveImg = state[state.activeGenre][0].pathImg;
      renderMovie(state.detective);
      renderBackgroung(pathDetectiveImg);
      genres[0].focus();
    } else {
      var id = lastActiveElement.getAttribute('id');
      var lastGenre = state[id];
      state.activeGenre = id;
      var pathActiveImg = state[id][0].pathImg;
      renderMovie(lastGenre);
      renderBackgroung(pathActiveImg);
      lastActiveElement.focus();
    }
  },
  routeFromGenresToNav: function(lastEl) {
    lastEl.focus();
  },
  routeFromGenreToMovies: function(movies, lastActiveElement) {
    if (lastActiveElement === null) {
      movies.children[0].focus();
    } else {
      lastActiveElement.focus();
    }
  },
  routeFromMovieToGenre: function(lastEl) {
    lastEl.focus();
  }
};


function renderNavigationMenu(keyCode, prevEl, nextEl) {
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
    console.log(state.activeGenre);
    router.routeFromNavToGenres(elements.genresListElements, state.lastActiveElements.fromGenresToMovies);
  }
}

function renderGenresList(keyCode, prevEl, nextEl) {
  if (keyCode === 'ArrowRight') {
    if (nextEl !== null) {
      var prop = [
        'translateX(-',
        '100',
        'px)'
      ].join('');
      var container = nextEl.parentNode;
      container.style.transform = prop;
      container.style.transition = '0.5s';

      var nextGenreName = nextEl.getAttribute('id');
      state.activeGenre = nextGenreName;

      renderMovie(state[nextGenreName]);
      nextEl.focus();
    }
  }
  if (keyCode === 'ArrowLeft') {
    if (prevEl !== null) {
      var prop2 = [
        'translateX(',
        '100',
        'px)'
      ].join('');

      var prevGenreName = prevEl.getAttribute('id');
      state.activeGenre = prevGenreName;

      renderMovie(state[prevGenreName]);

      var container2 = prevEl.parentNode;
      container2.style.transform = prop2;
      container2.style.transition = '0.5s';
      prevEl.focus();
    }
  }
  if (keyCode === 'ArrowDown') {
    state.activeState = 'movies';
    state.lastActiveElements.fromGenresToMovies = document.activeElement;
    document.activeElement.blur();
    console.log(state.lastActiveElements);
    router.routeFromGenreToMovies(elements.moviesContainer, state.lastActiveElements.fromMoviesToGenres);
  }
  if (keyCode === 'ArrowUp') {
    state.lastActiveElements.fromGenresToNav = document.activeElement;
    document.activeElement.blur();
    console.log(state.lastActiveElements);
    router.routeFromGenresToNav(state.lastActiveElements.fromNavToGenres);
  }
}

function renderMoviesList(keyCode, prevEl, nextEl) {
  if (keyCode === 'ArrowRight') {
    if (nextEl !== null) {
      renderSwitchMovie(nextEl);
      nextEl.focus();
    }
  }
  if (keyCode === 'ArrowLeft') {
    if (prevEl !== null) {
      renderSwitchMovie(prevEl);
      prevEl.focus();
    }
  }
  if (keyCode === 'ArrowUp') {
    console.log(document.activeElement);
    state.lastActiveElements.fromMoviesToGenres = document.activeElement;
    document.activeElement.blur();
    router.routeFromMovieToGenre(state.lastActiveElements.fromGenresToMovies);
  }
}

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
    renderNavigationMenu(e.code, prevNavEl, nextNavEl);
  });

  elements.genresContainer.addEventListener('keydown', function(e) {
    e.stopImmediatePropagation();
    var active = e.target;
    var prevGenreEl = active.previousElementSibling;
    var nextGenreEl = active.nextElementSibling;
    renderGenresList(e.code, prevGenreEl, nextGenreEl);
  });

  elements.moviesContainer.addEventListener('keydown', function(e) {
    e.stopImmediatePropagation();
    var active = e.target;
    var prevMovieEl = active.previousElementSibling;
    var nextMovieEl = active.nextElementSibling;
    renderMoviesList(e.code, prevMovieEl, nextMovieEl);
  });
});
