import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { initializeApp } from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyDrceX3si40_F_Hmr7k7sjq_AIsv5AXvdE",
    authDomain: "curso-vue-37920.firebaseapp.com",
    projectId: "curso-vue-37920",
    storageBucket: "curso-vue-37920.appspot.com",
    messagingSenderId: "832074310142",
    appId: "1:832074310142:web:44edc456cd45f2ae2c60af",
    measurementId: "G-7V3W5MZW2P"
  };

initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app');
