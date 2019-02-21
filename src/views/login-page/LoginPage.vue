<template>
    <div>
        <div id="form-box">
            <h3>Iniciar sesión</h3>
            <form >
                <input type="text" class="input" v-model="username" placeholder="Nombre de usuario">
                <input type="password" class="input" v-model="password" placeholder="Contraseña">
                <button v-on:click="onSubmit" class="btn btn-success">Iniciar sesión</button>
            </form>
        </div>
    </div>
</template>

<script>

import authenticateUserService from '../../services/authenticateUserService';

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.isValid()) {
        authenticateUserService(this.username, this.password)
          .then((response) => {
            localStorage.setItem('token', response.data.data);
            this.$router.push('home');
          }, (error) => {
            alert(error);
          });
      } else {
        alert('Debes llenar los campos correctamente.');
      }
    },
    isValid() {
      let isValid = true;

      if (this.email === '' || this.password === '') {
        isValid = false;
      }

      return isValid;
    },
  },
};
</script>

<style scoped>
    #form-box{
        width: 250px;
        min-height: 300px;
        border: 1px lightgray solid;
        padding: 45px 20px;
        text-align: center;
        border-radius: 15px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10%;
    }
</style>
