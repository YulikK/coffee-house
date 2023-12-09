import mockFile from '../mock/products.json';
import MenuModel from "./model/menu.js";
import MenuListPresenter from "./presenter/menu-list.js";
import {MenuType, tabletWidthCount} from "./const.js"

const menuModel = new MenuModel();
const siteBodyElement = document.querySelector(`body`);
const pageMainElement = siteBodyElement.querySelector(`.page-menu`);
const filterContainerElement = siteBodyElement.querySelector(`.page-menu__wrapper`);
const screenWidth = window.screen.width
let currentMenuType = screenWidth > tabletWidthCount ? MenuType.DESKTOP : MenuType.MOBILE;

if (pageMainElement !== null) {
  const initMenuData = (data) => {
    const dataCard = data.map(menuModel.adaptToClient);
    menuModel.setMenu(dataCard);
  };

  function onResize(){
    if(window.screen.width <= tabletWidthCount && currentMenuType === MenuType.DESKTOP) {
      currentMenuType = MenuType.MOBILE;
      menuListPresenter.setMenuType(currentMenuType);
      menuListPresenter.update();
    } else if (window.screen.width > tabletWidthCount && currentMenuType === MenuType.MOBILE) {
      currentMenuType = MenuType.DESKTOP;
      menuListPresenter.setMenuType(currentMenuType);
      menuListPresenter.update();
    }
  }
   

  initMenuData(mockFile);

  const menuListPresenter = 
  new MenuListPresenter(pageMainElement, 
    filterContainerElement, 
    pageMainElement,
    currentMenuType
    );
  menuListPresenter.init(menuModel.getMenu());
  window.addEventListener('resize', onResize);
}
