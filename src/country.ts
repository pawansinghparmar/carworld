import { carsInfo } from "./cars.js";
import { cars } from "./app.js";
const origin =document.createElement('div');
const getCountry = function(country:string){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(Response => Response.json())
    .then(data => (data[0].flags.png))
    .then( function(flag){
        console.log("inside flag");
        
        origin.innerHTML = `<img src=${flag}>
        <h2>${country}</h2>`;
        console.log(origin);
        console.log(cars.insertAdjacentElement("afterbegin",origin));
    });
   


};
export const companyInfo = function(event:Event){
	const brand = event.target as HTMLElement;
	const car = brand.innerText;
    for (const [key,value] of Object.entries(carsInfo)){
            if(car===key){
                getCountry(value.country);
            }
    }
};

