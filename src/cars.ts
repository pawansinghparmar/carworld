const cars = document.querySelector('.grid-contain')as HTMLDivElement;


const allCars=['Mercedes','BMW','Rolls Royce','Chevrolet','Peugeot','MG','Mini','Fiat','Mazda','Porsche','Lamborghini','Maruti Suzuki','Hyundai','Honda','Mahindra','Kia','Toyota','Ford','Skoda','Ferrari','Tata','Volkswagen','Audi','Volvo','Bentley','Jeep','Jaguar','Aston Martin','Maserati','Mitsubishi','Isuzu','Bugatti','Citroen','Renault','Lexus','Nissan','Datsun','Mclaren','Force Motors','Tesla','Land Rover'];
export const displayCars = function(){
	for (const car of allCars){
		const node = document.createElement('div');
		node.innerText = car;
		node.classList.add('grid-item');
		node.addEventListener('click',companyInfo);
		cars.insertAdjacentElement('afterbegin',node);
	}
};
const companyInfo = function(e:Event){
	const brand = e.target;
	console.log(brand);
};
const carsInfo={

	'Mercedes':{
		country:'Germany',
		founders:'Karl Benz',
	},
	'BMW':{
		country:'Germany',
		founders:[ 'Karl Rapp', 'Franz Josef Popp', 'Camillo Castiglioni', 'Gustav Otto'],
	},
	'Rolls Royce':{
		country:'United Kingdom',
		founders:['Henry Royce, Charles Rolls'],	
	},
	'Peugeot':{
		country:'france',
		founders:['Armand Peugeot'],
	},
	'MG':{
		country:'United Kingdom',
		founders:['Cecil Kimber'],
	},
	'Mini':{
		country:'United Kingdom',
		founders:['Englishman Alec Issigonis'],
	},
	'Porsche':{
		country:'Germany',
		founders:['Ferdinand Porsche'],
	},
	'Maruti Suzuki':{
		country:'India',
		founders:['Government of India'],
	},
	'Hyundai':{
		country:'South Korea',
		founders:['Chung Ju-yung'],
	},
	'Honda':{
		country:'Japan',
		founders:['Soichiro Honda', 'Takeo Fujisawa'],
	},
	'Mahindra':{
		country:'India',
		founders:['Ghulam Muhammad', 'Jagdish Chandra Mahindra', 'Kailash Chandra Mahindra'],
	},
	'Ferrari':{
		country:'Italy',
		founders:['Enzo Ferrari'],
	},
	'Kia':{
		country:'South Korea',
		founders:['Kim Cheol-ho'],
	},
	'Toyota':{
		country:'Japan',
		founders:['Kiichiro Toyoda'],
	},
	'Ford':{
		country:'USA',
		founders:['Henry Ford'],
	},
	'Skoda':{
		country:'Czech Republic',
		founders:['Václav Laurin', 'Václav Klement'],
	},
	'Lamborghini':{
		country:'Italy',
		founders:['Ferruccio Lamborghini'],
	},
	'Mazda':{
		country:'Japan',
		founders:['Jujiro Matsuda'],
	},
	'Tata':{
		country:'India',
		founders:['J. R. D. Tata'],
	},
	'Volkswagen':{
		country:'Germany',
		founders:['German Labour Front'],
	},
	'Audi':{
		country:'Germany',
		founders:['August Horch'],
	},
	'Volvo':{
		country:'Sweden',
		founders:['Assar Gabrielsson', 'Gustaf Larson'],
	},
	'Bentley':{
		country:'United Kingdom',
		founders:['W. O. Bentley', 'H. M. Bentley'],
	},
	'Jeep':{
		country:'USA',
		founders:['Joe Fraze'],
	},
	'Jaguar':{
		country:'United Kingdom',
		founders:['William Lyons', 'William Walmsley'],
	},
	'Aston Martin':{
		country:'United Kingdom',
		founders:['Lionel Martin', 'Robert Bamford'],
	},
	'Maserati':{
		country:'Italy',
		founders:['Ernesto Maserati', 'Ettore Maserati', 'Alfieri Maserati'],
	},
	'Mitsubishi':{
		country:'Japan',
		founders:['Mitsubishi Heavy Industries, Ltd.'],
	},
	'Fiat':{
		country:'Italy',
		founders:['Giovanni Agnelli'],
	},
	'Chevrolet':{
		country:'USA',
		founders:['Louis Chevrolet', 'William C. Durant', 'Samuel McLaughlin', 'Arthur Chevrolet', 'Edwin R. Campbell', 'William Little'],
	},
	'Isuzu':{
		country:'Japan',
		founders:['Yoshisuke Aikawa'],
	},
	'Bugatti':{
		country:'France',
		founders:['Ettore Bugatti'],
	},
	'Citroen':{
		country:'France',
		founders:['André Citroën'],
	},
	'Renault':{
		country:'France',
		founders:['Louis Renault', 'Marcel Renault', 'Fernand Renault'],
	},
	'Lexus':{
		country:'Japan',
		founders:['Eiji Toyoda'],
	},
	'Datsun':{
		country:'Japan',
		founders:['Nissan'],
	},
	'Mclaren':{
		country:'United Kingdom',
		founders:['Bruce McLaren'],
	},
	'Force Motors':{
		country:'India',
		founders:['N. K. Firodia'],
	},
	'Tesla':{
		country:'USA',
		founders:['Elon Musk'],
	},
	'Land Rover':{
		country:'United Kingdom',
		founders:['British Leyland'],
	},
	'Nissan':{
		country:'Japan',
		founders:['Masujiro Hashimoto', 'William Gorham', 'Yoshisuke Aikawa', 'Rokuro Aoyama']
	},
		
};
console.log(carsInfo);