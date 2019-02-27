<template>
    <div>
        <input
                type="text"
                v-model="title"
                placeholder="Título"
                v-on:keyup="validate"
        >
        <button v-on:click="addCrop" :disabled="disable">Agregar</button>
        <crop-list :crops="crops"/>
    </div>
</template>

<script>
import CropList from './CropList.vue';
import getUserCropsService from '../../services/getUserCropsService';

export default {
  name: 'HomePage',
  components: {
    CropList,
  },
  data() {
    return {
      disable: true,
      title: '',
      crops: [],
    };
  },
  mounted() {
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
      getUserCropsService(localStorage.getItem('token'))
        .then((response) => {
          this.crops = response.data.data;
        }, (error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>

</style>
