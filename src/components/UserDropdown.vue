<template>
  <q-card class="rounded-card flat q-pa-xs text-black">
    <q-btn flat class="full-width rounded-borders no-box-shadow" ref="btn">
      <div class="row no-wrap items-center q-pa-xs">
        <q-avatar color="blue" text-color="white" size="40px" class="q-mr-sm">
          S
        </q-avatar>
        <div class="q-gutter-xs">
          <span class="text-body1 text-sentence text-left q-mt-lg"
            >Santex Enterprise</span
          ><br />
          <span class="text-caption text-sentence">Merchant ID: 333670089</span>
        </div>
        <q-space />
        <q-icon name="keyboard_arrow_down" />
      </div>
    </q-btn>

    <q-menu fit class="custom-menu" auto-close>
      <q-list>
        <q-item clickable v-ripple to="/settings">
          <q-item-section> Settings </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Logout </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-card>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  setup() {
    const $q = useQuasar();


  },
};
</script>

<style lang="scss" scoped>
.rounded-card {
  border-radius: 40px;
}

.text-sentence {
  text-transform: none;
}
</style>
