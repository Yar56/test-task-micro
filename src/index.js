// eslint-disable-next-line no-unused-vars
var state = new Object({
  detective: [
    {
      name: 'Достать ножи', countryAndYear: 'США, 2019', genre: 'Детектив, Комедия', rating: '16+', IMDb: 'IMDb: 7.9', kinopoisk: 'Кинопоиск: 8.0', 'pathImg': './assets/detective/knifes.jpeg'
    },
    {
      name: 'Шестое чувство', countryAndYear: 'США, 1999',genre: 'Детектив, Фэнтези', rating: '12+', IMDb: 'IMDb: 8.1', kinopoisk: 'Кинопоиск: 8.2', 'pathImg': './assets/detective/six-sense.jpeg'
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
      name: 'Форрест Гамп', countryAndYear: 'США, 1994', genre: 'драма, мелодрама', rating: '12+', IMDb: 'IMDb: 8.8', kinopoisk: 'Кинопоиск: 8.9', 'pathImg': './assets/melodramma/forest.jpeg'
    },
    {
      name: 'Титаник', countryAndYear: 'США, 1997', genre: 'мелодрама', rating: '12+', IMDb: 'IMDb: 8.8', kinopoisk: 'Кинопоиск: 8.9', 'pathImg': './assets/melodramma/titanic.jpeg'
    },
    {
      name: 'Великий Гэтсби', countryAndYear: 'Австралия, США, 2013', genre: 'драма, мелодрама', rating: '16+', IMDb: 'IMDb: 7.20', kinopoisk: 'Кинопоиск: 7.9', 'pathImg': './assets/melodramma/gatsby.jpeg'
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
  activeState:        'navigation', // genres, movies
  lastActiveElements: {
    fromNavToGenres:    null,
    fromGenresToMovies: null,
    fromMoviesToGenres: null,
    fromGenresToNav:    null
  }
});


var keys = ['ArrowUp','ArrowDown','ArrowLeft', 'ArrowRight'];

var elements = {
  navContainer:       document.getElementById('navigation'),
  genresContainer:    document.getElementById('genres'),
  navElements:        document.getElementsByClassName('content-icon'),
  genresListElements: document.getElementsByTagName('li'),
  moviesContainer:    document.getElementById('moviesContainer'),
  movies:             document.getElementsByClassName('movieImg-wrapper__item')
};
function handleGenres(genresContainer) {
  genresContainer.addEventListener('keydown', function(e) {
    e.stopPropagation();
    var active = e.target;
    var prevGenreEl = active.previousElementSibling;
    var nextGenreEl = active.nextElementSibling;
    renderGenresList(e.code, prevGenreEl, nextGenreEl);
  });
}


function routeToGenres(genres, lastActiveElement) {
  elements.moviesContainer.style.display = 'flex';
  if (lastActiveElement === null) {
    genres[0].focus();
  } else {
    lastActiveElement.focus();
  }
}
function routeToMovies(movies, lastActiveElement) {
  if (lastActiveElement === null) {
    movies[0].focus();
  } else {
    lastActiveElement.focus();
  }
}

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
    routeToGenres(elements.genresListElements, state.lastActiveElements.fromMoviesToGenres);
  }
}

function renderGenresList(keyCode, prevEl, nextEl) {

  if (keyCode === 'ArrowRight') {
    if (nextEl !== null) {
      console.log(nextEl.offsetLeft);
      var prop = [
        'translateX(-',
        '100',
        'px)'
      ].join('');

      var container = nextEl.parentNode;

      container.style.transform = prop;
      container.style.transition = '0.5s';
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

      var container2 = prevEl.parentNode;

      container2.style.transform = prop2;
      container2.style.transition = '0.5s';
      prevEl.focus();
    }
  }
  if (keyCode === 'ArrowDown') {
    state.activeState = 'movies';
    state.lastActiveElements.fromNavToGenres = document.activeElement;
    document.activeElement.blur();
    routeToMovies(elements.movies, state.lastActiveElements.fromMoviesToGenres);
  }
}

function renderMoviesList(keyCode, prevEl, nextEl) {
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
}

document.addEventListener('keydown', function(e) {
  if (keys.indexOf(e.code) > -1) {
    e.preventDefault();
  }
  if (e.code === 'ArrowDown') {
    elements.navElements[0].focus();
  }

  elements.navContainer.addEventListener('keydown', function(e) {
    e.stopPropagation();
    var active = e.target;
    var prevNavEl = active.previousElementSibling;
    var nextNavEl = active.nextElementSibling;
    renderNavigationMenu(e.code, prevNavEl, nextNavEl);
  });

  handleGenres(elements.genresContainer);


  elements.moviesContainer.addEventListener('keydown', function(e) {
    e.stopPropagation();
    var active = e.target;
    var prevMovieEl = active.previousElementSibling;
    var nextMovieEl = active.nextElementSibling;
    renderMoviesList(e.code, prevMovieEl, nextMovieEl);
  });
});
