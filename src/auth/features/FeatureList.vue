
<script setup>
import { ref } from 'vue';
import IconBadge from '@/components/icons/IconBadge.vue';
import IconLayer from '@/components/icons/IconLayer.vue';
import IconBook from '@/components/icons/IconBook.vue';

import Feature from '@/auth/features/Feature.vue';

const features = ref([
  {
    icon: IconLayer,
    title: 'Customizable',
    description: 'Accelerate your work with our millions of ready-to-use design projects.',
  },
  {
    icon: IconBadge,
    title: '500 Fortune',
    description: 'Accelerate your work with our millions of ready-to-use design projects.',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Accelerate your work with our millions of ready-to-use design projects.',
  },
]);
</script>

<template>
  <Feature v-for="feature in features" :key="feature.title" v-bind="feature" />
</template>