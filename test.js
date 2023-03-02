"use strict";

function birthdayCakeCandles(candles) {
  // Write your code here

  let checkHighest = 0;
  let tallestCandles = 1;
  let highestNum = 0;
  for (let j = 0; j < candles.length; j++) {
    if (checkHighest < candles[j]) checkHighest = candles[j];
  }
  for (let i = 0; i < candles.length; i++) {
    if (highestNum < candles[i]) {
      highestNum = candles[i];
    } else if (highestNum === candles[i] && candles[i] === checkHighest) {
      tallestCandles += 1;
    }
  }
  return tallestCandles;
}

console.log(birthdayCakeCandles([10, 10, 10, 8, 11, 11, 16, 16, 15]));
