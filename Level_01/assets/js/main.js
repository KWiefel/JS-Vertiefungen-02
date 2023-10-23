"use strict";

// ========================= lev1_1: Ternary Operator ===============

const age = document.body.querySelector("form input");
const output = document.body.querySelector("form p");

function checkAge() {
  event.preventDefault();
  let check =
    age.value >= 18
      ? (output.textContent = "Volljährig")
      : (output.textContent = "Minderjährig");
}

// ========================= Conditionals-Level-1_4 ===============

const password = document.body.querySelector("form:nth-of-type(2) input");
const output2 = document.body.querySelector("form:nth-of-type(2) p");

function checkPassword() {
  event.preventDefault();

  let check2 =
    password.value.length >= 8
      ? (output2.textContent = "sicheres Passwort")
      : (output2.textContent = "unsicheres Passwort");
}

// ========================= Projects-JS-Einführung-Level-2_1 ===============

const message = document.body.querySelector(".input");
let lastMessage = document.body.querySelector(".output");
const alert = document.body.querySelector(".alert");

function send() {
  event.preventDefault();

  if (message.value.length >= 1) {
    lastMessage.textContent = message.value;
  } else {
    alert.textContent = "Bitte gib eine Nachricht ein!";
    alert.style.color = "red";
  }
}
