function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTZ = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTZ.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTZ.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }

  //Vienna
  let viennaElement = document.querySelector("#vienna");
  if (viennaElement) {
    let viennaDateElement = viennaElement.querySelector(".date");
    let viennaTimeElement = viennaElement.querySelector(".time");
    let viennaTZ = moment().tz("Europe/Vienna");
    viennaDateElement.innerHTML = viennaTZ.format("MMMM Do YYYY");
    viennaTimeElement.innerHTML = viennaTZ.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cities = document.querySelector(".cities");
  cities.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "H:mm:ss [<small>]A[</small>]"
        )}</div>
    </div>
  `;

  //console.log(cityTime.format("H:mm:ss"));
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
