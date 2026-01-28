var weight = 69;
var height = 1.75;
var BMI = (weight / ((height)**2));
console.log(BMI.toFixed(1));

if(BMI < 18.5){
  console.log("You are underweight.");
}
else if((BMI >= 18.5) && (BMI <= 24.9)){
  console.log("You are normal.");
}
else if((BMI >= 25) && (BMI <= 29.9)){
  console.log("You are overweight.");
}
else{
  console.log("You are obese.")
}