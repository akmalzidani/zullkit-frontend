<script setup>
import FeatureList from '@/auth/features/FeatureList.vue';
import PriceCard from '@/components/PriceCard.vue';
import { ref } from 'vue';

const priceList = ref([
  {
    id: 1,
    price: 2000,
    title: 'Basic Plan',
    description: 'Suitable for new team',
    features: [
      'Customizable layers',
      'Official documentation',
      'SVG icons',
      'SVG illustrations',
      'Pre-built design screen',
    ],
    buttonColor: 'bg-gray-200 hover:bg-gray-300',
  },
  {
    id: 2,
    price: 9000,
    title: 'Gold Plan',
    description: 'Suitable for big company',
    features: [
      'Customizable layers',
      'Official documentation',
      'SVG icons',
      'SVG illustrations',
      'Pre-built design screen',
      'Coded template',
      'Support 24/7',
      'Private designer group',
      'Unlock cloning app',
    ],
    buttonColor: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  },
]);
</script>

<template>
  <div class="relative overflow-hidden bg-white">
      <div class="mx-auto">
        <div
          class="flex flex-col items-center w-full sm:justify-center sm:pt-0"
        >
          <div class="w-full p-5 mx-auto mt-10 md:max-w-7xl">
            <h2 class="mb-4 text-5xl font-bold text-center">
              <span class="block lg:mb-2">Friendly Pricing,</span>
              <span class="block">High Quality Design</span>
            </h2>
            <p class="mb-5 text-lg text-center text-gray-500">
              Working faster and better than before
            </p>
          </div>
          <div class="w-full p-5 mx-auto mb-10 md:max-w-4xl">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
              <PriceCard v-for="price in priceList" :key="price.id" v-bind="price" />
            </div>
          </div>
          <div class="w-full p-5 mx-auto mb-10 md:max-w-7xl">
            <div class="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 md:mx-0">
              <FeatureList/>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>