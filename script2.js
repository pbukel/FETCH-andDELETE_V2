"use strict";
const API_URL = "https://golden-whispering-show.glitch.me";
let form = document.querySelector("form");
let image = document.getElementById("imageurl");
let title = document.getElementById("title");
let price = document.getElementById("price");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (image.value == "" || title.value == "" || price.value == "") {
    console.log("ne viskas ivesta");
  } else {
    console.log(image.value, title.value, price.value);

    let data = { image: image.value, title: title.value, price: price.value };
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resposne) => resposne.json())

      //   .then((results) => alert(results.msg))
      .then(message)

      .catch((error) => console.log(error));
  }
});

function message() {
  alert("Duomenys sekmingai irasyti");
  location.replace("/index.html");
}

// submit.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (brand.value == "" || model.value == "") {
//     alert("nepilnai ivestas pavadinimas!");
//   } else {
//     console.log(brand.value);
//     console.log(model.value);

//     let data = { brand: brand.value, model: model.value };
//     fetch(API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((resposne) => resposne.json())

//       //   .then((results) => alert(results.msg))
//       .then(message)
//       .catch((error) => console.log(error));
//   }

//   brand.value = "";
//   model.value = "";
// });
// function message() {
//   notification.innerText = "Duomenys sekmingai irasyti";
// }
