<template>
    <div>
        <LandingPage v-if="false"/>
        <DashboardPage v-if="true"/>
    </div>
</template>

<script>
import LandingPage from '../landing/LandingPage.vue';
import DashboardPage from '../dashboard/DashboardPage.vue';

export default {
  name: 'HomePage',
  components: {
    LandingPage,
    DashboardPage,
  },
};
</script>

<style scoped>

</style>
