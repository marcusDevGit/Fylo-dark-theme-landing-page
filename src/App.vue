<template>
  <div id="app">
    <HeaderSection />
    <IntroSection />
    <FeatureSection />
    <TeamSection />
    <TestimonSection />
    <AcessSection />
    <FooterSection />
  </div>
</template>

<script>
import AcessSection from './components/AcessSection.vue';
import FeatureSection from './components/FeatureSection.vue';
import FooterSection from './components/FooterSection.vue';
import HeaderSection from './components/HeaderSection.vue';
import IntroSection from './components/IntroSection.vue'
import TeamSection from './components/TeamSection.vue';
import TestimonSection from './components/TestimonSection.vue';

export default {
  name: 'App',
  components: {
    HeaderSection, 
    IntroSection,
    FeatureSection,
    TeamSection,
    TestimonSection,
    AcessSection,
    FooterSection
}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
