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
          <div class="location" v-if="city !== ''">
            {{ this.capitalizeFirstLetter(city) }}, {{ weather.sys.country }}
          </div>
          <div class="location" v-else>
            {{ weather.name }} , {{ weather.sys.country }}
          </div>
          <div class="date">{{ dateNow() }}</div>
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
  },
};
</script>

<style></style>
