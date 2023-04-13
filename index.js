const submitBtn = document.querySelector("#submitBtn");
const parprediction = document.querySelector("#par");
const allPredictions = [
  "You will meet your soulmate very soon!",
  "Be careful on the road!",
  "Don't think too much!",
  "Do what you must and come what may!",
  "You will win the lottery, buy a ticket!"
];

submitBtn.addEventListener("click",function(){
	let randomePredictions = allPredictions[Math.floor(Math.random()* allPredictions.length)];
	parprediction.style.display = "block";
	parprediction.textContent = randomePredictions;
});

