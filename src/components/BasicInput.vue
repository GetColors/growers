<template>
    <div id="input">
        <input
                :type="type"
                :class="{inputError : errors.length > 0}"
                v-on:keyup="validate"
                :placeholder="placeholder"
        />
        <small class="error" v-for="error in errors">{{error}}</small>
    </div>
</template>

<script>
    export default {
        name: "BasicInput",
        props:{
            type: String,
            placeholder: String
        },
        data: function () {
            return {
                errors:[
                ]
            }
        },
        methods: {
            onWrite: function (event) {
                console.log(event.target.value);
            },
        }
    }
</script>

<style scoped>

    .input-box{
        margin: 5px;
    }

    input{
        border: 1px black solid;
        border-radius: 15px;
        padding-left: 20px;
        width: 200px;
        height: 30px;
        font-size: 15px;
    }

    .error{
        color: red;
    }
    .inputError{
        border-color: red;
    }
</style>