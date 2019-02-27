<template>
<div id="crop-container">
    {{ crop.title }}
</div>
</template>

<script>
export default {
  name: 'CropItem',
  props: {
    crop: {
      id: String,
      title: String,
    },
  },
};
</script>

<style scoped>
#crop-container{
    width: 300px;
    height: 100px;
    border: 1px lightgray solid;
    border-radius: 15px;
    text-align: center;
    line-height: 100px;
}
</style>
