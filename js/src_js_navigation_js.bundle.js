(self["webpackChunkcoffee_house"] = self["webpackChunkcoffee_house"] || []).push([["src_js_navigation_js"],{

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/***/ (() => {

const navigation = document.querySelector('.navigation');
const navButton = document.querySelector('.page-header__open-menu');
const navInput = document.querySelector('input[id="hamburger-menu"]');
const body = document.querySelector('body');

function onClickBurgerMenu(evt){
  evt.preventDefault();
  if (navigation.classList.contains('navigation--closed')) {
    setOpenMenu();
  } else {
    setCloseMenu();
  }
}
function setOpenMenu() {
  navInput.checked = true;
  navigation.classList.remove('navigation--closed');
  navigation.classList.add('navigation--opened');
  body.classList.add('body--no-scroll');
}
function setCloseMenu() {
  navInput.checked = false;
  navigation.classList.add('navigation--closed');
  navigation.classList.remove('navigation--opened');
  body.classList.remove('body--no-scroll');
}
function onNavigationItemClick (evt) {
  if (evt.target.classList.contains('navigation__menu--active')){
    evt.preventDefault();
  }
  setCloseMenu();
}
navButton.addEventListener('click', onClickBurgerMenu);
const menuItems = document.querySelectorAll('.navigation__link'); 
menuItems.forEach((menuElement) => menuElement.addEventListener('click', onNavigationItemClick))

/***/ })

}]);
//# sourceMappingURL=src_js_navigation_js.bundle.js.map