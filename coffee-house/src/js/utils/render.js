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

const onScrollBody = () =>{
  const bodyElement = document.querySelector(`body`);
  bodyElement.classList.remove(`body--no-scroll`);
}

const offScrollBody = () =>{
  const bodyElement = document.querySelector(`body`);
  bodyElement.classList.add(`body--no-scroll`);
}

export const showDetails = (container, detailsComponent) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }
  if (detailsComponent instanceof Abstract) {
    detailsComponent = detailsComponent.getElement();
  }
  container.appendChild(detailsComponent);
  // container.classList.add(`hide-overflow`);
  offScrollBody();
};

export const hideDetails = (container, detailsComponent) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }
  if (detailsComponent instanceof Abstract) {
    detailsComponent = detailsComponent.getElement();
  }
  container.removeChild(detailsComponent);
  onScrollBody();
  // container.classList.remove(`hide-overflow`);
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