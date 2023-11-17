import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './other/interceptor'
import MasterView from './views/master/MasterView'
import SuperAdminMasterView from './views/master/SuperAdminMasterView'
import CompanyMasterView from './views/master/CompanyMasterView'
import EmployeeMasterView from './views/master/EmployeeMasterView'


const app = createApp(App)
app.use(store)
app.use(router)
app.component(MasterView,SuperAdminMasterView,CompanyMasterView,EmployeeMasterView);
app.mount('#app')

