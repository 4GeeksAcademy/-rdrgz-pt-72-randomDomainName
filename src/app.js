/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const pronoun = ['The', 'Our', 'Their', 'This'];
const adj = ['great', 'big', 'wrathful', 'meek'];
const noun = ['jogger', 'racoon','passion', 'estate'];
const ending = ['.com', '.org', '.gov', '.net'];
for (let i = 0; i < pronoun.length; i++) {
  console.log(pronoun[i], adj[i],noun[i],ending[i]);
}
