"use strict"
// Containers
const signupWindow = document.querySelector("#signup");
const successWindow = document.querySelector("#success-window");
//Elements
const form = document.querySelector("form");
const emailInput = document.querySelector("input");
const inputErrorMessage = document.querySelector(".input-error-message");
const dismissBtn = document.querySelector(".dismiss");
const userEmail = document.querySelector("#user-email");

// Event Listeners

// Email Input
emailInput.addEventListener("input", function () {
    userEmail.textContent = emailInput.value;
    if (emailInput.validity.valid) {
        inputErrorMessage.textContent = "";
    } else {
        emailInput.classList.add("invalid");
        showError();
    }
})

// Form Validation
form.addEventListener("click", function (e) {
    if (!emailInput.validity.valid) {
        e.preventDefault();
        showError();
    } else {
        e.preventDefault();
        signupWindow.style.display = "none";
        successWindow.style.display = "block";
    }
})

// Dismiss button
dismissBtn.addEventListener("click", function () {
    signupWindow.style.display = "block";
    successWindow.style.display = "none";
})

// Function
function showError() {
    if (emailInput.validity.typeMismatch) {
        inputErrorMessage.textContent = "Valid email required";
    } else {
        inputErrorMessage.textContent = "";
    }
}