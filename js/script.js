// Copyright (c) 2020 Mr. Coxall All rights reserved
// Created by: yi.zhou
// Created on: Mar 2025
// This file contains the JS functions for index.html


"use strict"


function calculateLCM() {
  const num1 = parseInt(document.getElementById('number1').value);
  const num2 = parseInt(document.getElementById('number2').value);

  if ((num1 !== num1) || (num2 !== num2) || num1 <= 0 || num2 <= 0) {
    document.getElementById('result').innerText = 'Please enter two positive integers.';
    return;
  }

  let gcd = 1;
  let min = Math.min(num1, num2);
  for (let i = 1; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  const lcm = (num1 * num2) / gcd;

 // calculations
 document.getElementById('result').innerHTML = 'LCM is: ' + lcm 
}


