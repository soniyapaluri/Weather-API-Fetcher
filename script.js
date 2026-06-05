const API_KEY = "0e8921b359e649a5bd2170209260406";

async function getWeather() {

const city = document.getElementById("cityInput").value;

if(city===""){
alert("Enter city name");
return;
}

const url =
`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

try{

const response = await fetch(url);
const data = await response.json();

document.getElementById("city").innerText =
data.location.name + ", " + data.location.country;

document.getElementById("temp").innerText =
data.current.temp_c + " °C";

document.getElementById("condition").innerText =
data.current.condition.text;

document.getElementById("humidity").innerText =
data.current.humidity + "%";

document.getElementById("wind").innerText =
data.current.wind_kph + " km/h";

document.getElementById("feels").innerText =
data.current.feelslike_c + " °C";

document.getElementById("uv").innerText =
data.current.uv;

changeTheme(data.current.condition.text);

}
catch(error){
alert("City not found");
}
}

function changeTheme(condition){

const body = document.body;
const emoji = document.getElementById("emoji");

condition = condition.toLowerCase();

if(condition.includes("sun")){
body.style.background =
"linear-gradient(135deg,#f6d365,#fda085)";
emoji.innerHTML="☀️";
}
else if(condition.includes("rain")){
body.style.background =
"linear-gradient(135deg,#0f2027,#2c5364)";
emoji.innerHTML="🌧️";
}
else if(condition.includes("cloud")){
body.style.background =
"linear-gradient(135deg,#8e9eab,#eef2f3)";
emoji.innerHTML="☁️";
}
else if(condition.includes("snow")){
body.style.background =
"linear-gradient(135deg,#89f7fe,#66a6ff)";
emoji.innerHTML="❄️";
}
else if(condition.includes("storm")){
body.style.background =
"linear-gradient(135deg,#41295a,#2F0743)";
emoji.innerHTML="⛈️";
}
else{
body.style.background =
"linear-gradient(135deg,#667eea,#764ba2)";
emoji.innerHTML="🌤️";
}
}