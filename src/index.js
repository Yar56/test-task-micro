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
  menubarActive: 'inactive'
});

var elements = {
  navElements: document.getElementsByClassName('content')
};

Array.from(elements.navElements).forEach(function(el) {
  el.addEventListener('focus', function(e) {
    console.log(e);
    var imgActive = e.target.children[0];
    var img = e.target.children[1];
    // console.log(img)
    if (state.menubarActive === 'inactive') {
      state.menubarActive = 'active';
    }
    renderNavIcon(state.menubarActive, img, imgActive);
  });
  el.addEventListener('blur', function(e) {
    var imgActive = e.target.children[0];
    var img = e.target.children[1];
    state.menubarActive = 'inactive';
    renderNavIcon(state.menubarActive, img, imgActive);
  });
});

function renderNavIcon(status, element, activeElement) {
  if (status === 'active') {
    activeElement.style.display = 'block';
    activeElement.style['box-shadow'] = '0 0 17px rgba(60, 60, 240, 1)';
    activeElement.style['border-radius'] = '50%';
  } else if (status === 'inactive') {
    activeElement.style.display = 'none';
  }
}
