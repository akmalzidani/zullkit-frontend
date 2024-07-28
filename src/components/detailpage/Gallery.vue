<script setup>
import { ref } from 'vue';

const props = defineProps({
  defaultImage: String,
  galleries: Object,
});

const thumbnails = ref(props.defaultImage);

const selectGallery = function(image) {
  this.thumbnails = image;
}

</script>
<template>
  <section id="gallery">
      <img :src="thumbnails" alt="" class="w-full mt-6 rounded-2xl">
    <div class="grid grid-cols-4 gap-4 mt-4">
        <div class="overflow-hidden cursor-pointer rounded-2xl" v-for="gallery in galleries" :key="gallery.id"
          :class="{ 'ring-2 ring-indigo-500': thumbnails === gallery.url}" @click="selectGallery(gallery.url)">
          <img :src="gallery.url" class="w-full" alt="">
        </div>
    </div>
  </section>
</template>