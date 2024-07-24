<template>
  <q-layout :dark="isDark" view="lHh Lpr lFf">
    <q-header :class="{ 'bg-grey-3': scrolled, 'bg-transparent': !scrolled }">
      <q-toolbar class="justify-end toolbar q-py-xs q-gutter-lg">
        <div class="flex items-center justify-center">
          <q-toggle v-model="value" color="primary" />
          <span class="text-primary inline-block red-text text-bold">Live</span>
        </div>
        <q-icon color="black" size="24px"><LineMdBellLoop /> </q-icon>
        <user-dropdown class="red-text" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      class="q-py-xl overflow-hidden q-pl-lg rounded-drawer drawer bg-white"
    >
      <q-list>
        <img src="../assets/logo.png" class="q-mb-lg q-ml-md q-py-lg" alt="" />
        <q-item
          v-for="(link, index) in navigationLinks"
          :key="index"
          :to="link.to"
          exact
          class="q-mb-lg"
          clickable
          v-ripple
          :active-class="selected-link"
        >
          <q-item-section avatar>
            <q-icon :style="{ color: '#1b1b1b' }" :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6 label" :style="{ color: '#1b1b1b' }">{{
              link.label
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import LineMdBellLoop from "src/components/LineMdBellLoop.vue";
import UserDropdown from "src/components/UserDropdown.vue";
import { ref } from "vue";

const leftDrawerOpen = ref(false);

const value = ref(true);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const navigationLinks = [
  { to: "/", icon: "grid_view", label: "Overview" },
  { to: "/balances", icon: "wallet", label: "Balances" },
  { to: "/collections", icon: "fas fa-database", label: "Collections" },
  { to: "/payout", icon: "eva-external-link-outline", label: "Payouts" },
  { to: "/customers", icon: "eva-person-outline", label: "Customers" },
  { to: "/settlement", icon: "refresh", label: "Settlements" },
  { to: "/conversion", icon: "close_fullscreen", label: "Conversion" },
  { to: "/settings", icon: "build", label: "Settings" },
];

const scrolled = ref(false);

window.addEventListener("scroll", handleScroll);

function handleScroll() {
  const headerHeight = document.querySelector("header").offsetHeight;
  const scrollTop = window.pageYOffset;
  if (scrollTop > headerHeight) {
    scrolled.value = true;
  } else {
    scrolled.value = false;
  }
}
</script>
<style>
.toolbar {
  margin-left: -20px;
}

.q-drawer {
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: hidden;
}

.q-item {
  font-family: "Manrope", sans-serif;
}

.label {
  margin-left: -10%;
}

.selected-link {
  background-color: #bdbdbd;
}
</style>
