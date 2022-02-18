import {toggle,formReset} from './app.js';
export interface Iuser{
    emailId:string;
    password:string;
}
export interface InewUser{
	name:string;
	mail:string;
    pass:string;
}

const registeredUser=[{
	emailId:'pawansinghparmar08@gmail.com',
	password:'111111'
}];
export function loginIntoAcc(user:Iuser):boolean{
	let isvalid =false;
	for(const ruser of registeredUser){
		if(user.emailId===ruser.emailId && user.password===ruser.password){
			console.log('logged in');
			isvalid = true;
			break;
		}
	}
	if (!isvalid) {
		alert('credentials are not matched');
	}
	return isvalid;
}

export function userRegistration(user:InewUser){
	let success=true;
	if(user){
		const newUser={
			emailId:user.mail,
			password:user.pass
		};
		console.log(newUser?.emailId);
		for(const ruser of registeredUser){
			if (ruser.emailId===newUser.emailId){
				
				success=false;
			}
		}
		if(success){
			registeredUser.push(newUser);
			console.log(registeredUser);
			formReset();
			toggle();
		}else{
			alert('Already have an account');
		}
	}


}
