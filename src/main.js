import { createApp } from 'vue'
import App from './App.vue'
import '/src/style.css'
createApp(App).mount('#app')
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1200, 
    once: true,     
});