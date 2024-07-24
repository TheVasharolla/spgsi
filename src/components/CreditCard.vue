<template>
  <q-card
    style="background: linear-gradient(to right, #001e4b, #3879db)"
    class="q-pa-lg credit-card red-text flex justify-between"
  >
    <div class="right">
      <img src="../assets/card_btn.png" class="q-mb-xl" alt="">
      <div class="text-white text-body1 text-bold q-mb-lg">2345 *********3424</div>
      <div class="other-details">
        <div class="text-body text-grey-4 q-gutter-md flex text-weight-medium">
          <p>Expiry Data <br>
          **/**
          </p>
          <p>CVV <br>
          ***
          </p>
        </div>
      </div>
    </div>
    <div class="left flex column items-end">
      <img src="../assets/card_logo.png" class="float-right" style="object-fit: contain;" alt="">
      <p class="font-weight-medium text-white card-text">Physical Card</p>
      <img src="../assets/mastercard.png" class="float-right" style="object-fit: contain;" alt="">
    </div>
  </q-card>
</template>

<script></script>

<style>
.credit-card {
  border-radius:19px;
  margin-bottom: -90px;
}

.right {
  margin-right: 30px;
}
.card-text {
  margin-bottom: 80px;
}
</style>
