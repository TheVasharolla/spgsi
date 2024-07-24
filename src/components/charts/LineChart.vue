<template>
  <apexchart
    type="line"
    height="350"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import { colors } from 'quasar';

export default {
  name: "LineChart",
  data() {
    return {
      series: [
        {
          name: "USD",
          data: [
            { x: "Mon", y: 300 },
            { x: "Tues", y: 550 },
            { x: "Wed", y: 580 },
            { x: "Thur", y: 620 },
            { x: "Fri", y: 950 },
            { x: "Sat", y: 680 },
            { x: "Sun", y: 950 },
          ],
          color: '#009494'
        },
        {
          name: "NGN",
          data: [
            { x: "Mon", y: 450 },
            { x: "Tues", y: 350 },
            { x: "Wed", y: 400 },
            { x: "Thur", y: 750 },
            { x: "Fri", y: 920 },
            { x: "Sat", y: 1100 },
            { x: "Sun", y: 900 },
          ],
          color: '#265193'
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          dashArray: 5, // add this to make the line dotted
          width: 2, // reduce the line width
        },
        xaxis: {
          type: "category",
          categories: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
          labels: {
            rotate: -45, // rotate the labels to make the graph longer
          },
        },
        yaxis: {
          title: {
            text: "Value",
          },
        },
        grid: {
          xaxis: {
            lines: {
              show: true, // add this to show the grid lines
            },
          },
        },
      },
    };
  },
};
</script>
