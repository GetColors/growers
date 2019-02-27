<template>
<div id="crop-list-container">
    <crop-item v-for="crop in crops" :crop="crop"/>
</div>
</template>

<script>
import CropItem from './CropItem.vue';

export default {
  name: 'CropList',
  components: {
    CropItem,
  },
  props: {
    crops: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>

</style>