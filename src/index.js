const fetchURL = `http://localhost:3000/ramens`;
const imageDestination = document.getElementById(`ramen-menu`);

function fetchRamen(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => getRamenData(json));
}

function getRamenData(ramenArray) {
  ramenArray.map((ramen) => getRamenArray(ramen));
}

function getRamenArray(ramen) {
  let ramenImage = document.createElement(`img`);
  ramenImage.src = ramen.image;
  imageDestination.appendChild(ramenImage);
}

fetchRamen(fetchURL);
