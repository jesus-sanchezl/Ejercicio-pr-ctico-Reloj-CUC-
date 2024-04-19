"use strict";


let cucus = "";

for (let hour = 0; hour < 24; hour++) {
  let text = `Son las ${hour}:00`;

  if (hour > 0) {
    cucus += " 🐦";
  }

  if (hour >= 8 && hour <= 22) {
    text += cucus;
  }

  console.log(text);

  if (hour === 12) {
    cucus = "";
  }
}