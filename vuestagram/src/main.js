import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import store from './store.js'
import './registerServiceWorker'

let emitter = mitt();           //npm install mitt
let app = createApp(App);
app.config.globalProperties.emitter = emitter; //변수보관함 



app.use(store).mount('#app')
