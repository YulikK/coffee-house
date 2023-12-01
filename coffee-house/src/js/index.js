import('../sass/main.scss');

var navigation = document.querySelector('.page-header__navigation');
var navButton = document.querySelector('.page-header__open-menu');

navigation.classList.remove('navigation--nojs');

navButton.addEventListener('click', function () {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
  } else {
    navigation.classList.add('navigation--closed');
    navigation.classList.remove('navigation--opened');
  }
});
