const userCard = (data) => {
    const userEl = document.createElement("div");
    const userNameEl = document.createElement("h3");
    const userLastNameEl = document.createElement("p");
    
    userEl.className = "user";
    userEl.setAttribute("id", data.id);
    userNameEl.textContent = data.user;
    userLastNameEl.textContent = data.name;
    
    userEl.append(userNameEl, userLastNameEl);
    return userEl;
 };

   GET("users").then((user) =>
        bodyEl.appendChild(quoteCard(user))
);