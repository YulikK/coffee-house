"use strict";
(self["webpackChunkcoffee_house"] = self["webpackChunkcoffee_house"] || []).push([["src_js_menu-list_js"],{

/***/ "./src/js/const.js":
/*!*************************!*\
  !*** ./src/js/const.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CARD_COUNT_PER_STEP_DESKTOP: () => (/* binding */ CARD_COUNT_PER_STEP_DESKTOP),
/* harmony export */   CARD_COUNT_PER_STEP_TABLET: () => (/* binding */ CARD_COUNT_PER_STEP_TABLET),
/* harmony export */   FilterType: () => (/* binding */ FilterType),
/* harmony export */   MenuType: () => (/* binding */ MenuType),
/* harmony export */   tabletWidth: () => (/* binding */ tabletWidth),
/* harmony export */   tabletWidthCount: () => (/* binding */ tabletWidthCount)
/* harmony export */ });
const CARD_COUNT_PER_STEP_DESKTOP = 50;
const CARD_COUNT_PER_STEP_TABLET = 4;
const FilterType = {
  COFFEE: `coffee`,
  TEA: `tea`,
  DESSERT: `dessert`
};
const MenuType = {
  DESKTOP: `desktop`,
  MOBILE: `mobile`
};
const tabletWidth = '768px';
const tabletWidthCount = 768;

/***/ }),

/***/ "./src/js/menu-list.js":
/*!*****************************!*\
  !*** ./src/js/menu-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock_products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/products.json */ "./src/mock/products.json");
/* harmony import */ var _model_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/menu.js */ "./src/js/model/menu.js");
/* harmony import */ var _presenter_menu_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/menu-list.js */ "./src/js/presenter/menu-list.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const.js */ "./src/js/const.js");





const menuModel = new _model_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const siteBodyElement = document.querySelector(`body`);
const pageMainElement = siteBodyElement.querySelector(`.page-menu`);
const filterContainerElement = siteBodyElement.querySelector(`.page-menu__wrapper`);
const screenWidth = window.screen.width
let currentMenuType = screenWidth > _const_js__WEBPACK_IMPORTED_MODULE_3__.tabletWidthCount ? _const_js__WEBPACK_IMPORTED_MODULE_3__.MenuType.DESKTOP : _const_js__WEBPACK_IMPORTED_MODULE_3__.MenuType.MOBILE;

if (pageMainElement !== null) {
  const initMenuData = (data) => {
    const dataCard = data.map(menuModel.adaptToClient);
    menuModel.setMenu(dataCard);
  };

  function onResize(){
    if(window.screen.width <= _const_js__WEBPACK_IMPORTED_MODULE_3__.tabletWidthCount && currentMenuType === _const_js__WEBPACK_IMPORTED_MODULE_3__.MenuType.DESKTOP) {
      currentMenuType = _const_js__WEBPACK_IMPORTED_MODULE_3__.MenuType.MOBILE;
      menuListPresenter.setMenuType(currentMenuType);
      menuListPresenter.update();
    } else if (window.screen.width > _const_js__WEBPACK_IMPORTED_MODULE_3__.tabletWidthCount && currentMenuType === _const_js__WEBPACK_IMPORTED_MODULE_3__.MenuType.MOBILE) {
      currentMenuType = _const_js__WEBPACK_IMPORTED_MODULE_3__.MenuType.DESKTOP;
      menuListPresenter.setMenuType(currentMenuType);
      menuListPresenter.update();
    }
  }
   

  initMenuData(_mock_products_json__WEBPACK_IMPORTED_MODULE_0__);

  const menuListPresenter = 
  new _presenter_menu_list_js__WEBPACK_IMPORTED_MODULE_2__["default"](pageMainElement, 
    filterContainerElement, 
    pageMainElement,
    currentMenuType
    );
  menuListPresenter.init(menuModel.getMenu());
  window.addEventListener('resize', onResize);
}


/***/ }),

/***/ "./src/js/model/menu.js":
/*!******************************!*\
  !*** ./src/js/model/menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
class Menu{
  constructor() {
    this._cards = [];
  }

  setMenu(cards) {
    this._cards = cards.slice();
  }

  getMenu() {
    return this._cards;
  }

  adaptToClient(card) {
    const adaptedCard = Object.assign(
        {},
        card,
        {
          name: card.name,
          description: card.description,
          price: card.price,
          category: card.category,
          photo: card.photo,
          sizes: card.sizes,
          additives: card.additives,
        }
    );
    return adaptedCard;

  }
}


/***/ }),

/***/ "./src/js/presenter/menu-list.js":
/*!***************************************!*\
  !*** ./src/js/presenter/menu-list.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuList)
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/js/const.js");
/* harmony import */ var _view_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/filter.js */ "./src/js/view/filter.js");
/* harmony import */ var _view_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/card.js */ "./src/js/view/card.js");
/* harmony import */ var _view_menu_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/menu-list.js */ "./src/js/view/menu-list.js");
/* harmony import */ var _view_menu_section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/menu-section.js */ "./src/js/view/menu-section.js");
/* harmony import */ var _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/show-more-button.js */ "./src/js/view/show-more-button.js");
/* harmony import */ var _view_card_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/card-details.js */ "./src/js/view/card-details.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/render.js */ "./src/js/utils/render.js");










class MenuList {
  constructor(menuContainer, filterContainer, menuDetailsContainer, currentMenuType) {
    this._menuContainer = menuContainer;
    this._filterContainer = filterContainer;
    this._menuDetailsContainer = menuDetailsContainer;
    this._menuListComponent = new _view_menu_list_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._menuContainerComponent = new _view_menu_section_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._showMoreButtonComponent = new _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this._filterComponent = new _view_filter_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._currentMenuType = currentMenuType;
    if(this._currentMenuType == _const_js__WEBPACK_IMPORTED_MODULE_0__.MenuType.MOBILE) {
      this._cardStep = _const_js__WEBPACK_IMPORTED_MODULE_0__.CARD_COUNT_PER_STEP_TABLET;
    } else {
      this._cardStep = _const_js__WEBPACK_IMPORTED_MODULE_0__.CARD_COUNT_PER_STEP_DESKTOP;
    }
    this._renderedMenuCount = this._cardStep;
    this._currentFilterType = _const_js__WEBPACK_IMPORTED_MODULE_0__.FilterType.COFFEE;

    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
  }

  init(menu) {
    this._boardMenu = menu.slice();
    this._sourcedBoardMenu = menu.slice();

    this._renderFilter();

    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._menuContainer, this._menuContainerComponent);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._menuContainerComponent, this._menuListComponent);

    this._renderMenuList();
  }
  setMenuType(type) {
    this._currentMenuType = type;
    if(this._currentMenuType == _const_js__WEBPACK_IMPORTED_MODULE_0__.MenuType.MOBILE) {
      this._cardStep = _const_js__WEBPACK_IMPORTED_MODULE_0__.CARD_COUNT_PER_STEP_TABLET;
    } else {
      this._cardStep = _const_js__WEBPACK_IMPORTED_MODULE_0__.CARD_COUNT_PER_STEP_DESKTOP;
    }
  }

  update(){
    this._clearMenuList();
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.remove)(this._showMoreButtonComponent);
    this._renderMenuList();
  }

  _filterMenu(filterType) {
    switch (filterType) {
      case _const_js__WEBPACK_IMPORTED_MODULE_0__.FilterType.COFFEE:
        this._boardMenu = this._sourcedBoardMenu.filter((card) => card.category == "coffee");
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_0__.FilterType.TEA:
        this._boardMenu = this._sourcedBoardMenu.filter((card) => card.category == "tea");
        break;
        case _const_js__WEBPACK_IMPORTED_MODULE_0__.FilterType.DESSERT:
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
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._filterContainer, this._filterComponent);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);
  }

  _renderMenuCard(menuCard) {
    const menuCardComponent = new _view_card_js__WEBPACK_IMPORTED_MODULE_2__["default"](menuCard);
    const menuCardDetailsComponent = new _view_card_details_js__WEBPACK_IMPORTED_MODULE_6__["default"](menuCard);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        evt.preventDefault();
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.hideDetails)(this._menuDetailsContainer, menuCardDetailsComponent);
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    const onMenuCardClick = () => {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.showDetails)(this._menuDetailsContainer, menuCardDetailsComponent);
      document.addEventListener(`keydown`, onEscKeyDown);
    };

    const onCloseButtonClick = () => {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.hideDetails)(this._menuDetailsContainer, menuCardDetailsComponent);
      document.removeEventListener(`keydown`, onEscKeyDown);
    };

    menuCardComponent.setMenuCardClickHandler(onMenuCardClick);
    menuCardDetailsComponent.setCloseClickHandler(onCloseButtonClick);
    menuCardDetailsComponent.setControllerClickHandler(onCloseButtonClick);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._menuListComponent, menuCardComponent);
  }

  _renderMenuCards(from, to) {
    this._boardMenu
      .slice(from, to)
      .forEach((boardMenu) => this._renderMenuCard(boardMenu));
  }

  _handleShowMoreButtonClick() {
    this._renderMenuCards(this._renderedMenuCount, this._renderedMenuCount + this._cardStep);
    this._renderedMenuCount += this._cardStep;
    if (this._renderedMenuCount >= this._boardMenu.length) {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.remove)(this._showMoreButtonComponent);
    }

  }

  _renderShowMoreButton() {
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._menuContainerComponent, this._showMoreButtonComponent);
    this._showMoreButtonComponent.setClickHandler(this._handleShowMoreButtonClick);
  }

  _clearMenuList() {
    this._menuListComponent.getElement().innerHTML = ``;
    this._renderedMenuCount = this._cardStep;
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.remove)(this._showMoreButtonComponent);
  }

  _renderMenuList() {
    this._renderMenuCards(0, Math.min(this._boardMenu.length, this._cardStep));
    if (this._boardMenu.length > this._cardStep) {
      this._renderShowMoreButton();
    }
  }
}


/***/ }),

/***/ "./src/js/utils/render.js":
/*!********************************!*\
  !*** ./src/js/utils/render.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   hideDetails: () => (/* binding */ hideDetails),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   showDetails: () => (/* binding */ showDetails)
/* harmony export */ });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/js/view/abstract.js");


const render = (container, child) => {

  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  container.append(child);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const onScrollBody = () =>{
  const bodyElement = document.querySelector(`body`);
  bodyElement.classList.remove(`body--no-scroll`);
}

const offScrollBody = () =>{
  const bodyElement = document.querySelector(`body`);
  bodyElement.classList.add(`body--no-scroll`);
}

const showDetails = (container, detailsComponent) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }
  if (detailsComponent instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    detailsComponent = detailsComponent.getElement();
  }
  container.appendChild(detailsComponent);
  // container.classList.add(`hide-overflow`);
  offScrollBody();
};

const hideDetails = (container, detailsComponent) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }
  if (detailsComponent instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    detailsComponent = detailsComponent.getElement();
  }
  container.removeChild(detailsComponent);
  onScrollBody();
  // container.classList.remove(`hide-overflow`);
};

const remove = (component) => {
  if (component === null) {
    return;
  }

  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};

/***/ }),

/***/ "./src/js/view/abstract.js":
/*!*********************************!*\
  !*** ./src/js/view/abstract.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Abstract)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/js/utils/render.js");


const SHAKE_ANIMATION_TIMEOUT = 600;

class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }
    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  shake(callback) {
    this.getElement().style.animation = `shake ${SHAKE_ANIMATION_TIMEOUT / 1000}s`;
    setTimeout(() => {
      this.getElement().style.animation = ``;
      callback();
    }, SHAKE_ANIMATION_TIMEOUT);
  }
}


/***/ }),

/***/ "./src/js/view/card-details.js":
/*!*************************************!*\
  !*** ./src/js/view/card-details.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuCardDetails)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/js/view/abstract.js");


const createSizeTemplate = (sizeName, sizeProp, checked) => {
  const {size} = sizeProp
  const addPrice = sizeProp.add_price;
  return (
    `<li class="control__item">
      <input id="size-${sizeName}" type="radio" name="size" class="control__input" data-price-add="${addPrice}" ${checked}>
      <label for="size-${sizeName}" class="control__button button button__control button__control--active">
        <span class="control__mark">${sizeName}</span>
        <span class="control__title">${size}</span>
      </label>
    </li>`
  );

};
const createSizesTemplate = (sizes) => {
  const sizeTemplateS = createSizeTemplate('S', sizes.s, 'checked');
  const sizeTemplateM = createSizeTemplate('M', sizes.m, '');
  const sizeTemplateL = createSizeTemplate('L', sizes.l, '');
  return (
    `<div class="card-modal__controller-wrapper control">
      <p class="control__caption">Size</p>
      <div class="control__wrapper">
        <ul class="control__list">
          ${sizeTemplateS}
          ${sizeTemplateM}
          ${sizeTemplateL}
        </ul>
      </div>
    </div>`
  );

};

const createAdditiveTemplate = (index, additive) => {
  const {name} = additive;
  const addPrice = additive.add_price;
  return (
    `<li class="control__item">
      <input id="additives-${name}" type="checkbox" name="additives" class="control__input" data-price-add="${addPrice}">
      <label for="additives-${name}" class="control__button button button__control button__control--active">
        <span class="control__mark">${index}</span>
        <span class="control__title">${name}</span>
      </label>
    </li>`
  );

};

const createAdditivesTemplate = (additives) => {
  const additiveTemplate = additives
  .map((additive, index) => createAdditiveTemplate(index + 1, additive))
  .join(``);
  return (
    `<div class="card-modal__controller-wrapper control control--additives-coffee control--active">
      <p class="control__caption">Additives</p>
      <div class="control__wrapper">
        <ul class="control__list">
          ${additiveTemplate}
        </ul>
      </div>
    </div>`
  );

};

const createMenuCardDetailsTemplate = (menuCard) => {
  const {name, description, price, photo, category, sizes, additives} = menuCard;
  const sizesTemplate = createSizesTemplate(sizes);
  const additivesTemplate = createAdditivesTemplate(additives);

  return (
    `<section class="card-modal">
      <div class="card-modal__wrapper">
        <div class="card-modal__image-wrapper">
          <img class="card-modal__image" src="img/png/${category}-${photo}.png" width="340" height="340" alt="${name}">
        </div>
        <div class="card-modal__information-wrapper">
          <div class="card-modal__caption-wrapper">
            <h3 class="card-modal__name">${name}</h3>
            <p class="card-modal__description">${description}</p>
          </div>
          ${sizesTemplate}
          ${additivesTemplate} 
          <div class="card-modal__price-wrapper price">
            <p class="card-modal__price">Total:</p>
            <p class="card-modal__price price__current">$${price}</p>
          </div>
          <div class="card-modal__alert">
            <img class="card-modal__alert-icon" src="img/svg/info-empty.svg" width="16" height="16" alt="alert information">
            <p class="card-modal__alert-information">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
          </div>
          <a class="card-modal__button button button__close-modal">Close</a>
        </div>
      </div>
    </section>`);
};

class MenuCardDetails extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(menuCard) {
    super();
    this._menuCard = menuCard;
    this._closeClickHandler = this._closeClickHandler.bind(this);
    this._controllerClickHandler = this._controllerClickHandler.bind(this);
  }

  getTemplate() {
    return createMenuCardDetailsTemplate(this._menuCard);
  }

  _closeClickHandler(evt) {
    if (!evt.target.classList.contains('button__close-modal') && !evt.target.classList.contains('card-modal')){
      return;
    }
    evt.preventDefault();
    this._callback.editClick();
    evt.stopPropagation();
  }

  _controllerClickHandler(evt) {
    let newPrice = Number(this._menuCard.price);
    const controlItemsChecked = this.getElement().querySelectorAll(`input[class=control__input]:checked`);
    controlItemsChecked
    .forEach((controlItem) => {
      newPrice += Number(controlItem.getAttribute('data-price-add'));
    });
    this.getElement().querySelector(`.price__current`).textContent = '$' + newPrice.toFixed(2);
  }

  setCloseClickHandler(callback) {
    this._callback.editClick = callback;
    this.getElement().querySelector(`.button__close-modal`).addEventListener(`click`, this._closeClickHandler);
    this.getElement().addEventListener(`click`, this._closeClickHandler);
  }

  setControllerClickHandler(callback) {
    this._callback.editClick = callback;
    const controlItems = this.getElement().querySelectorAll(`input[class=control__input]`);
    controlItems
    .forEach((controlItem) => controlItem.addEventListener(`click`, this._controllerClickHandler));
    
  }
}



/***/ }),

/***/ "./src/js/view/card.js":
/*!*****************************!*\
  !*** ./src/js/view/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCardMenuTemplate: () => (/* binding */ createCardMenuTemplate),
/* harmony export */   "default": () => (/* binding */ CardMenu)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/js/view/abstract.js");


const createCardMenuTemplate = (menuCard) => {
  const {name, description, price, photo, category} = menuCard;

  return (
    `<li class="menu__item card">
      <div class="card__image-wrapper">
        <img class="card__image" src="img/png/${category}-${photo}.png" width="340" height="340" alt="${name}">
      </div>
      <div class="card__information-wrapper">
        <h3 class="card__name">${name}</h3>
        <p class="card__description">${description}</p>
        <p class="card__price">$${price}</p>
      </div>
    </li>`
  );
};

class CardMenu extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(cardMenu) {
    super();
    this._cardMenu = cardMenu;
    this._cardMenuClickHandler = this._cardMenuClickHandler.bind(this);
  }

  getTemplate() {
    return createCardMenuTemplate(this._cardMenu);
  }

  setMenuCardClickHandler(callback) {
    this._callback.cardMenuClick = callback;
    this.getElement().addEventListener(`click`, this._cardMenuClickHandler);
  }


  _cardMenuClickHandler(evt) {
    evt.preventDefault();
    this._callback.cardMenuClick();
  }

}

/***/ }),

/***/ "./src/js/view/filter.js":
/*!*******************************!*\
  !*** ./src/js/view/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Filter)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/js/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/js/const.js");



const createFilterTemplate = () => {
  return (
    `<ul class="page-menu__filter filter">
        <li class="filter__item">
          <a href="#" class="filter__button button button__filter button__filter--coffee button__filter--active" data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.COFFEE}">
            <img class="filter__icon" src="img/svg/coffee.svg" width="16" height="24" alt="filter: coffee" data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.COFFEE}">
            <span class="filter__title" data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.COFFEE}">Coffee</span>
          </a>
        </li>
        <li class="filter__item">
          <a href="#" class="filter__button button button__filter button__filter--tea" data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.TEA}">
            <img class="filter__icon" src="img/svg/tea.svg" width="16" height="24" alt="filter: tea" data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.TEA}">
            <span class="filter__title" data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.TEA}">Tea</span>
          </a>
        </li>
        <li class="filter__item">
          <a href="#" class="filter__button button button__filter button__filter--dessert" data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.DESSERT}">
            <img class="filter__icon" src="img/svg/desert.svg" width="16" height="24" alt="filter: desert" data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.DESSERT}">
            <span class="filter__title" data-filter-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterType.DESSERT}">Dessert</span>
          </a>
        </li>
      </ul>
    </div>`
  );
};

class Filter extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createFilterTemplate();
  }

  _filterTypeChangeHandler(evt) {

    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.dataset.filterType);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`click`, this._filterTypeChangeHandler);
  }
}


/***/ }),

/***/ "./src/js/view/menu-list.js":
/*!**********************************!*\
  !*** ./src/js/view/menu-list.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuList)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/js/view/abstract.js");


const createMenuListTemplate = () => {
  return (
    `<ul class="menu__list menu__list--coffee menu__list--active">
    </ul>`
  );
};

class MenuList extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return createMenuListTemplate();
  }

}


/***/ }),

/***/ "./src/js/view/menu-section.js":
/*!*************************************!*\
  !*** ./src/js/view/menu-section.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuSection)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/js/view/abstract.js");


const createMenuSectionTemplate = () => {
  return (
    `<section class="menu">
    </section>`
  );
};

class MenuSection extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return createMenuSectionTemplate();
  }

}


/***/ }),

/***/ "./src/js/view/show-more-button.js":
/*!*****************************************!*\
  !*** ./src/js/view/show-more-button.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowMoreButton)
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/js/view/abstract.js");


const createShowMoreButtonTemplate = () => {
  return (
    `<a class="menu__refresh button button__refresh">
      <svg id="refresh" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Ellipse" d="M21.8883 13.5C21.1645 18.3113 17.013 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.1006 2 19.6248 4.46819 21.1679 8" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Ellipse_2" d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>`
  );
};

class ShowMoreButton extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreButtonTemplate();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}


/***/ }),

/***/ "./src/mock/products.json":
/*!********************************!*\
  !*** ./src/mock/products.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Irish coffee","description":"Fragrant black coffee with Jameson Irish whiskey and whipped milk","price":"7.00","category":"coffee","photo":"1","sizes":{"s":{"size":"200 ml","add_price":"0.00"},"m":{"size":"300 ml","add_price":"0.50"},"l":{"size":"400 ml","add_price":"1.00"}},"additives":[{"name":"Sugar","add_price":"0.50"},{"name":"Cinnamon","add_price":"0.50"},{"name":"Syrup","add_price":"0.50"}]},{"name":"Kahlua coffee","description":"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk","price":"7.00","category":"coffee","photo":"2","sizes":{"s":{"size":"200 ml","add_price":"0.00"},"m":{"size":"300 ml","add_price":"0.50"},"l":{"size":"400 ml","add_price":"1.00"}},"additives":[{"name":"Sugar","add_price":"0.50"},{"name":"Cinnamon","add_price":"0.50"},{"name":"Syrup","add_price":"0.50"}]},{"name":"Honey raf","description":"Espresso with frothed milk, cream and aromatic honey","price":"5.50","category":"coffee","photo":"3","sizes":{"s":{"size":"200 ml","add_price":"0.00"},"m":{"size":"300 ml","add_price":"0.50"},"l":{"size":"400 ml","add_price":"1.00"}},"additives":[{"name":"Sugar","add_price":"0.50"},{"name":"Cinnamon","add_price":"0.50"},{"name":"Syrup","add_price":"0.50"}]},{"name":"Ice cappuccino","description":"Cappuccino with soft thick foam in summer version with ice","price":"5.00","category":"coffee","photo":"4","sizes":{"s":{"size":"200 ml","add_price":"0.00"},"m":{"size":"300 ml","add_price":"0.50"},"l":{"size":"400 ml","add_price":"1.00"}},"additives":[{"name":"Sugar","add_price":"0.50"},{"name":"Cinnamon","add_price":"0.50"},{"name":"Syrup","add_price":"0.50"}]},{"name":"Espresso","description":"Classic black coffee","price":"4.50","category":"coffee","photo":"5","sizes":{"s":{"size":"200 ml","add_price":"0.00"},"m":{"size":"300 ml","add_price":"0.50"},"l":{"size":"400 ml","add_price":"1.00"}},"additives":[{"name":"Sugar","add_price":"0.50"},{"name":"Cinnamon","add_price":"0.50"},{"name":"Syrup","add_price":"0.50"}]},{"name":"Latte","description":"Espresso coffee with the addition of steamed milk and dense milk foam","price":"5.50","category":"coffee","photo":"6","sizes":{"s":{"size":"200 ml","add_price":"0.00"},"m":{"size":"300 ml","add_price":"0.50"},"l":{"size":"400 ml","add_price":"1.00"}},"additives":[{"name":"Sugar","add_price":"0.50"},{"name":"Cinnamon","add_price":"0.50"},{"name":"Syrup","add_price":"0.50"}]},{"name":"Latte macchiato","description":"Espresso with frothed milk and chocolate","price":"5.50","category":"coffee","photo":"7","sizes":{"s":{"size":"200 ml","add_price":"0.00"},"m":{"size":"300 ml","add_price":"0.50"},"l":{"size":"400 ml","add_price":"1.00"}},"additives":[{"name":"Sugar","add_price":"0.50"},{"name":"Cinnamon","add_price":"0.50"},{"name":"Syrup","add_price":"0.50"}]},{"name":"Coffee with cognac","description":"Fragrant black coffee with cognac and whipped cream","price":"6.50","category":"coffee","photo":"8","sizes":{"s":{"size":"200 ml","add_price":"0.00"},"m":{"size":"300 ml","add_price":"0.50"},"l":{"size":"400 ml","add_price":"1.00"}},"additives":[{"name":"Sugar","add_price":"0.50"},{"name":"Cinnamon","add_price":"0.50"},{"name":"Syrup","add_price":"0.50"}]},{"name":"Moroccan","description":"Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint","price":"4.50","category":"tea","photo":"1","sizes":{"s":{"size":"200 ml","add_price":"0.00"},"m":{"size":"300 ml","add_price":"0.50"},"l":{"size":"400 ml","add_price":"1.00"}},"additives":[{"name":"Sugar","add_price":"0.50"},{"name":"Lemon","add_price":"0.50"},{"name":"Syrup","add_price":"0.50"}]},{"name":"Ginger","description":"Original black tea with fresh ginger, lemon and honey","price":"5.00","category":"tea","photo":"2","sizes":{"s":{"size":"200 ml","add_price":"0.00"},"m":{"size":"300 ml","add_price":"0.50"},"l":{"size":"400 ml","add_price":"1.00"}},"additives":[{"name":"Sugar","add_price":"0.50"},{"name":"Lemon","add_price":"0.50"},{"name":"Syrup","add_price":"0.50"}]},{"name":"Cranberry","description":"Invigorating black tea with cranberry and honey","price":"5.00","category":"tea","photo":"3","sizes":{"s":{"size":"200 ml","add_price":"0.00"},"m":{"size":"300 ml","add_price":"0.50"},"l":{"size":"400 ml","add_price":"1.00"}},"additives":[{"name":"Sugar","add_price":"0.50"},{"name":"Lemon","add_price":"0.50"},{"name":"Syrup","add_price":"0.50"}]},{"name":"Sea buckthorn","description":"Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon","price":"5.50","category":"tea","photo":"4","sizes":{"s":{"size":"200 ml","add_price":"0.00"},"m":{"size":"300 ml","add_price":"0.50"},"l":{"size":"400 ml","add_price":"1.00"}},"additives":[{"name":"Sugar","add_price":"0.50"},{"name":"Lemon","add_price":"0.50"},{"name":"Syrup","add_price":"0.50"}]},{"name":"Marble cheesecake","description":"Philadelphia cheese with lemon zest on a light sponge cake and red currant jam","price":"3.50","category":"dessert","photo":"1","sizes":{"s":{"size":"50 g","add_price":"0.00"},"m":{"size":"100 g","add_price":"0.50"},"l":{"size":"200 g","add_price":"1.00"}},"additives":[{"name":"Berries","add_price":"0.50"},{"name":"Nuts","add_price":"0.50"},{"name":"Jam","add_price":"0.50"}]},{"name":"Red velvet","description":"Layer cake with cream cheese frosting","price":"4.00","category":"dessert","photo":"2","sizes":{"s":{"size":"50 g","add_price":"0.00"},"m":{"size":"100 g","add_price":"0.50"},"l":{"size":"200 g","add_price":"1.00"}},"additives":[{"name":"Berries","add_price":"0.50"},{"name":"Nuts","add_price":"0.50"},{"name":"Jam","add_price":"0.50"}]},{"name":"Cheesecakes","description":"Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar","price":"4.50","category":"dessert","photo":"3","sizes":{"s":{"size":"50 g","add_price":"0.00"},"m":{"size":"100 g","add_price":"0.50"},"l":{"size":"200 g","add_price":"1.00"}},"additives":[{"name":"Berries","add_price":"0.50"},{"name":"Nuts","add_price":"0.50"},{"name":"Jam","add_price":"0.50"}]},{"name":"Creme brulee","description":"Delicate creamy dessert in a caramel basket with wild berries","price":"4.00","category":"dessert","photo":"4","sizes":{"s":{"size":"50 g","add_price":"0.00"},"m":{"size":"100 g","add_price":"0.50"},"l":{"size":"200 g","add_price":"1.00"}},"additives":[{"name":"Berries","add_price":"0.50"},{"name":"Nuts","add_price":"0.50"},{"name":"Jam","add_price":"0.50"}]},{"name":"Pancakes","description":"Tender pancakes with strawberry jam and fresh strawberries","price":"4.50","category":"dessert","photo":"5","sizes":{"s":{"size":"50 g","add_price":"0.00"},"m":{"size":"100 g","add_price":"0.50"},"l":{"size":"200 g","add_price":"1.00"}},"additives":[{"name":"Berries","add_price":"0.50"},{"name":"Nuts","add_price":"0.50"},{"name":"Jam","add_price":"0.50"}]},{"name":"Honey cake","description":"Classic honey cake with delicate custard","price":"4.50","category":"dessert","photo":"6","sizes":{"s":{"size":"50 g","add_price":"0.00"},"m":{"size":"100 g","add_price":"0.50"},"l":{"size":"200 g","add_price":"1.00"}},"additives":[{"name":"Berries","add_price":"0.50"},{"name":"Nuts","add_price":"0.50"},{"name":"Jam","add_price":"0.50"}]},{"name":"Chocolate cake","description":"Cake with hot chocolate filling and nuts with dried apricots","price":"5.50","category":"dessert","photo":"7","sizes":{"s":{"size":"50 g","add_price":"0.00"},"m":{"size":"100 g","add_price":"0.50"},"l":{"size":"200 g","add_price":"1.00"}},"additives":[{"name":"Berries","add_price":"0.50"},{"name":"Nuts","add_price":"0.50"},{"name":"Jam","add_price":"0.50"}]},{"name":"Black forest","description":"A combination of thin sponge cake with cherry jam and light chocolate mousse","price":"6.50","category":"dessert","photo":"8","sizes":{"s":{"size":"50 g","add_price":"0.00"},"m":{"size":"100 g","add_price":"0.50"},"l":{"size":"200 g","add_price":"1.00"}},"additives":[{"name":"Berries","add_price":"0.50"},{"name":"Nuts","add_price":"0.50"},{"name":"Jam","add_price":"0.50"}]}]');

/***/ })

}]);
//# sourceMappingURL=src_js_menu-list_js.bundle.js.map