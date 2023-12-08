import AbstractView from "./abstract.js";
import {FilterType} from "../const.js";

const createFilterTemplate = () => {
  return (
    `<ul class="page-menu__filter filter">
        <li class="filter__item">
          <a href="#" class="filter__button button button__filter button__filter--coffee button__filter--active" data-filter-type="${FilterType.COFFEE}">
            <img class="filter__icon" src="img/svg/coffee.svg" width="16" height="24" alt="filter: coffee" data-filter-type="${FilterType.COFFEE}">
            <span class="filter__title" data-filter-type="${FilterType.COFFEE}">Coffee</span>
          </a>
        </li>
        <li class="filter__item">
          <a href="#" class="filter__button button button__filter button__filter--tea" data-filter-type="${FilterType.TEA}">
            <img class="filter__icon" src="img/svg/tea.svg" width="16" height="24" alt="filter: tea" data-filter-type="${FilterType.TEA}">
            <span class="filter__title" data-filter-type="${FilterType.TEA}">Tea</span>
          </a>
        </li>
        <li class="filter__item">
          <a href="#" class="filter__button button button__filter button__filter--dessert" data-filter-type="${FilterType.DESSERT}">
            <img class="filter__icon" src="img/svg/desert.svg" width="16" height="24" alt="filter: desert" data-filter-type="${FilterType.DESSERT}">
            <span class="filter__title" data-filter-type="${FilterType.DESSERT}">Dessert</span>
          </a>
        </li>
      </ul>
    </div>`
  );
};

export default class Filter extends AbstractView {
  constructor() {
    super();

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createFilterTemplate();
  }

  _filterTypeChangeHandler(evt) {

    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.dataset.filterType);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`click`, this._filterTypeChangeHandler);
  }
}
