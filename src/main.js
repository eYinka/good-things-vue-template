import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from '../store';

import './assets/css/main.css'

const app = createApp(App)

// Hook the vue router to do its thing..
app.use(router)

// Hook the app store
app.use(store)

// Of course, mount the app :)
app.mount('#app')