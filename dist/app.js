import { userRegistration, loginIntoAcc } from "./login.js";
import { displayCars } from "./cars.js";
import { validityCheck } from "./validation.js";
const uppergrid = document.querySelector(".grid-container");
const cars = document.querySelector("#cars");
const signupContainer = document.querySelector(".signup-container");
const signupForm = document.querySelector("#signupform");
const loginContainer = document.querySelector(".login-container");
const loginForm = document.querySelector("#loginform");
const createAcc = document.querySelector("h5");
const loginAcc = document.querySelector(".switchtologin");
signupContainer.classList.add("hidden");
// const submitButton = document.querySelector('#submitform')as HTMLButtonElement;
const rUserPasswordEl = loginForm.querySelector("#password");
const rUserMailEl = loginForm.querySelector("#email");
const userNameEl = signupForm.querySelector("#uname");
const userMailEl = signupForm.querySelector("#uemail");
const userPassEl = signupForm.querySelector("#upassword");
const userCPassEl = signupForm.querySelector("#cpassword");
export function formReset() {
  (userNameEl.value = ""),
    (userMailEl.value = ""),
    (userPassEl.value = ""),
    (userCPassEl.value = ""),
    (rUserPasswordEl.value = ""),
    (rUserMailEl.value = ""),
    console.log("form reset");
}
function signinHandle(e) {
  e.preventDefault();
  const form = new FormData(loginForm);
  const mail = form.get("email");
  const password = form.get("password");
  const user = {
    emailId: mail,
    password: password,
  };
  console.log(user);
  const isValidate = loginIntoAcc(user);
  if (isValidate) {
    loginContainer.classList.add("hidden");
    signupContainer.classList.add("hidden");
    cars.classList.remove("hidden");
    uppergrid.replaceWith(cars);
    displayCars();
  }
  formReset();
}
function signupHandle(event) {
  event.preventDefault();
  const user = {
    name: userNameEl.value,
    mail: userMailEl.value,
    pass: userPassEl.value,
  };
  if (userPassEl.value !== userCPassEl.value) {
    alert("Make sure passwords are same");
  } else {
    const nameValidity = {
      value: userNameEl.value,
      required: true,
      minLength: 3,
    };
    const emailValidity = {
      value: userMailEl.value,
      required: true,
    };
    const passwordValidity = {
      value: userPassEl.value,
      required: true,
      minLength: 6,
    };
    const isValidate =
      validityCheck(nameValidity) &&
      validityCheck(emailValidity) &&
      validityCheck(passwordValidity);
    if (isValidate) {
      userRegistration(user);
    } else {
      alert("Please fill correct credentials");
    }
  }
}
export const toggle = function () {
  if (signupContainer.classList[1] === "hidden") {
    loginContainer.replaceWith(signupContainer);
    loginContainer.classList.add("hidden");
    signupContainer.classList.remove("hidden");
  } else {
    signupContainer.replaceWith(loginContainer);
    signupContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
  }
};
createAcc.addEventListener("click", toggle);
loginAcc.addEventListener("click", toggle);
loginForm.addEventListener("submit", signinHandle);
signupForm.addEventListener("submit", signupHandle);
