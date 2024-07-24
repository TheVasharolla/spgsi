<template>
  <q-card class="line-card q-pa-md" flat>
    <div class="flex justify-between">
      <q-card-section class="flex">
      <div class="text-body2 red-text grey-text text-bold head_text">
        Conversion Graph
      </div>
    </q-card-section>
    <q-card-section class="flex justify-end">
      <q-btn-dropdown
        outline
        class="q-px-sm q-mr-md"
        style="color: grey"
        dropdown-icon="keyboard_arrow_down"
        bordered
        :label="selectedLabel"
      >
        <q-list style="color: grey">
          <q-item clickable v-close-popup @click="onItemClick('NGN - CAD', 'currency')">
            <q-item-section>
              <q-item-label>NGN - CAD</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick('NGN - INR', 'currency')">
            <q-item-section>
              <q-item-label>NGN - INR</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick('NGN - GCD', 'currency')">
            <q-item-section>
              <q-item-label>NGN - GCD</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn-dropdown
        outline
        class="q-px-sm q-mr-md"
        style="color: grey; text-transform: none;"
        dropdown-icon="keyboard_arrow_down"
        bordered
        :label="diSelectedLabel"
      >
        <q-list style="color: grey">
          <q-item clickable v-close-popup @click="onItemClick('Last 7 Days', 'duration')">
            <q-item-section>
              <q-item-label>Last 7 Days</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick('Last 4 weeks', 'duration')">
            <q-item-section>
              <q-item-label>Last 4 weeks</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick('Last 12 months', 'duration')">
            <q-item-section>
              <q-item-label>Last 12 months</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-card-section>
    </div>
    <q-card-section>
      <line-chart />
    </q-card-section>
  </q-card>
</template>

<script>
import { defineAsyncComponent } from "vue";

const lineChart = defineAsyncComponent(() =>
  import("components/charts/LineChart.vue")
);

export default {
  name: "LineChartCard",
  data() {
    return {
      selectedLabel: "NGN - USD",
      diSelectedLabel: "Last 7 days"
    }
  },
  methods: {
    onItemClick(label, type) {
      if (type === 'currency') {
        this.selectedLabel = label;
      } else if (type === 'duration') {
        this.diSelectedLabel = label;
      }
    },
  },
  components: {
    lineChart,
  },
};
</script>

<style>
  .line-card {
    width: 50%;
  }
</style>
