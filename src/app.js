/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
}
const myArray () ={
  let pronoun = ['The', 'Our', 'Their', 'This'];
  let adj = ['great', 'big', 'wrathful', 'meek'];
  let noun = ['jogger', 'racoon','passion', 'estate'];
}

function getRandomNumber(_min, _max) {
  return Math.floor(Math.random() * 6);
}

function getRandom(anyArray) {
  let max = anyArray.lenght - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  console.log("Hello Rigo from the console!");
  document.querySelector("#weirdness").innerHTML =
    getRandom(pronoun) +
    " " +
    getRandom(adj) +
    " " +
    getRandom(noun)
};