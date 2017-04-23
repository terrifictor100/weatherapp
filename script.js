
//create a function to get weather in celcuius first
function getWeather(unit){
//inside this function...
//Check if the browser supports geolocation. If it does, it will get the latitude and longitude of your location. 
//Else - location id shows no location message.
if (navigator.geolocation){
navigator.geolocation.getCurrentPosition(function(position) {
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
//Use the lat and long as the location for simpleWeather   
    $.simpleWeather ({
    location: lat+','+long,
    woeid: '',
    unit: unit,
    success: function(weather){
      var city = weather.city;
      var unit = weather.units.temp;
      var altUnit = weather.alt.unit;
      var temp = weather.temp;
      var altTemp = weather.alt.temp;
      var type = weather.currently;
      var code = weather.code;
      
      $("#location").html(city);
      $("#type").html(type);
      $("#temperature").html(temp+'&deg;'+unit);
      $("#image").html('<i class="wi wi-yahoo-'+code+'"></i>');
      $(".tempFar").html(altTemp+'&deg;'+altUnit);

    }
});
})
}           
//if no geolocation - show this error message
else {
    $("#location").html("Geolocation is not supported by this browser");
}
}

//Load the document to run the loadWeather function

$(document).ready(function() {
getWeather('c');
});


