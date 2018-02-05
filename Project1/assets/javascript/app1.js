$("#find-nanp").on("click", function(event) {
  event.preventDefault();
  var np = $("#nanp-input").val();
  var queryURL = "https://developer.nps.gov/api/v1/campgrounds?stateCode=" + np + "&api_key=ebkHAQqxYcIP2uGebz8ASYNVFfvte7BsrBhfhAvC&limit=1";
  console.log(np);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(npData) {
    $("#nanp-view").empty();
    var results = (npData.data)
    console.log(results);

  });//End of function npData
});//End of onclick function
