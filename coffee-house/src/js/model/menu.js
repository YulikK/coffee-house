export default class Menu{
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
