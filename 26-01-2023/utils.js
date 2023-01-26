const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
const stopBtnEl = document.createElement("button");

const productCard = (data) => {
  const wrapperEl = cE("div");
  const textWrapperEl = cE("div");
  const titleEl = cE("h3");
  const descriptionEl = cE("p")
  const actorsEl = cE("p");
  const directorEl = cE("p");
  const ratingEl = cE("span");
  const yearEl = cE("span");
  const genresEl = cE("p");
  

  wrapperEl.className = "product-card";
  textWrapperEl.className = "product-card__text";
  descriptionEl.textContent = data.description;
  genresEl.textContent = data.genres;
  actorsEl.textContent = data.actors;
  titleEl.textContent = data.title;
  directorEl.textContent = data.director;
  ratingEl.textContent = `rating: ${data.rating}`;
  yearEl.textContent = `year: ${data.year}`;
  stopBtnEl.textContent = "stop";

  textWrapperEl.append(titleEl, descriptionEl, yearEl, directorEl, actorsEl, ratingEl, genresEl, stopBtnEl);
  wrapperEl.append(textWrapperEl);
  return wrapperEl;
};

export { cE, qS, productCard };