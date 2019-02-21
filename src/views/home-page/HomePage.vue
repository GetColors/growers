<template>
    <div>
        <input
                type="text"
                v-model="title"
                placeholder="Título"
                v-on:keyup="validate"
        >
        <button v-on:click="addCrop" :disabled="disable">Agregar</button>
        <div v-for="crop in crops" class="crop-container">
            <span>{{crop.title}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      disable: true,
      title: '',
      crops: Array,
    };
  },
  created() {
    this.showCrops();
  },
  methods: {
    addCrop() {
      this.crops.push({
        title: this.title,
      });
      this.title = '';
    },
    validate(event) {
      this.disable = true;

      if (event.target.value !== '') {
        this.disable = false;
      }
    },
    showCrops() {
      this.crops = [
        {
          tittle: 'crop1',
        },
      ];
    },
  },
};
</script>

<style scoped>

</style>
