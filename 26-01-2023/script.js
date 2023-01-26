import { qS, cE, productCard } from "./utils.js";
import myJson from "./mock.json" assert {type: "json"};


const bodyEl = qS("body");
const wrapperEl = cE("div");
wrapperEl.className = "wrapper";
bodyEl.appendChild(wrapperEl);

let movieIndex = 1


bodyEl.appendChild(productCard(myJson.films[0]))

const timer = setInterval(() => {
    if (movieIndex >= myJson.films.length) {
        clearInterval(timer) 
    } else {
       bodyEl.innerHTML = ""
        bodyEl.appendChild(productCard(myJson.films[movieIndex]))
    movieIndex++ 
    } 
    
}, 5000)



stopBtnEl.textContent = "stop";
bodyEl.append(titleEl, stopBtnEl);