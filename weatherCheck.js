document.querySelector('button').addEventListener('click', checkTheWeather);
let myApiKey = 'a76cf5a5d0554cc49ab33808262309';

function checkTheWeather() {
  const city = document.querySelector('input').value;
  console.log(city);

  let url = `https://api.weatherapi.com/v1/current.json?key=${myApiKey}&q=${city}&aqi=no`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('h2').innerText = data.location.name;
      document.querySelector('h3').innerText = data.location.country;
      document.querySelector('h4').innerText =
        `${data.current.temp_f}° Fahrenheit`;
    });
}

// http://api.weatherapi.com/v1/current.json?key=${}&q=${}&aqi=no
