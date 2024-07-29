<script setup>
import { numberFormat } from '@/utils/helper';
import useCheckout from '@/composables/useCheckout';

const { checkout } = useCheckout();

const props = defineProps({
  price: Number,
  title: String,
  description: String,
  features: Array,
  buttonColor: String,
});

</script>

<template>
  <div>
    <div class="p-8 border rounded-3xl">
      <h1 class="text-5xl font-semibold">
        IDR {{ numberFormat(price) }} <span class="text-xl font-light text-gray-500">/month</span>
      </h1>
      <h2 class="text-lg font-semibold mt-7">{{ title }}</h2>
      <p class="mb-6 text-gray-500">{{ description }}</p>
      <ul class="mb-6 text-gray-700">
        <li v-for="feature in features" class="mb-3">
          <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
          {{ feature }}
        </li>
      </ul>
      <button @click="checkout(price)"
        class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black border border-transparent rounded-full md:py-2 md:text-md md:px-10 hover:shadow"
        :class="buttonColor">
        Checkout Now
      </button>
    </div>
  </div>
</template>
