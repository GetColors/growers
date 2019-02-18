<template>
    <div>
        <div id="form-box">
            <h3>Registrate</h3>
            <form >
                <input type="text" class="input" v-model="username" placeholder="Nombre de usuario">
                <input type="email" class="input" v-model="email" placeholder="Correo elecrónico">
                <input type="password" class="input" v-model="password" placeholder="Contraseña">
                <button v-on:click="onSubmit" class="btn btn-success">Registrarme</button>
            </form>
        </div>
    </div>
</template>

<script>
    import registerUserService from "../../services/registerUserService";

    export default {
        name: "RegisterPage",
        data: function () {
            return {
                username: '',
                email: '',
                password: ''
            };
        },
        methods:{
            onSubmit () {

                if (this.isValid()){

                    registerUserService(this.username, this.email, this.password)
                        .then((response) => {
                            alert("Te hemos enviado un correo para activar tu cuenta!");
                        }, (error) => {
                            alert(error);
                        });

                }else {
                    alert("Debes llenar los campos correctamente.");
                }

            },
            isValid(){

                let isValid = true;

                if (this.username === '' || this.email === '' || this.password === '') {
                    isValid = false;
                }

                return isValid;
            }
        }
    }
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