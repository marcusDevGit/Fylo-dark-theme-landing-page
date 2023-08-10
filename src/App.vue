<template>
  <div id="app">
    <HeaderSection />
    <IntroSection />
    <FeatureSection />
    <TeamSection />
    <TestimonSection />
    <AcessSection />
    <FooterSection />
    <button
      v-if="showBackToTop"
      class="back-to-top"
      @click="scrollToTop"
    >
    <ion-icon name="arrow-up-outline"></ion-icon>
    </button>
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
  },
  data() {
    return {
      showBackToTop: false
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 100;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
/* ... Seus estilos existentes ... */
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: var(--Blue);
  color: #fff;
  border: none;
  border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%   ;
  cursor: pointer;
}

.back-to-top:hover {
  background-color: var(--Cyan);
}

.back-to-top.show {
  display: block;
}
</style>
