function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTZ = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTZ.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTZ.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  //Vienna
  let viennaElement = document.querySelector("#vienna");
  let viennaDateElement = viennaElement.querySelector(".date");
  let viennaTimeElement = viennaElement.querySelector(".time");
  let viennaTZ = moment().tz("Europe/Vienna");
  viennaDateElement.innerHTML = viennaTZ.format("MMMM Do YYYY");
  viennaTimeElement.innerHTML = viennaTZ.format("H:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
