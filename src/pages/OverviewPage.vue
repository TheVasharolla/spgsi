<template>
  <q-page class="overview-page q-px-md flex red-text">
    <div class="header">
      <h5 class="text-bold head_text text-secondary">Hi Akachukwu</h5>
      <p class="header_sub text-my-grey">Here’s an overview of your account</p>
    </div>
    <div class="first-section flex">
      <OverviewCard style="object-fit: contain;" />
      <div class="relative-position">
        <img src="../assets/credit-card_2.png" alt="" class="absolute cc-1" />
        <credit-card class="credit shadow-11"/>
        <!-- <img src="../assets/credit-card_3.png" alt="" class="absolute cc-2" /> -->
      </div>
    </div>
    <div class="flex justify-between">
      <PieChartCard class="q-mb-lg"/>
      <LineChartCard class="q-mr-sm q-mb-lg"/>
    </div>
    <div class="flex justify-between">
      <InBarChartCard />
      <OutBarChartCard class="q-mr-sm"/>
    </div>
  </q-page>
</template>

<script>
import OverviewCard from "src/components/OverviewCard.vue";
import CreditCard from "src/components/CreditCard.vue";
import PieChartCard from "src/components/PieChartCard.vue";
import LineChartCard from "src/components/LineChartCard.vue";
import InBarChartCard from "src/components/InBarChartCard.vue"
import OutBarChartCard from "src/components/OutBarChartCard.vue";
import { defineComponent } from "vue";

export default defineComponent ({
  name: "OverviewPage",
  components: {
    OverviewCard,
    PieChartCard,
    CreditCard,
    LineChartCard,
    InBarChartCard,
    OutBarChartCard
  },
});
</script>

<style>
.overview-page {
  flex-direction: column;
}

.head_text {
  z-index: 999;
}

.header {
  margin-top: -43px;
  z-index: 10;
}

.header_sub {
  font-weight: 600;
  margin-top: -35px;
  font-size: 14px;
}

.first-section {
  margin-top: 10px;
  margin-bottom: 90px;
}

.relative-position {
  margin-left: 40px;
}

.cc-2 {
  height: 120%;
  z-index: 0;
}

.credit {
  margin-left: 18px;
  margin-top: 45px;
}
</style>
