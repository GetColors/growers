<template>
    <div id="container">
        <h3>Landing page</h3>
        <LinkButton color="white" path="/login" text="Go to login"/>
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
        width: 90%;
        border: 1px #d0d0d0 solid;
        margin-left: auto;
        margin-right: auto;
    }
</style>