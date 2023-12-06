// import {humanizeFilmDuration, humanizeFilmDate} from "../utils/film-card.js";
// import {EMOTIONS} from "../const.js";
import AbstractView from "./abstract.js";

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

export default class MenuCardDetails extends AbstractView {
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
    this.getElement().querySelector(`.price__current`).textContent = '$' + newPrice;
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

