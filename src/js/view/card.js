import AbstractView from "./abstract.js";

export const createCardMenuTemplate = (menuCard) => {
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

export default class CardMenu extends AbstractView {
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