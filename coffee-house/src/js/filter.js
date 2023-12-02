const pageMenu = document.querySelector('.page-menu');

if (pageMenu !== null) {
  const menuCoffee = document.querySelector('.menu__list--coffee');
  const menuTea = document.querySelector('.menu__list--tea');
  const menuDesert = document.querySelector('.menu__list--dessert');

  const filterCoffee = document.querySelector(".button__filter--coffee");
  const filterTea = document.querySelector(".button__filter--tea");
  const filterDessert = document.querySelector(".button__filter--dessert");

  filterCoffee.addEventListener('click', function() {
    menuCoffee.classList.add('menu__list--active');
    menuTea.classList.remove('menu__list--active');
    menuDesert.classList.remove('menu__list--active');
  });

  filterTea.addEventListener('click', function() {
    menuTea.classList.add('menu__list--active');
    menuCoffee.classList.remove('menu__list--active');
    menuDesert.classList.remove('menu__list--active');
  });

  filterDessert.addEventListener('click', function() {
    menuDesert.classList.add('menu__list--active');
    menuTea.classList.remove('menu__list--active');
    menuCoffee.classList.remove('menu__list--active');
  });
};