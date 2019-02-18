<template>
    <div id="form-box">
        <h3>Registrate</h3>
        <form >
            <basic-input type="text" placeholder="Nombre de usuario"/>
            <basic-input type="email" placeholder="Correo electrónico"/>
            <basic-input type="password" placeholder="Contraseña"/>
            <button class="btn btn-success">Registrarme</button>
        </form>
    </div>
</template>

<script>
    import BasicInput from "../../components/BasicInput";

    export default {
        name: "RegisterForm",
        components: {
            BasicInput
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