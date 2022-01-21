class App {
  constructor () {
    this.url = "https://swapi.dev/api/people/"; // api url
    this.name = [] // массив для фильмов
    this.page = 0 // текущая страница
    this.limit = 10 // количество фильмов на странице

    this.elements = {
      list: document.getElementById('ground'),
      //pageNumber: document.getElementById('page_number'),
      prevButton: document.getElementById('prev'),
      nextButton: document.getElementById('next')
    }
  }

  // Внутренняя функция инициализации
  async init () {
    APP.name = await fetch(APP.url)
      .then(res => res.json())
      .catch(() => [])
    console.log('Запросили один раз весь список имен, сохранили.')

    // Показываем первую страницу
    APP.showNames()
    // Регистрируем клики по кнопкам навигации
    this._resisterListeners()
  }

  // Главная фукнция, отображает фильмы постранично
  showNames (dir = 'next') {
    dir === 'next' ? APP.page++ : APP.page--
    APP.elements.list.innerHTML = ''
    //APP.elements.pageNumber.textContent = APP.page
    const items = APP.movies.filter((i, j) => (j >= APP.limit * (APP.page - 1)) && (j < APP.limit * APP.page))
    console.log('Показываем страницу:', APP.page, ', элементы:', APP.limit * (APP.page - 1), APP.limit * APP.page)
    items.forEach(item => {
      const el = APP._createElement('div', 'movie')
      el.innerHTML = `<div class="title">${item.Title} (${item.IMDB_Rating})</div>`
      APP.elements.list.APPendChild(el)
    })
  }

  // Вспомогательная функция по созданию элементов
  _createElement (tagName = 'div', className = 'name') {
    const el = document.createElement(tagName)
    el.classList.add(className)
    return el
  }

  // Регистрация кликов по кнопкам
  _resisterListeners () {
    APP.elements.prevButton.addEventListener('click', () => {
      APP.showMovies('prev')
    })
    APP.elements.nextButton.addEventListener('click', () => {
      APP.showMovies('next')
    })
  }
}

// Инициализация кода по готовности страницы
document.addEventListener("DOMContentLoaded", () => {
  console.log('Инициализация APP')
  window.APP = new APP()
  APP.init()
})