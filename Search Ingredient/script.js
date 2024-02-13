const btnFood = document.getElementById("btn-food");
const btnFood2 = document.getElementById("food-form");

btnFood.addEventListener("click", generateFood);
btnFood2.addEventListener("submit", generateFoods);

function generateFood(e) {
  e.preventDefault();

  const apiKey = "c7935c84b3b44f0a9b4da0bb900f7367";
  fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&?number=1&include-tags=vegetarian,dessert`
  )
    .then((response) => response.json())
    .then((resultJson) => {
      console.log("resultJson", resultJson);
      console.log(resultJson.recipes[0].image);
      console.log(resultJson.recipes[0].title);

      var oldImage = document.querySelector("#result img");
      if (oldImage) {
        oldImage.remove();
      }

      var image = document.createElement("img");
      image.src = resultJson.recipes[0].image;

      document.querySelector("#result").appendChild(image);

      var oldTitle = document.querySelector("#result h2");
      if (oldTitle) {
        oldTitle.remove();
      }

      var titleElement = document.createElement("h2");
      titleElement.textContent = resultJson.recipes[0].title;

      document.querySelector("#result").appendChild(titleElement);
    })
    .catch((error) => {
      console.error("Erreur lors de la requête fetch:", error);
      alert("Erreur lors de la requête fetch:", error);
    });
}

function generateFoods(e) {
  e.preventDefault();

  const query = btnFood2.elements[0].value;
  console.log(query);
  const apiKey = "c7935c84b3b44f0a9b4da0bb900f7367";

  fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=${apiKey}&number=10`
  )
    .then((response) => response.json())
    .then((resultJson) => {
      console.log("resultJson", resultJson);
      console.log(resultJson[0].image);
      console.log(resultJson[0].title);



      var oldImage = document.querySelector("#result2 img");
      if (oldImage) {
        oldImage.remove();
      }

      var image = document.createElement("img");
      image.src = resultJson[0].image;

      document.querySelector("#result2").appendChild(image);

      var oldTitle = document.querySelector("#result2 h2");
      if (oldTitle) {
        oldTitle.remove();
      }

      var titleElement = document.createElement("h2");
      titleElement.textContent = resultJson[0].title;

      document.querySelector("#result2").appendChild(titleElement);
    })
    .catch((error) => {
      console.error("Erreur lors de la requête fetch:", error);
      alert("Erreur lors de la requête fetch:", error);
    });
}
