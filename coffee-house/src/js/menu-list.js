import mockFile from '../mock/products.json';
import MenuModel from "./model/menu.js";
import MenuListPresenter from "./presenter/menu-list.js";

const menuModel = new MenuModel();
const siteBodyElement = document.querySelector(`body`);
const pageMainElement = siteBodyElement.querySelector(`.page-menu`);
const filterContainerElement = siteBodyElement.querySelector(`.page-menu__wrapper`);

if (pageMainElement !== null) {
  const initMenuData = (data) => {
    const dataCard = data.map(menuModel.adaptToClient);
    menuModel.setMenu(dataCard);
  };

  initMenuData(mockFile);

  const menuListPresenter = new MenuListPresenter(pageMainElement, filterContainerElement, pageMainElement);
  menuListPresenter.init(menuModel.getMenu());
}
