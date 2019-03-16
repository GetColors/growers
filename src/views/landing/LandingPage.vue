<template>
    <div>
        <Login/>
    </div>
</template>

<script>
import Login from "./Login";
import Register from "./Register";
export default {
  name: 'LandingPage',
    components: {Register, Login},
};
</script>

<style scoped>

</style>
