<template>
  <apexchart
    type="bar"
    height="350"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  name: "InBarChart",
  data() {
    return {
      series: [
        {
          name: "Payin",
          data: [300, 700, 420, 600, 450, 470, 450],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        colors: ["#009494"],
        plotOptions: {
          bar: {
            columnWidth: "50%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: true,
            formatter: function (val) {
              return val;
            },
          },
          tickAmount: 8, // adjust the number of ticks
          min: 0, // set the minimum value
          max: 800, // set the maximum value (adjust according to your data)
          tickInterval: 100, // set the interval between ticks
        },
        title: {
          text: "Payin",
          floating: true,
          offsetY: -20,
          align: "left",
          style: {
            color: "#00A7A3",
            fontSize: "16px",
          },
        },
        legend: {
          show: false,
        },
        tooltip: {
          enabled: true,
          formatter: function (val, { series, dataPointIndex }) {
            return `${val} NGN`;
          },
        },
      },
    };
  },
};
</script>
