const userElement = document.querySelector(".usersList");


fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    data.forEach(post => {

      const randomYear = Math.floor(Math.random() * 51) + 1950;
      const randomMonth = Math.floor(Math.random() * 12) + 1; 
      const randomDay = Math.floor(Math.random() * 31) + 1; 
      const randomDate = new Date(`${randomYear}-${randomMonth}-${randomDay}`);
      const cutoffDate = new Date('2000-12-31');

      if (randomDate > cutoffDate) {
        randomDate.setFullYear(cutoffDate.getFullYear());
        randomDate.setMonth(cutoffDate.getMonth());
        randomDate.setDate(cutoffDate.getDate());
      }
      post.birthday = randomDate.toISOString().substring(0, 10);
    });


    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  })
  .catch(error => console.error(error));


    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        dataManupulation(data);

      });

fetch('https://randomuser.me/api')
  .then(response => response.json())
  .then(data => {

    const imageUrl = data.picture;
    const image = document.createElement('img');
    image.src = imageUrl;

    document.body.appendChild(image);
  })
  .catch(error => console.error(error));



    const dataManupulation = data => {
   
      data.forEach((element, user) => {
        const divContainer = document.createElement("div");
        divContainer.className = "card";
    
        const titleElement = document.createElement("h1");
        titleElement.textContent = element.name;

        const userContainer = document.createElement("p");
        userContainer.textContent = element.email;

        const birthdayEL = document.createElement("p");
        birthdayEL.textContent = element.birthday;
    

        divContainer.appendChild(titleElement);
        divContainer.appendChild(userContainer);
        divContainer.appendChild(birthdayEL);
        userElement.appendChild(divContainer);
      });
    };