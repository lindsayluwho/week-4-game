var score;
var goal;
var wins;
var losses;
var crystalValue = [(Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1, (Math.floor(Math.random() * 11)) + 1];
var crystalImageSrc = ["assets/images/gem1.png", "assets/images/gem2.png", "assets/images/gem3.png", "assets/images/gem4.png"];

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