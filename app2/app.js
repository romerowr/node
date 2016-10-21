var flight=require('./vols');

var pl_data1={
	number:847,
	origin:'BCN',
	destination:'MAD'
};

var pl_data2={
	number:848,
	origin:'MAD',
	destination:'BCN'
};

//CREAR AVIO
var pl1=flight(pl_data1);
//SORTIDA DE LAVIO 
pl1.triggerDepart();
//CREAR AVIO 2
var pl2=flight(pl_data2);
//SORTIDA DE LAVIO 
pl2.triggerArrive();
console.log(pl2.getInformation());


/*flight.setOrigin('Barcelona');
flight.setDestination('London');
flight.setNumber(123);

console.log(flight.getInfo());*/