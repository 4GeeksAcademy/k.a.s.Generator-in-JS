/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function randomItem(arr) {
  const index = randomIndex(arr);
  return arr[index];
}

window.onload = function() {
  //write your code here
  console.log("Excuse generator project");

  const whos = ["my theripest", "my preacher", "my kitten", "my mom"];
  const whats = ["lost", "burned", "dropped", "destroyed"];
  const avoids = ["my project", "my phone", "my jewlery", "my watch"];
  const whens = ["yesterday", "last week", "monday", "last year"];

  const who = randomItem(whos);
  const what = randomItem(whats);
  const avoid = randomItem(avoids);
  const when = randomItem(whens);

  const randomExcuse = who + " " + what + " " + avoid + " " + when;

  document.querySelector(".alert").innerText = randomExcuse;
};
