<template>
  <div
    id="app"
    :class="
      typeof weather.main != 'undefined' && weather.main.temp > 20 ? 'warm' : ''
    "
  >
    <div class="main">
      <div class="search_box">
        <input
          type="text"
          class="search_bar"
          placeholder="Search City...."
          v-model="query"
          v-on:keypress="callWWeather"
        />
      </div>

      <div class="weather_wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location_box">
          <div class="location">
            {{ weather.name }} , {{ weather.sys.country }}
          </div>
          <div class="date">{{ dateNow }}</div>
        </div>

        <div class="weather_box">
          <div class="temp">{{ Math.round(weather.main.temp) }} °C</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      api_key: "ad5512a01dcc16a8933f6b253ded7cdb",
      url: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  methods: {
    callWWeather(e) {
      if (e.key === "Enter") {
        fetch(
          //doc openweathermap
          `${this.url}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResult);
      }
    },
    setResult(result) {
      this.weather = result;
    },
  },
  dateNow() {
    let d = new Date();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    console.log(day, date, month, year);

    return `${day} ${date} ${month} ${year}`;
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Courier New", Courier, monospace;
}
#app {
  background-image: url("./assets/winter.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.6s;
}
#app.warm {
  background-image: url("./assets/photo-summer.jpg");
}
.main {
  min-height: 100vh;
  padding: 40px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.85)
  );
}
.search_box {
  width: 100%;
  margin-bottom: 40px;
}
.search_box .search_bar {
  width: 100%;
  display: block;
  padding: 20px;
  color: rgb(62, 44, 44);
  font-size: 22px;

  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0px 0px 10px tgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.45);
  border-radius: 16px 0 16px 0;
  transition: 0.4s;
}
.search_box .search_bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 16px 0px 16px 0px;
}

.location_box .location {
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}
.location_box .date {
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
}
.weather_box {
  text-align: center;
}
.weather_box .temp {
  display: inline-block;
  padding: 10px 24px;
  color: #fff;
  font-size: 100px;
  font-weight: 700;
  text-shadow: 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin: 20px 0px;
  box-shadow: 4px 6px rgba(0, 0, 0, 0.25);
}
.weather_box .weather {
  color: #fff;
  font-size: 48px;
  font-weight: 500;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
