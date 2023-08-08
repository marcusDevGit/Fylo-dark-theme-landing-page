import { createApp } from 'vue'
import App from './App.vue'

// Importar os componentes
import HeaderSection from './components/HeaderSection.vue';
import IntroSection from './components/IntroSection.vue';
import FeatureSection from './components/FeatureSection.vue';
import TeamSection from './components/TeamSection.vue';
import TestimonSection from './components/TestimonSection.vue';
import AcessSection from './components/AcessSection.vue';
import FooterSection from './components/FooterSection.vue';

import './global.css'; // Importar o arquivo global.css

// Criar a instância da aplicação Vue
const app = createApp(App);

// Registrar os componentes globalmente
app.component('HeaderSection', HeaderSection);
app.component('IntroSection', IntroSection);
app.component('FeatureSection', FeatureSection);
app.component('TeamSection', TeamSection);
app.component('TestimonSection', TestimonSection);
app.component('AcessSection', AcessSection);
app.component('FooterSection', FooterSection);

createApp(App).mount('#app')
