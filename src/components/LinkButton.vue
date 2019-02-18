<template>
    <div>
        <router-link :to="path">
            <button :class="color">{{ text }}</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "LinkButton",
        props:{
            path: String,
            text: String,
            color: String
        }
    }
</script>

<style scoped>
    button{
        min-width: 150px;
        height: 30px;
        border: none;
        border-radius: 15px;
        background-color: #009b00;
        color: white;
        font-size: 16px;
        font-family: sans-serif;
    }
    .red{
        background-color: red;
    }

    .blue{
        background-color: blue;
    }

    .white{
        background-color: white;
        border: 1px black solid;
        color: black;
    }
</style>