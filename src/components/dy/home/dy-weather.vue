<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.11.15
* Filename      : dy-weather.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="DyWeather">
    <div class="liveWeatherContainer">
      <div class="locationInfo">
        <div class="province"><Icon type="ios-pin" />{{ province }}</div>
        <div class="city">{{ city }}</div>
      </div>
      <div class="liveWeather">
        <div>
          <span>实时天气</span>
          <span class="reporttime">{{ (liveWeather && liveWeather.reporttime) || '' }}</span>
        </div>
        <div class="weatherContainer">
          <div class="weatherIcon"><Icon type="ios-cloudy-night" /></div>
          <div class="weather">{{ (liveWeather && liveWeather.weather) || '' }}</div>
          <div class="temperature">{{ (liveWeather && liveWeather.temperature) || '' }}℃</div>
          <div class="wind">
            {{
              `${(liveWeather && liveWeather.winddirection) || ''}风
              ${(liveWeather && liveWeather.windpower) || ''}级`
            }}
          </div>
          <div>空气湿度：{{ (liveWeather && liveWeather.humidity) || '' }}</div>
        </div>
      </div>
    </div>
    <div class="forcastWeatherContainer">
      <div
        v-for="item in forecastWeather || []"
        :key="item.date"
        class="castWeatherContainer">
        <div class="date">{{ item.date }}</div>
        <div class="weatherContainer">
          <div class="dayWeatherContainer">
            <div class="title">白天</div>
            <div class="weatherIcon"><Icon type="ios-cloudy-night" /></div>
            <div class="weather">{{ item.dayweather }}</div>
            <div class="temperature">{{ item.daytemp }}℃</div>
            <div class="wind">{{ item.daywind }}风</div>
            <div class="windpower">{{ item.daypower }}级</div>
          </div>
          <div class="nightWeatherContainer">
            <div class="title">夜间</div>
            <div class="weatherIcon"><Icon type="ios-cloudy-night" /></div>
            <div class="weather">{{ item.nightweather }}</div>
            <div class="temperature">{{ item.nighttemp }}℃</div>
            <div class="wind">{{ item.nightwind }}风</div>
            <div class="windpower">{{ item.nightpower }}级</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DyWeather',
  components: {},
  data() {
    return {
      province: '',
      city: '',
      // adcode:'',
      // rectangle: {
      //   latitude: 0, //维度
      //   longitude: 0 //经度
      // },
      liveWeather: null,
      forecastWeather: null
    };
  },
  created() {
    this.getLocationByIp('');
  },
  mounted() {},
  methods: {
    async getLocationByIp(ip) {
      const {
        data: { adcode, city, info, infocode, province, rectangle, status }
      } = await this.$http(
        'get',
        // `https://restapi.amap.com/v3/ip?ip=${location.hostname}&output=json&key=${this.AMapKey}`,
        `https://restapi.amap.com/v3/ip?output=json&key=${this.AMapKey}`,
        ''
      );
      console.log(adcode, city, info, infocode, province, rectangle, status);
      // let province = '北京';
      // let city = '北京市';
      if (info === 'OK') {
        this.province = province;
        this.city = city;
        this.adcode = adcode;
        this.rectangle = {
          latitude: rectangle.split(',')[1],
          longitude: rectangle.split(',')[0]
        };
        this.getLiveWeather(adcode);
        this.getForecastWeather(adcode);
        // this.getLiveWeather('110000');
        // this.getForecastWeather('110000');
      } else {
        this.$message.error('获取ip定位失败');
      }
    },
    async getForecastWeather(adcode) {
      const {
        data: { status, count, info, infocode, forecasts }
      } = await this.$http(
        'get',
        // `https://restapi.amap.com/v3/weather/weatherInfo?extensions=${base/all(实况天气/预报天气)}&output=json&city=${adcode}&key=${this.AMapKey}`,
        `https://restapi.amap.com/v3/weather/weatherInfo?extensions=all&city=${adcode}&key=${this.AMapKey}`,
        ''
      );
      // forecast:预报天气 包含今天和未来3天的天气。casts有4条数据
      // let forecasts = [
      //   {
      //     city: '北京市',
      //     adcode: '110000',
      //     province: '北京',
      //     reporttime: '2024-11-15 15:02:31',
      //     casts: [
      //       {
      //         date: '2024-11-15',
      //         week: '5',
      //         dayweather: '雾',
      //         nightweather: '阴',
      //         daytemp: '16',
      //         nighttemp: '7',
      //         daywind: '东南',
      //         nightwind: '东南',
      //         daypower: '1-3',
      //         nightpower: '1-3',
      //         daytemp_float: '16.0',
      //         nighttemp_float: '7.0'
      //       },
      //       {
      //         date: '2024-11-16',
      //         week: '5',
      //         dayweather: '雾',
      //         nightweather: '阴',
      //         daytemp: '16',
      //         nighttemp: '7',
      //         daywind: '东南',
      //         nightwind: '东南',
      //         daypower: '1-3',
      //         nightpower: '1-3',
      //         daytemp_float: '16.0',
      //         nighttemp_float: '7.0'
      //       },
      //       {
      //         date: '2024-11-17',
      //         week: '5',
      //         dayweather: '雾',
      //         nightweather: '阴',
      //         daytemp: '16',
      //         nighttemp: '7',
      //         daywind: '东南',
      //         nightwind: '东南',
      //         daypower: '1-3',
      //         nightpower: '1-3',
      //         daytemp_float: '16.0',
      //         nighttemp_float: '7.0'
      //       },
      //       {
      //         date: '2024-11-18',
      //         week: '5',
      //         dayweather: '雾',
      //         nightweather: '阴',
      //         daytemp: '16',
      //         nighttemp: '7',
      //         daywind: '东南',
      //         nightwind: '东南',
      //         daypower: '1-3',
      //         nightpower: '1-3',
      //         daytemp_float: '16.0',
      //         nighttemp_float: '7.0'
      //       }
      //     ]
      //   }
      // ];
      console.log(status, count, info, infocode, forecasts);
      if (info === 'OK') {
        this.forecastWeather = forecasts[0].casts;
        console.log(' this.forecastWeather ', this.forecastWeather);
      } else {
        this.$message.error('获取预报天气失败');
      }
    },
    async getLiveWeather(adcode) {
      const {
        data: { status, count, info, infocode, lives }
      } = await this.$http(
        'get',
        // `https://restapi.amap.com/v3/weather/weatherInfo?extensions=${base/all(实况天气/预报天气)}&output=json&city=${adcode}&key=${this.AMapKey}`,
        `https://restapi.amap.com/v3/weather/weatherInfo?extensions=base&city=${adcode}&key=${this.AMapKey}`,
        ''
      );
      // lives:实时天气
      // let lives = [
      //   {
      //     province: '北京',
      //     city: '北京市',
      //     adcode: '110000',
      //     weather: '雾',
      //     temperature: '13',
      //     winddirection: '东南',
      //     windpower: '≤3',
      //     humidity: '81',
      //     reporttime: '2024-11-15 15:02:31',
      //     temperature_float: '13.0',
      //     humidity_float: '81.0'
      //   }
      // ];
      console.log(status, count, info, infocode, lives);

      if (info === 'OK') {
        this.liveWeather = lives[0];
      } else {
        this.$message.error('获取实时天气失败');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.DyWeather {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  .liveWeatherContainer {
    display: flex;
    margin-bottom: 10px;
    .locationInfo {
      margin-right: 10px;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.3);
      padding: 10px;
      color: $dy-font-color;
      .province {
        font-size: 16px;
        font-weight: bold;
      }
      .city {
        font-size: 22px;
        font-weight: bold;
      }
    }
    .liveWeather {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.3);
      padding: 10px;
      .reporttime {
        margin-left: 20px;
        color: $dy-font-color;
      }
      .weatherContainer {
        display: flex;
        font-size: 16px;
        font-weight: bold;
        .weatherIcon {
          margin-right: 10px;
        }
        .weather {
          margin-right: 10px;
        }
        .temperature {
          margin-right: 10px;
        }
        .wind {
          margin-right: 10px;
        }
      }
    }
  }
  .forcastWeatherContainer {
    display: flex;
    width: 100%;
    flex: 1;
    .castWeatherContainer {
      display: flex;
      flex-direction: column;
      flex: 1;
      height: 100%;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.3);
      padding: 5px;
      margin-right: 5px;
      .date {
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        color: $dy-font-color;
      }
      .weatherContainer {
        display: flex;
        width: 100%;
        flex: 1;
        .dayWeatherContainer {
          flex: 1;
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.5);
          padding: 5px;
          margin-right: 5px;
        }
        .nightWeatherContainer {
          flex: 1;
          border-radius: 5px;
          background: rgba(0, 0, 0, 0.1);
          padding: 5px;
          margin-left: 5px;
        }
        .title {
          font-size: 14px;
        }
        .weatherIcon {
          font-size: 22px;
        }
        .weather {
          font-size: 16px;
          font-weight: bold;
        }
        .temperature {
          font-size: 16px;
          font-weight: bold;
        }
        .wind {
          font-size: 16px;
          font-weight: bold;
        }
        .windpower {
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
    .castWeatherContainer:last-child {
      margin-right: 0px;
    }
  }
}
</style>
