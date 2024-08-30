/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const one = ["the", "our", "their", "this"];
const two = ["great", "big", "wrathful", "meek"];
const three = ["jogger", "racoon", "passion", "estate"];
const four = [".com", ".org", ".gov", ".net"];

function getRandomNumber(_min, _max) {
  return Math.floor(Math.random() * 4);
}

function getRandom(anyArray) {
  let max = anyArray.lenght - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

for (i = 0 < Math.floor(Math.random); any.length; i++)
  console.log(one, two, three, four)[i];
{
  document.querySelector(one, two, three, four).innerHTML =
    getRandom(one) +
    " " +
    getRandom(two) +
    " " +
    getRandom(three) +
    " " +
    getRandom(four);
}
