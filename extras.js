function getRandomNumber(_min, _max) {
    return Math.floor(Math.random() * 4);
  }
  
  function getRandom(anyArray) {
    let max = anyArray.lenght - 1;
    let min = 0;
    let random = getRandomNumber(min, max);
    return anyArray[random];
  }
  document.querySelector(one, two, three, four).innerHTML =
  getRandom(one) +
  " " +
  getRandom(two) +
  " " +
  getRandom(three) +
  " " +
  getRandom(four);
}
