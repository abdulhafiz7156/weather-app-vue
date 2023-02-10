<template>
  <div class="pt-60">
    <div class="celsius__or__fahrenheit">
      <div class="fahrenheit" :class="!this.activeCelsiusOrFahrenheit  ? 'celsius__or__fahrenheit__active' : ''" @click="this.activeCelsiusOrFahrenheit = false">F</div>
      <div class="celsius" :class="this.activeCelsiusOrFahrenheit  ? 'celsius__or__fahrenheit__active' : ''" @click="this.activeCelsiusOrFahrenheit = true">C</div>
    </div>
    <div class="weather__and__data__time">
      <div>
        <img src="../../assets/images/icons/icon-1.png" alt="">
        <h1 class="t-shadow">27 <sup>° C</sup></h1>
      </div>
      <div class="data__and__time">
        <h3>17th Jun ‘21</h3>
        <p>Thrusday <span>|</span> 2:45 am</p>
      </div>
    </div>
    <div class="wind__humidity__rain df">
      <div class="df_ai">
        <img src="@/assets/images/icons/wind.svg" alt="">
        <p>Wind <span>10 km/h</span></p>
      </div>
      |
      <div class="df_ai">
        <img src="@/assets/images/icons/hum.svg" alt="">
        <p>Hum <span>54%</span></p>
      </div>
      |
      <div class="df_ai">
        <img src="@/assets/images/icons/rain.svg" alt="">
        <p>Rain <span>0.2 %</span></p>
      </div>
    </div>
    <div class="weather__to__week__with__slider">
    </div>
  </div>
</template>

<script>
import "./Weather.css"


export default {
  name: "Weather",
  data() {
    return {
      activeCelsiusOrFahrenheit: false
    }
  },
  methods: {

  },
  mounted() {
  },
  components: {
  }
}
</script>