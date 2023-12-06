import {CARD_COUNT_PER_STEP_DESKTOP, CARD_COUNT_PER_STEP_TABLET, tabletWidth} from "../const.js";
import FilterView from "../view/filter.js";
import MenuCardView from "../view/card.js";
import MenuListView from "../view/menu-list.js";
// import NoFilmView from "../view/no-film.js";
import MenuSectionView from "../view/menu-section.js";
import ShowMoreButtonView from "../view/show-more-button.js";
import MenuCardDetailsView from "../view/card-details.js";
import {render, hideDetails, showDetails, remove} from "../utils/render.js";
import {FilterType} from "../const.js";
// import {sortByDate, sortByRating} from "../utils/film-card.js";

export default class MenuList {
  constructor(menuContainer, filterContainer, menuDetailsContainer) {
    this._menuContainer = menuContainer;
    this._filterContainer = filterContainer;
    this._menuDetailsContainer = menuDetailsContainer;
    this._menuListComponent = new MenuListView();
    this._menuContainerComponent = new MenuSectionView();
    this._showMoreButtonComponent = new ShowMoreButtonView();
    // this._noFilmComponent = new NoFilmView();
    this._filterComponent = new FilterView();
    if(window.matchMedia(`(max-width: 768px`).matches) {
      this._cardStep = CARD_COUNT_PER_STEP_TABLET;
    } else {
      this._cardStep = CARD_COUNT_PER_STEP_DESKTOP;
    }
    this._cardStep = CARD_COUNT_PER_STEP_DESKTOP;
    this._renderedMenuCount = this._cardStep;
    this._currentFilterType = FilterType.COFFEE;

    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
  }

  init(menu) {
    this._boardMenu = menu.slice();
    this._sourcedBoardMenu = menu.slice();

    this._renderFilter();

    render(this._menuContainer, this._menuContainerComponent);
    render(this._menuContainerComponent, this._menuListComponent);

    this._renderMenuList();
  }

  _filterMenu(filterType) {
    switch (filterType) {
      case FilterType.COFFEE:
        this._boardMenu = this._sourcedBoardMenu.filter((card) => card.category == "coffee");
        break;
      case FilterType.TEA:
        this._boardMenu = this._sourcedBoardMenu.filter((card) => card.category == "tea");
        break;
        case FilterType.DESSERT:
        this._boardMenu = this._sourcedBoardMenu.filter((card) => card.category == "dessert");
        break;
    }

    this._currentFilterType = filterType;
  }

  _setActiveFilterElement(filterType) {
    const filterComponent = this._filterComponent.getElement();
    const oldFilterElement = filterComponent.querySelector(`a[data-filter-type="${this._currentFilterType}"]`);
    const newFilterElement = filterComponent.querySelector(`a[data-filter-type="${filterType}"]`);
    oldFilterElement.classList.remove(`button__filter--active`);
    newFilterElement.classList.add(`button__filter--active`);
  }

  _handleFilterTypeChange(filterType) {
    if (this._currentFilterType === filterType) {
      return;
    }

    this._setActiveFilterElement(filterType);
    this._filterMenu(filterType);
    this._clearMenuList();
    this._renderMenuList();
  }

  _renderFilter() {
    this._filterMenu(this._currentFilterType);
    render(this._filterContainer, this._filterComponent);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);
  }

  _renderMenuCard(menuCard) {
    const menuCardComponent = new MenuCardView(menuCard);
    const menuCardDetailsComponent = new MenuCardDetailsView(menuCard);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        evt.preventDefault();
        hideDetails(this._menuDetailsContainer, menuCardDetailsComponent);
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    const onMenuCardClick = () => {
      showDetails(this._menuDetailsContainer, menuCardDetailsComponent);
      document.addEventListener(`keydown`, onEscKeyDown);
    };

    const onCloseButtonClick = () => {
      hideDetails(this._menuDetailsContainer, menuCardDetailsComponent);
      document.removeEventListener(`keydown`, onEscKeyDown);
    };

    menuCardComponent.setMenuCardClickHandler(onMenuCardClick);

    menuCardDetailsComponent.setCloseClickHandler(onCloseButtonClick);
    render(this._menuListComponent, menuCardComponent);
  }

  _renderMenuCards(from, to) {
    this._boardMenu
      .slice(from, to)
      .forEach((boardMenu) => this._renderMenuCard(boardMenu));
  }

  // _renderNoFilm() {
  //   render(this._filmsListContainerComponent, this._noFilmComponent);
  // }

  _handleShowMoreButtonClick() {
    this._renderMenuCards(this._renderedMenuCount, this._renderedMenuCount + this._cardStep);
    this._renderedMenuCount += this._cardStep;
    if (this._renderedMenuCount >= this._boardMenu.length) {
      remove(this._showMoreButtonComponent);
    }

  }

  _renderShowMoreButton() {
    render(this._menuContainerComponent, this._showMoreButtonComponent);
    this._showMoreButtonComponent.setClickHandler(this._handleShowMoreButtonClick);
  }

  _clearMenuList() {
    this._menuListComponent.getElement().innerHTML = ``;
    this._renderedMenuCount = this._cardStep;
  }

  _renderMenuList() {
    this._renderMenuCards(0, Math.min(this._boardMenu.length, this._cardStep));
    //!! if (this._boardMenu.length > this._cardStep) {
      this._renderShowMoreButton();
    // }
  }

  // _renderBoard() {

  //   if (this._boardFilms.length === 0) {
  //     this._renderNoFilm();
  //     return;
  //   }

  //   this._renderFilmList();
  // }
}
