import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/front_pages/pages/HomeView'
import LoginView from '../views/front_pages/auth/LoginView'
import RegisterView from '../views/front_pages/auth/RegisterView'
import SuperAdminDashboardView from '../views/dashboard_pages/superadmin/SuperAdminDashboardView'
import CompanyAdminDashboardView from '../views/dashboard_pages/companyadmin/CompanyAdminDashboardView'
import AddEmployeeView from '../views/dashboard_pages/companyadmin/AddEmployeeView'
import EmployeesView from '../views/dashboard_pages/companyadmin/EmployeesView'
import DepartmentsView from '../views/dashboard_pages/companyadmin/DepartmentsView'
import AddDepartmentView from '../views/dashboard_pages/companyadmin/AddDepartmentView'
import AddPositionView from '../views/dashboard_pages/companyadmin/AddPositionView'
import PositionsView from '../views/dashboard_pages/companyadmin/PositionsView'
import PriceView from '../views/dashboard_pages/superadmin/PriceView'
import AddPriceView from '../views/dashboard_pages/superadmin/AddPriceView'
import CompaniesView from '../views/dashboard_pages/superadmin/CompaniesView'
import PendingCompaniesView from '../views/dashboard_pages/superadmin/PendingCompaniesView'
import PayrollsView from '../views/dashboard_pages/companyadmin/PayrollsView'
import CreatePayrollView from '../views/dashboard_pages/companyadmin/CreatePayrollView'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/login',
    name:'login',
    component: LoginView
  },
  {
    path:'/register',
    name:'register',
    component: RegisterView
  },

  {
    path:'/superadmin',
    name:'superadmin',
    component: SuperAdminDashboardView
  },
  
  {
    path:'/companyadmin',
    name:'companyadmin',
    component: CompanyAdminDashboardView
  },
  
  {
    path:'/addemployee',
    name:'addemployee',
    component: AddEmployeeView
  },


  {
    path:'/departments',
    name:'departments',
    component: DepartmentsView
  },
 
  {
    path:'/adddepartment',
    name:'adddepartment',
    component: AddDepartmentView
  },
 
 
  {
    path:'/addposition',
    name:'addposition',
    component: AddPositionView
  },
 
  {
    path:'/positions',
    name:'positions',
    component: PositionsView
  },


  //Super Admin Route

  {
    path:'/prices',
    name:'prices',
    component: PriceView
  },

  {
    path:'/addprice',
    name:'addprice',
    component: AddPriceView
  },

  {
    path:'/companies',
    name:'companies',
    component: CompaniesView
  },

  
  {
    path:'/pendingcompanies',
    name:'pendingcompanies',
    component: PendingCompaniesView
  },

  //Company Route//


  //Administrative

  {
  path: '/administrative',
  name: 'administrative',
  children: [
      {
         path: 'employees',
         name: 'administrative.employees',
         component: EmployeesView,
      },
     
  ]
},

{
  path:'/payrolls',
  name:'payrolls',
  component: PayrollsView
},
{
  path:'/createpayroll',
  name:'createpayroll',
  component: CreatePayrollView
},





 





]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
