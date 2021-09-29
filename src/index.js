const imageDestination = document.getElementById(`ramen-menu`);
const ramenForm = document.querySelector(`#new-ramen`);
let ramenDetails = document.querySelector(`.detail-image`);
let ramenName = document.querySelector(`.name`);
let ramenRestaurant = document.querySelector(`.restaurant`);
let ramenRating = document.querySelector(`#rating-display`);
let ramenComment = document.querySelector(`#comment-display`);
let ramenImage = document.createElement(`img`);
function fetchRamen() {
  fetch(`http://localhost:3000/ramens`)
    .then((response) => response.json())
    .then((json) => getRamenData(json));
}

function getRamenData(ramenArray) {
  ramenArray.map((ramen) => getRamenArray(ramen));
}

ramenForm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const newRamen = {};
  newRamen.name = ramenName.value;
  newRamen.restaurant = ramenRestaurant.value;
  newRamen.image = ramenImage.value;
  newRamen.rating = ramenRating.value;
  newRamen.comment = ramenComment.value;

  ramenArray(newRamen);
});

function getRamenArray(ramen) {
  let ramenImage = document.createElement(`img`);
  ramenImage.src = ramen.image;
  imageDestination.append(ramenImage);
  ramenImage.addEventListener(`click`, function () {
    ramenDetails.src = ramen.image;
    ramenName.innerHTML = ramen.name;
    ramenRestaurant.innerHTML = ramen.restaurant;
    ramenRating.innerHTML = ramen.rating;
    ramenComment.inn = ramen.comment;
  });
}
fetchRamen();
