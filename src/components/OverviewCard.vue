<template>
  <q-card class="over-card q-pr-md q-pl-md q-pt-md" flat>
    <q-card-section dense>
      <div class="card-inner flex justify-between">
        <div class="card_left">
          <p class="card_left-text text-weight-medium">Avaliable balance</p>
          <h4 class="text-bold card-price">N0.00</h4>
          <div class="card-buttons flex q-gutter-sm">
            <q-btn
              class="bg-primary q-btn--no-uppercase q-px-lg"
              flat
              text-color="white"
              icon-right="wallet"
              label="Fund Balance"
            />
            <q-btn
              class="bg-secondary q-btn--no-uppercase q-px-lg"
              flat
              text-color="white"
              icon-right="eva-external-link-outline"
              label="Make Payout"
            />
          </div>
        </div>
        <div class="card_right">
          <q-btn-dropdown
            outline
            style="color: grey"
            dropdown-icon="keyboard_arrow_down"
            bordered
            :label="selectedLabel"
          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick('USD')">
                <q-item-section>
                  <q-item-label>USD</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick('INR')">
                <q-item-section>
                  <q-item-label>INR</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick('CAD')">
                <q-item-section>
                  <q-item-label>CAD</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "OverviewCard",
  data() {
    return {
      selectedLabel: "NGN", // initial label
    };
  },
  methods: {
    onItemClick(label) {
      this.selectedLabel = label;
    },
  },
};
</script>

<style scoped>
.over-card {
  width: 65%;
  height: auto;
  margin-bottom: -40px;
  padding-bottom: -205%;

  object-fit: cover;
  /* padding-bottom: -40%; */
}

.card-buttons {
  margin-bottom: -250%;
}

.card_right {
  padding-right: -0px;
}

.card-price {
  margin-bottom: -4px;
  padding-bottom: 15px;
}

.card_left-text {
  color: #8a8a8a;
  font-size: 16px;
  margin-bottom: -30px;
}
</style>
