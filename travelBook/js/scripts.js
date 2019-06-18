// ------------ Back-end logic ------------------

function Place(city, landmark, year, notes) {
  this.city = city;
  this.landmark = landmark;
  this.year = year;
  this.notes = notes;
}

Place.prototype.describeLandmark = function() {
  return "The" + this.landmark + " " + this.notes;
}


// ---------- User interface logic --------------
$(document).ready(function() {
  $(".sanFran").click(function(event) {
    event.preventDefault();
    var testPlace = new Place("San Francisco", "Golden Gate Bridge", 2015, "was a great time");
    $("#hidden").append(testPlace.city + " ");
    $("#hidden").append(testPlace.landmark + " ");
    $("#hidden").append(testPlace.year + " ");
    $("#hidden").append(testPlace.notes + " ");
  });
});
