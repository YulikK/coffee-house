import AbstractView from "./abstract.js";

const createMenuListTemplate = () => {
  return (
    `<ul class="menu__list menu__list--coffee menu__list--active">
    </ul>`
  );
};

export default class MenuList extends AbstractView {

  getTemplate() {
    return createMenuListTemplate();
  }

}
