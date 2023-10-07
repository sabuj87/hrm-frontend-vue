import { createRouter, createWebHistory } from 'vue-router'

// Front Component
import HomeView from '../views/front_pages/pages/HomeView'
import PricePlanView from '../views/front_pages/pages/PricePlanView'



// Auth
import LoginView from '../views/front_pages/auth/LoginView'
import RegisterView from '../views/front_pages/auth/RegisterView'




//Superadmin Component


import SuperAdminDashboardView from '../views/dashboard_pages/superadmin/SuperAdminDashboardView'
import PriceView from '../views/dashboard_pages/superadmin/PriceView'
import AddPriceView from '../views/dashboard_pages/superadmin/AddPriceView'
import CompaniesView from '../views/dashboard_pages/superadmin/CompaniesView'
import PendingCompaniesView from '../views/dashboard_pages/superadmin/PendingCompaniesView'



//Company Component

import CompanyDashboardView from '../views/dashboard_pages/company/CompanyDashboardView'
import AddEmployeeView from '../views/dashboard_pages/company/AddEmployeeView'
import EmployeesView from '../views/dashboard_pages/company/EmployeesView'
import DepartmentsView from '../views/dashboard_pages/company/DepartmentsView'
import AddDepartmentView from '../views/dashboard_pages/company/AddDepartmentView'
import AddPositionView from '../views/dashboard_pages/company/AddPositionView'
import PositionsView from '../views/dashboard_pages/company/PositionsView'
import PayrollsView from '../views/dashboard_pages/company/PayrollsView'
import CreatePayrollView from '../views/dashboard_pages/company/CreatePayrollView'
import CompanyProfileView from '../views/dashboard_pages/company/CompanyProfileView'
import AssignPayrollView from '../views/dashboard_pages/company/AssignPayrollView'
import AdvancedPaymentView from '../views/dashboard_pages/company/AdvancedPaymentView'
import RequestedLoanView from '../views/dashboard_pages/company/RequestedLoanView'
import LoanDetailsView from '../views/dashboard_pages/company/LoanDetailsView'
import LeaveApprovalView from '../views/dashboard_pages/company/LeaveApprovalView'
import LeaveListView from '../views/dashboard_pages/company/LeaveListView'
import JobDemandListView from '../views/dashboard_pages/company/JobDemandListView'
import JobDetailsView from '../views/dashboard_pages/company/JobDetailsView'
import GetTheApplicationView from '../views/dashboard_pages/company/GetTheApplicationView'
import MangeResumeView from '../views/dashboard_pages/company/MangeResumeView'
import ShortListedCandidateView from '../views/dashboard_pages/company/ShortListedCandidateView'
import CreateInterviewQuestionView from '../views/dashboard_pages/company/CreateInterviewQuestionView'
import ScheduleMangeView from '../views/dashboard_pages/company/ScheduleMangeView'
import InterviewResultManageView from '../views/dashboard_pages/company/InterviewResultManageView'
import FinalCandidateView from '../views/dashboard_pages/company/FinalCandidateView'


//Employee Component
import EmployeeDashboardView from '../views/dashboard_pages/employee/EmployeeDashboardView'
import RequestLoanView from '../views/dashboard_pages/employee/RequestLoanView'
import LeaveApplicationView from '../views/dashboard_pages/employee/LeaveApplicationView'
import LeaveApplicationListView from '../views/dashboard_pages/employee/LeaveApplicationListView'
import CreateJobDemandView from '../views/dashboard_pages/employee/CreateJobDemandView'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/priceplan',
    name: 'priceplan',
    component: PricePlanView
  },





  //Auth route
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



  //Super Admin Route


  {
    path: '/superadmin',
    name: 'superadmin',
    meta: { layout: "superadmin"},
    children: [
        {
           path: 'dashboard',
           name: 'dashboard',
           component: SuperAdminDashboardView,
        },

        {
          path: 'company',
          name: 'company',
          children: [

            {
              path:'companies',
              name:'companies',
              component: CompaniesView
            },

            {
              path:'pendingcompanies',
              name:'pendingcompanies',
              component: PendingCompaniesView
            }


          ]
       
        },


        {
          path: 'price',
          name: 'price',
          children: [

            {
              path:'prices',
              name:'prices',
              component: PriceView
            },
          

            {
              path:'addprice',
              name:'addprice',
              component: AddPriceView
            },
          

          ]
       
        },
      
       
    ]
  },
  

 


  

  //Company Route//



  {
    path: '/company',
    name: 'company',
    meta: { layout: "company"},
    children: [
        {
           path: 'dashboard',
           name: 'dashboard',
           component:CompanyDashboardView,
        },

        {
          path: 'companyprofile',
          name: 'companyprofile',
          children: [

            {
              path:'update',
              name:'update',
              component: CompanyProfileView
            },

        


          ]
       
        },

        {
          path: 'administrative',
          name: 'administrative',
          children: [

            {
              path:'employees',
              name:'employees',
              component: EmployeesView
            },

            
            {
              path:'addemployee',
              name:'addemployee',
              component: AddEmployeeView
            },

            {
              path:'departments',
              name:'departments',
              component: AddDepartmentView
            },

            {
              path:'adddepartment',
              name:'adddepartment',
              component: DepartmentsView
            },


             
        {
           path:'positions',
           name:'positions',
           component: PositionsView
        },
    


            {
              path:'addposition',
              name:'addposition',
 
              component: AddPositionView
            },

          
        


          ]
       
        },



        {
          path: 'accountspayroll',
          name: 'accountspayroll',
          children: [

         
          
      
            {
              path:'payrolls',
              name:'payrolls',
              component: PayrollsView
            },

            {
              path:'createpayroll',
              name:'createpayroll',
  
              component: CreatePayrollView
            },
            {
              path:'assignpayroll',
              name:'assignpayroll',
  
              component: AssignPayrollView
            },
            {
              path:'requestedloan',
              name:'requestedloan',
  
              component: RequestedLoanView
            },
            {
              path:'advancedpayment',
              name:'advancedpayment',
  
              component: AdvancedPaymentView
            },
            
            {
              path:'loandetails',
              name:'loandetails',
  
              component: LoanDetailsView
            },
            
            {
              path:'loandetails',
              name:'loandetails',
  
              component: LoanDetailsView
            },
         
           
         
            
            

          



        


          ]
       
        },

        {
          path: 'leave',
          name: 'leave',
          children: [

             {
              path:'leaveapproval',
              name:'leaveapproval',
  
              component: LeaveApprovalView
            },
            

             {
              path:'leaveaplylist',
              name:'leaveaplylist',
  
              component: LeaveListView
            },
            
          ]

        },

        {
          path: 'recruitment',
          name: 'recruitment',
          children: [
            {
              path:'jobdemandlist',
              name:'jobdemandlist',
  
              component: JobDemandListView
            },
            
            {
              path:'jobdetails',
              name:'jobdetails',
  
              component: JobDetailsView
            },
            {
              path:'gettheapplication',
              name:'gettheapplication',
  
              component: GetTheApplicationView
            },
            
            {
              path:'manageresume',
              name:'manageresume',
  
              component: MangeResumeView
            },

           
            {
              path:'shortlisted',
              name:'shortlisted',
  
              component: ShortListedCandidateView
            },
            {
              path:'createiq',
              name:'createiq',
  
              component: CreateInterviewQuestionView
            },
            {
              path:'schedulemange',
              name:'schedulemange',
  
              component: ScheduleMangeView
            },
            {
              path: 'interviewresult',
              name: 'interviewresult',
              component:InterviewResultManageView,
             },
             
            {
              path: 'finalcandidate',
              name: 'finalcandidate',
              component:FinalCandidateView,
             },
             

           
            

          ]

        }


      
      
       
    ]
  },
  //Employee

  {
    path: '/employee',
    name: 'employee',
    meta: { layout: "employee"},
    children: [
        {
           path: 'dashboard',
           name: 'dashboard',
           component:EmployeeDashboardView,
        },
        {
          path: 'requestloan',
          name: 'requestloan',
          component:RequestLoanView,
       },
       {
        path: 'leaveapplication',
        name: 'leaveapplication',
        component:LeaveApplicationView,
     },
       {
        path: 'leavelist',
        name: 'leavelist',
        component:LeaveApplicationListView,
     },
     {
      path: 'createjobdemand',
      name: 'createjobdemand',
      component:CreateJobDemandView,
     },
  
     
       
    ]
  },





]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
