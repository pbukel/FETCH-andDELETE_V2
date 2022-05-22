"use strict";
const API_URL = "https://golden-whispering-show.glitch.me";
let container = document.querySelector(".container");
let prideti = document.getElementById("prideti");
prideti.addEventListener("click", function () {
  location.replace("/add.html");
});

// let hardremover = document.getElementById("hardremover");

// hardremover.addEventListener("click", function () {
//   console.log("hello");
//   fetch("https://golden-whispering-show.glitch.me/1", {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(), //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
//   });
// });

function getAPI(url) {
  return fetch(url, {
    method: "GET",
  }).then((resposne) => resposne.json());
}

function printing(data) {
  for (let x of data) {
    console.log(x);
    let divas = document.createElement("div");
    divas.classList.add("produktas");
    divas.innerHTML = `
    <img id="picture"
    src="${x.image}"
    alt="">
    <p class="pavadinimas">${x.title}</p>
    <div class="price">€${x.price}</div>
    <button class="remover" id=${x.id}>Ištrinti</button>`;
    container.append(divas);
  }

  istrinimobuttons();
}
function calling() {
  container.innerHTML = " ";
  getAPI(API_URL)
    .then(printing)
    .catch((error) => console.log(error));
}
calling();

function istrinimobuttons() {
  let istrinti = document.querySelectorAll(".remover");

  for (let y of istrinti) {
    y.addEventListener("click", function () {
      console.log(this.id);
      fetch(`https://golden-whispering-show.glitch.me/${this.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(), //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
      }).then(locationchange);

      //bandymai

      // setTimeout("calling();", 300);
      // location.reload();// nesuveikia, bet abortina DELETE
      // locationchange();
    });
  }
}

function locationchange() {
  location.reload();
}
