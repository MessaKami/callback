const randomImage = document.getElementById("random-image");
const displayImage = document.getElementById("result");

randomImage.addEventListener("click", generateImage);

function generateImage(e) {
  e.preventDefault();

  fetch(
    `https://api.unsplash.com/photos/random?client_id=DoBTvHTiuf01QyQLJ75KS8HmSfHmYvURwucgzga-ZeE&query=gift`
  )
    .then((response) => response.json())
    .then((resultJson) => {
      console.log("resultJson", resultJson);
      console.log(resultJson.urls.full);

      var oldImage = document.querySelector("img");
      if (oldImage) {
        oldImage.remove();
      }

      var image = document.createElement("img");
      image.src = resultJson.urls.small;
      document.body.appendChild(image);
    })
    .catch((error) => {
      console.error("Erreur lors de la requête fetch:", error);
    });
}
