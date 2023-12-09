import AbstractView from "./abstract.js";

const createMenuSectionTemplate = () => {
  return (
    `<section class="menu">
    </section>`
  );
};

export default class MenuSection extends AbstractView {

  getTemplate() {
    return createMenuSectionTemplate();
  }

}
