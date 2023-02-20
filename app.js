"use strict";

let input = document.getElementById("input-value");

const uppercase = document.getElementById("uppercase");
const titlecase = document.getElementById("titlecase");
const reverse = document.getElementById("reverse");
const palindrome = document.getElementById("palindrome");
const vowels = document.getElementById("vowels");
const longshort = document.getElementById("longshort");
const words = document.getElementById("words");
const frequent = document.getElementById("frequent");

const result = document.getElementById("result");

uppercase.addEventListener("click", function () {
  result.innerHTML = input.value.toUpperCase();
  input.value = input.value.toUpperCase();
});

titlecase.addEventListener("click", function () {
  let str = input.value.toLowerCase().split(" ");

  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  result.innerHTML = str.join(" ");
  input.value = str.join(" ");
});

reverse.addEventListener("click", function () {
  result.innerHTML = input.value.split("").reverse().join("");
  input.value = input.value.split("").reverse().join("");
});

palindrome.addEventListener("click", function () {
  if (
    input.value.toLowerCase() ===
    input.value.split("").reverse().join("").toLowerCase()
  ) {
    result.innerHTML = "Palindrome!";
  } else {
    result.innerHTML = "Not Palindrome!";
  }
});

vowels.addEventListener("click", function () {
  let numVowels = 0;

  for (let i = 0; i < input.value.length; i++) {
    if ("aeiouAEIOU".indexOf(input.value[i]) >= 0) {
      numVowels++;
    }
  }

  result.innerHTML = numVowels + " vowels";
});

longshort.addEventListener("click", function () {
  let splitted = input.value.split(" ");
  splitted.sort((a, b) => a.length - b.length);
  result.innerHTML = `Longest word: ${splitted[splitted.length - 1]} |
   Shortest word: ${splitted[0]}`;
});

words.addEventListener("click", function () {
  result.innerHTML = input.value.split(" ").length + " words";
});

frequent.addEventListener("click", function () {
  let splitted = input.value.split(" ");
  let wordFrequency = 0;
  let maxWordFrequency = 0;
  let mostFreqWord;

  for (let i = 0; i < splitted.length; i++) {
    for (let j = i; j < splitted.length; j++) {
      if (splitted[i] === splitted[j]) {
        wordFrequency++;
      }
      if (wordFrequency > maxWordFrequency) {
        maxWordFrequency = wordFrequency;
        mostFreqWord = splitted[i];
      }
    }
    wordFrequency = 0;
  }

  result.innerHTML = `Most frequent word: ${mostFreqWord}`;
});
