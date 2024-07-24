<template>
  <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  name: "PieChart",
  data() {
    return {
      series: [200, 100],
      chartOptions: {
        chart: {
          type: "donut",
          width: "30px",
          height: "30px",
        },
        labels: ["Paying", "Non-Paying"],
        colors: ["#009494", "#265193"],
        dataLabels: {
          enabled: false,
        },
      },
    };
  },
};
</script>
