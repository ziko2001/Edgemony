import { qS, cE, quoteCard } from "./utils.js";
import { GET } from "./api.js";

const bodyEl = qS("body");
const cardEl = cE("div");
cardEl.className = "quote-card";
bodyEl.appendChild(cardEl);

let quote1 = {};

fetch("https://dummyjson.com/quotes")
    .then((res) => res.json())
    .then((data) =>
     data.quotes.map((quote) => cardEl.appendChild(quoteCard(quote))) .then(() => cardEl.appendChild(quoteCard(quote9)))
    );
   
GET("quotes").then((data) =>
    data.quotes.map((quote) => cardEl.appendChild(quoteCard(quote)))
);
