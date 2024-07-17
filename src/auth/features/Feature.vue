<script setup>
const props = defineProps({
  icon: Object,
  title: String,
  description: String,
});
</script>

<template>
  <div class="mb-12">
    <div class="block mb-2">
      <component :is="icon"/>
      <h3 class="inline-block ml-2 text-lg font-semibold">
        {{ title }}
      </h3>
    </div>
    <p class="mt-2 text-lg text-gray-500">
      {{ description }}
    </p>
  </div>
</template>


