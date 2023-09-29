import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './other/interceptor'
import MasterView from './views/master/MasterView'
import DashboardMasterView from './views/master/DashboardMasterView'


const app = createApp(App)
app.use(store)
app.use(router)
app.component('MasterView',MasterView);
app.component('DashboardMasterView',DashboardMasterView);


app.mount('#app')

