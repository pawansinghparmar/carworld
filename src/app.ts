import { Iuser, InewUser, userRegistration, loginIntoAcc } from './login.js';
import {displayCars } from './cars.js';
import { IValidatable, validityCheck } from './validation.js';
const uppergrid = document.querySelector('.grid-container')as HTMLDivElement;
export const cars = document.querySelector('#cars')as HTMLDivElement;
const signupContainer = document.querySelector('.signup-container')as HTMLDivElement;
const signupForm = document.querySelector('#signupform')as HTMLFormElement;
const loginContainer = document.querySelector('.login-container')as HTMLDivElement;
const loginForm = document.querySelector('#loginform') as HTMLFormElement;
const createAcc = document.querySelector('h5') as HTMLElement;
const loginAcc = document.querySelector('.switchtologin') as HTMLElement;
signupContainer.classList.add('hidden');
// const submitButton = document.querySelector('#submitform')as HTMLButtonElement;
const rUserPasswordEl = loginForm.querySelector('#password') as HTMLInputElement;
const rUserMailEl = loginForm.querySelector('#email') as HTMLInputElement;
const userNameEl = signupForm.querySelector('#uname') as HTMLInputElement;
const userMailEl = signupForm.querySelector('#uemail') as HTMLInputElement;
const userPassEl = signupForm.querySelector('#upassword') as HTMLInputElement;
const userCPassEl = signupForm.querySelector('#cpassword') as HTMLInputElement;

signupContainer.classList.add('hidden');

export function formReset ():void {
	userNameEl.value = '',
	userMailEl.value = '',
	userPassEl.value ='', 
	userCPassEl.value ='',
	rUserPasswordEl.value='',
	rUserMailEl.value = '',
	console.log('form reset');
}


function signinHandle(e:Event) {
	e.preventDefault();
	const form = new FormData(loginForm);
	const mail = form.get('email') as string;
	const password = form.get('password') as string;
	const user:Iuser = {
		emailId: mail,
		password: password
	};
	console.log(user);
	const isValidate:boolean = loginIntoAcc(user);
	if (isValidate) {
		loginContainer.classList.add('hidden');
		signupContainer.classList.add('hidden');
		cars.classList.remove('hidden');
		
		uppergrid.replaceWith(cars);
		displayCars();
	}
	formReset();
}
function signupHandle(event:Event) {
	event.preventDefault();

	const user:InewUser = {
		name: userNameEl.value,
		mail: userMailEl.value,
		pass: userPassEl.value,
	};
	if (userPassEl.value !== userCPassEl.value) {
		alert('Make sure passwords are same');
	} else {
		const nameValidity:IValidatable = {
			value: userNameEl.value,
			required: true,
			minLength: 3,
		};
		const emailValidity:IValidatable = {
			value: userMailEl.value,
			required: true,
		};
		const passwordValidity:IValidatable = {
			value: userPassEl.value,
			required: true,
			minLength: 6,
		};
		const isValidate = (validityCheck(nameValidity) && validityCheck(emailValidity) && validityCheck(passwordValidity));
		if (isValidate) {
			userRegistration(user);
		} else {
			alert('Please fill correct credentials');
		}
	}
}
export const toggle = function () {
	if (signupContainer.classList[1] === 'hidden') {
		loginContainer.replaceWith(signupContainer);
		loginContainer.classList.add('hidden');
		signupContainer.classList.remove('hidden');
	} else {
		signupContainer.replaceWith(loginContainer);
		signupContainer.classList.add('hidden');
		loginContainer.classList.remove('hidden');
	}
};
createAcc.addEventListener('click', toggle);
loginAcc.addEventListener('click', toggle);
loginForm.addEventListener('submit', signinHandle);
signupForm.addEventListener('submit', signupHandle);
signupForm.addEventListener('submit', signupHandle);




















