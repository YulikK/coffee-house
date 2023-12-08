import Abstract from "../view/abstract.js";

export const render = (container, child) => {

  if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (child instanceof Abstract) {
    child = child.getElement();
  }

  container.append(child);
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const showDetails = (container, detailsComponent) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }
  if (detailsComponent instanceof Abstract) {
    detailsComponent = detailsComponent.getElement();
  }
  container.appendChild(detailsComponent);
  container.classList.add(`hide-overflow`);
};

export const hideDetails = (container, detailsComponent) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }
  if (detailsComponent instanceof Abstract) {
    detailsComponent = detailsComponent.getElement();
  }
  container.removeChild(detailsComponent);
  container.classList.remove(`hide-overflow`);
};

export const remove = (component) => {
  if (component === null) {
    return;
  }

  if (!(component instanceof Abstract)) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};