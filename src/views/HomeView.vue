<template>
  <div class="bg">
    <div class="container flex">
      <div class="left__block">
        <Weather />
      </div>
      <div class="right__block">
        <Time />
        <AirQuality />
      </div>
    </div>
  </div>
</template>

<script>
import Weather from "@/components/Weather/Weather";
import AirQuality from "@/components/AirQuality/AirQuality";
import Time from "@/components/Time/Time";
export default {
  name: "HomeView",
  components: {AirQuality, Weather, Time}
}
</script>

<style scoped>
.bg {
  background: linear-gradient(248.66deg, #F0B5CE 0%, #8C6BAE 100%);
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
.left__block {
  width: 65%;
}
.right__block {
  width: 35%;
}
</style>