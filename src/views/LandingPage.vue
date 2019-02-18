<template>
    <div class="container" id="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div id="auth-container">
                    <LinkButton path="login" color="blue" text="Inicio de sesión"/>
                        <span> o </span>
                    <LinkButton path="register" color="white" text="Registro"/>
                </div>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</template>

<script>
    import LinkButton from "../components/LinkButton";

    export default {
        name: "LandingPage",
        components:{
            LinkButton
        }
    }
</script>

<style scoped>
    #container{
        height: 100%;
    }
    #auth-container{
        text-align: center;
        border: 1px lightgray solid;
        border-radius: 15px;
        width: 200px;
        margin-left: auto;
        margin-right: auto;
        height: 300px;
        padding-top: 100px;
        padding-bottom: 100px;
        margin-top: 50%;
    }
</style>