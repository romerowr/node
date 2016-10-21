var flight=require('./vols');

flight.setOrigin('Barcelona');
flight.setDestination('London');
flight.setNumber(123);

console.log(flight.getInfo());