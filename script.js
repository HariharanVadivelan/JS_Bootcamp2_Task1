
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var countrydata = JSON.parse(this.response);

for(var i in countrydata)
{
    var lat = countrydata[i].latlng[0];
    var long = countrydata[i].latlng[1];
   // console.log(lat,long);
    openweather(lat,long);
}

}
function openweather(latit,longit)
{

    
var request = new XMLHttpRequest();
var openweatherlink ='https://api.openweathermap.org/data/2.5/weather?lat='+latit+'&lon='+longit+'&appid=900763494a63bc48a2f057097d714f5c';
request.open('GET',openweatherlink,true);
request.send();
request.onload = function(){
    var weather = JSON.parse(this.response);
    console.log(weather.main);

}
}



