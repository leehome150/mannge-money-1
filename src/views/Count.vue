<template>
    <layout>
       <MyIcon/>
        <div id="main" style="width: 600px;height:400px;"></div>
    </layout>
</template>

<script lang="js">
    import Vue from "vue"
  import MyIcon from '@/views/MyIcon.vue';
  import "echarts/lib/chart/bar";
  import echarts from "echarts";
  Vue.prototype.$echarts = echarts;
  export default{
      components: {
          "MyIcon":MyIcon,
      },
      methods: {
          drawChart() {
              // 基于准备好的dom，初始化echarts实例
              const myChart = this.$echarts.init(document.getElementById("main"));
              // 指定图表的配置项和数据
              const option = {
                  title: {
                      text: "ECharts 入门示例"
                  },
                  tooltip: {},
                  legend: {
                      data: ["销量"]
                  },
                  xAxis: {
                      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                  },
                  yAxis: {},
                  series: [
                      {
                          name: "销量",
                          type: "bar",
                          data: [5, 20, 36, 10, 10, 20]
                      }
                  ]
              };
              // 使用刚指定的配置项和数据显示图表。
              myChart.setOption(option);
          }
      },
      mounted() {
          this.drawChart();
      }



  };
</script>

<style lang="scss" scoped>

</style>