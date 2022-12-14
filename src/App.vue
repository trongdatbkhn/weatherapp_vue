<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: "App",
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
  padding: 24px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.85)
  );
}
.search_box {
  width: 100%;
  margin-bottom: 30px;
}
.search_box .search_bar {
  width: 100%;
  display: block;
  padding: 14px;
  color: rgb(62, 44, 44);
  font-size: 18px;

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
  font-weight: 500;
  text-align: center;
}
.location_box .date {
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
}
.weather_box {
  text-align: center;
}
.weather_box .temp {
  display: inline-block;
  padding: 10px 24px;
  color: #fff;
  font-size: 76px;
  font-weight: 600;
  text-shadow: 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin: 20px 0px;
  box-shadow: 4px 6px rgba(0, 0, 0, 0.25);
}
.weather_box .weather {
  color: #fff;
  font-size: 34px;
  font-weight: 500;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
