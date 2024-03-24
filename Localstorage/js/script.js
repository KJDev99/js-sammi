"use strict";
const email = document.querySelector(".email"),
  firstName = document.querySelector(".name"),
  formSubmit = document.querySelector("form"),
  cardHeader = document.querySelector(".card-header");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    email: email.value,
    name: firstName.value,
  };
  e.target.reset();

  localStorage.setItem("user", JSON.stringify(user));
});

const user = JSON.parse(localStorage.getItem("user"));
cardHeader.textContent = user.name;
