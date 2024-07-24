<template>
  <q-card class="pie-card q-pa-md" flat>
    <q-card-section>
      <div class="text-body2 grey-text text-bold head_text">
        Transaction Summary
      </div>
    </q-card-section>
    <q-card-section>
      <pieChart />
    </q-card-section>
    <q-card-section>
      <div class="pie_card-text flex justify-between">
        <div class="pie-text">
          <div class="text-body1 text-weight-medium q-mb-sm">
            Total Transaction Volume
          </div>
          <div class="text-body2 text-weight-bolder red-text">285</div>
        </div>
        <div class="pie-text">
          <div class="text-body1 text-weight-medium q-mb-sm">
            Total Transaction Amount
          </div>
          <div class="text-body2 text-weight-bolder red-text">2,600,000</div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineAsyncComponent } from "vue";

const pieChart = defineAsyncComponent(() =>
  import("components/charts/PieChart.vue")
);

export default {
  name: "PieChartCard",
  components: {
    pieChart,
  },
};
</script>

<style>
.pie-card {
  width: 48%;
}

.head_text {
  color: #404040;
}
</style>
