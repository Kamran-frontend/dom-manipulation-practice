document.getElementById("main-title").setAttribute("class", "test");

const h2 = document.getElementsByTagName("h2");
const pikachuEl = document.getElementById("pikachu");
const infoEl = document.getElementsByClassName("info");

const h2Arr = [...h2];
console.log(typeof h2);
console.log(typeof h2Arr);

h2Arr.forEach(function (el) {
  el.style.fontSize = "32px";
});

const boxEl = document.querySelectorAll(".box");
console.log(boxEl);
