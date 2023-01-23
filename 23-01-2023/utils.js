const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const quoteCard = (data) => {
    const cardEl = cE("div");
    const quoteEl = cE("h3");
    const authorEl = cE("p");

    cardEl.className = "quote-card";
    quoteEl.textContent = data.quote;
    authorEl.textContent = data.author;

  
    cardEl.append(quoteEl, authorEl);
    return cardEl;
  };
  
  export { cE, qS, quoteCard };
