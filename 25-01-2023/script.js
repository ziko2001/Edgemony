import { qS, cE, productCard } from "./utils.js";
import myJson from "./mock.json" assert {type: "json"};


const bodyEl = qS("body");
const wrapperEl = cE("div");
wrapperEl.className = "wrapper";
bodyEl.appendChild(wrapperEl);


myJson.films.forEach(item => bodyEl.appendChild(productCard(item)));