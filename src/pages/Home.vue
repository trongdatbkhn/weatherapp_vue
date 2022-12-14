<template>
  <div>
    <div
      id="app"
      :class="
        typeof weather.main != 'undefined' && weather.main.temp > 70
          ? 'warm'
          : ''
      "
    >
      <div class="main">
        <!-- Search -->
        <div class="search_box">
          <input
            type="text"
            class="search_bar"
            placeholder="Search City...."
            v-model="query"
            v-on:keypress="callWWeather"
          />
        </div>
        <!-- Current weather -->
        <div class="weather_wrap" v-if="typeof weather.main != 'undefined'">
          <div class="location_box">
            <div class="location">
              {{ weather.name }} , {{ weather.sys.country }}
            </div>
            <div class="date">{{ dateNow() }}</div>
          </div>

          <div class="weather_box">
            <div class="temp">
              {{ Math.round((weather.main.temp - 32) / 1.8) }} °C
            </div>

            <div class="weather">
              {{ weather.weather[0].main }},
              {{ weather.weather[0].description.toUpperCase() }}
            </div>
          </div>
        </div>
        <!-- Next days -->
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
      locationFound: null,
    };
  },
  mounted: function () {
    // On page load
    let long;
    let lat;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Fetch weather
        this.locationFound = true;
        long = position.coords.longitude;
        lat = position.coords.latitude;
        fetch(
          `${this.url}weather?lat=${lat}&lon=${long}&units=imperial&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            this.setResult(res);
            console.log(res);
          });
      }),
        (error) => {
          alert(error);
          if (error.code == error.PERMISSION_DENIED) {
            this.locationFound = false;
          }
        };
    }
  },
  methods: {
    callWWeather(e) {
      if (e.key === "Enter") {
        fetch(
          //doc openweathermap
          `${this.url}weather?q=${this.query}&units=imperial&APPID=${this.api_key}`
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
      // console.log(day, date, month, year);

      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>

<style></style>
