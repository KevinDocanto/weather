let container = document.querySelector(".container");
let img = document.createElement("img");
let temp = document.querySelector("#temp");
let search = document.querySelector("#search");
let submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        search.value +
        "&units=imperial&appid=f0173a249c8ab027c9e28bb229559054"
    )
    .then((res) => {
      let tempApi = Math.floor(res.data.main.temp);
      let icon =
        "https://openweathermap.org/img/wn/" +
        res.data.weather[0].icon +
        "@2x.png";
      img.src = icon;
      temp.textContent = tempApi;
      container.append(img);
    })
    .catch((err) => {
      console.log("ERROR!", err);
    });
});
