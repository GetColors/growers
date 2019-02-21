<template>
    <div id="form-box">
        {{child}}
    </div>
</template>

<script>
export default {
  name: 'FormBox',
  props: {
    child: String,
  },
};
</script>

<style scoped>

</style>
