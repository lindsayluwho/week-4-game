var score = 0;
var goal;
var wins = 0;
var losses = 0;
var crystalValue = [(Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1];
var crystalImageSrc = ["assets/images/gem1.png", "assets/images/gem2.png", "assets/images/gem3.png", "assets/images/gem4.png"];

$("document").ready(function(){
 	setGoal();
 	setCrystalValue();
	for (var i = 0; i < crystalValue.length; i++) {

	    // create an imageCrystal
	    var imageCrystal = $("<img>");

	    // give each crystal ".crystal-image" class
	    imageCrystal.addClass("crystal-image");

	    // assign image src based on crystalImageSrc array
	    imageCrystal.attr("src", crystalImageSrc[i]);

	    // give each imageCrystal data attribute called data-crystalValue which is equal to the crystalValue array value
	    imageCrystal.attr("data-crystalvalue", crystalValue[i]);

	    // append each crystal image to the page.
	    $(".crystals").append(imageCrystal);
	 }

	$(".crystal-image").click(function() {
		score += parseInt($(this).attr("data-crystalvalue"));
		$(".score").text(score);

		if (score==goal)
		{
			wins++;
			$(".wins").text(wins);
			alert ("You won! Click 'OK' to play again.");
			setGoal();
			setCrystalValue();
			score = 0;
			$(".score").text(score);
		}

		if (score > goal)
		{
			losses++;
			$(".losses").text(losses);
			alert ("Looks like you lost this round. Click 'OK' to play again.");
			setGoal();
			setCrystalValue();
			score = 0;
			$(".score").text(score);
		}
	});

 });


function setGoal (){
	goal = Math.floor(Math.random()*100)+20;
	$(".goal").text(goal);
};

function setCrystalValue(){
	crystalValue = [(Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1];
	console.log (crystalValue);
};