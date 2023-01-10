import { products } from './mocks.js';

const createCard = (title, img, description) => {
  const bodyEl = document.body;
  const cardEl = document.createElement('div');
  const imgEl = document.createElement('img');
  const titleEl = document.createElement('h2');
  const descriptionEl = document.createElement('p');

  cardEl.className = 'card';


  imgEl.className = 'card__img';
  imgEl.setAttribute('src', img);
  imgEl.setAttribute('alt', title);

  titleEl.className = 'card__title';
  titleEl.textContent = title;

  descriptionEl.className = 'card__description';
  descriptionEl.textContent = description;

  cardEl.append(imgEl, titleEl, descriptionEl);
  bodyEl.appendChild(cardEl);
};


for (let product of products) {
  createCard(product.title, product.img, product.description);
}