// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  if (someValue < 42 ) {
    return 42 - someValue;
  } else {
    return someValue - 42;
  }
}
function  distanceFromHqInFeet(someValue) {
 let distance =  distanceFromHqInBlocks(someValue);
    return 264 * distance; 
}
function distanceTravelledInFeet(start, destination) {
 if (destination>=start) {
   return (destination-start) * 264  
 } else { 
   return (start-destination) * 264
 }
} 
 function calculatesFarePrice () {

   }
   distanceTravelledInFeet (30, 60)

function calculatesFarePrice(start, destination) {
 const distance = distanceTravelledInFeet(start, destination)
 if (distance < 400) {
 return 0;
 } else if (distance > 400 && distance < 2000) {
   return (distance - 400) * 0.02;
 } else if (distance > 2000 && distance < 2500) {
   return 25;
 } else {
   return `cannot travel that far`;
 } 
}
   

