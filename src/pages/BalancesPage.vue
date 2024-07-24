<template>
  <q-page class="balances-page q-px-md red-text">
    <div class="header q-mb-xl">
      <q-tabs v-model="tab" narrow-indicator dense class="text-secondary">
        <q-tab
          :ripple="false"
          style="text-transform: none"
          name="mails"
          label="Balances"
          class="header_tab"
        />
        <q-tab
          :ripple="false"
          style="text-transform: none"
          name="alarms"
          label="Balance History"
          class="header_tab"
        />
      </q-tabs>
    </div>
    <div class="main">
      <q-btn
        style="text-transform: none"
        class="bg-secondary text-white q-px-lg q-mb-xl q-mt-md"
        flat
        label="Create Wallet"
        @click="onClick"
      />
      <div class="cards flex q-gutter-lg">
        <q-card class="my-card q-py-lg" flat>
          <q-card-section>
            <div class="text-h6 text-bold grey-text">NGN Balance</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section> N0.00 </q-card-section>
          <q-card-section>
            <q-btn
              flat
              style="text-transform: none"
              class="bg-primary text-white q-mr-lg"
              icon-right="wallet"
              label="Fund Balance"
              @click="onClick"
            />
            <q-btn
              class="bg-white text-secondary q-px-lg"
              style="text-transform: none"
              outline
              label="Set Low Limit"
              @click="onClick"
            />
          </q-card-section>
        </q-card>
        <q-card class="my-card q-py-lg" flat>
          <q-card-section>
            <div class="text-h6 text-bold grey-text">USD Balance</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section> N0.00 </q-card-section>
          <q-card-section>
            <q-btn
              flat
              style="text-transform: none"
              class="bg-primary text-white q-mr-lg"
              icon-right="wallet"
              label="Fund Balance"
              @click="onClick"
            />
            <q-btn
              class="bg-white text-secondary q-px-lg"
              style="text-transform: none"
              outline
              label="Set Low Limit"
              @click="onClick"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("mails"),
    };
  },
};
</script>

<style>
.balances-page {
  /* flex-direction: column; */
  margin-top: -12px;
}

.my-card {
  width: 40%;
}

.header {
  margin-left: -85%;
}
</style>
