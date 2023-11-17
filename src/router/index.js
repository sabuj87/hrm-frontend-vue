import { createRouter, createWebHistory } from 'vue-router'

// Front Component
import HomeView from '../views/front_pages/pages/HomeView'
import PricePlanView from '../views/front_pages/pages/PricePlanView'



// Auth
import LoginView from '../views/front_pages/auth/LoginView'
import RegisterView from '../views/front_pages/auth/RegisterView'




//Superadmin Component


import SuperAdminDashboardView from '../views/dashboard_pages/superadmin/SuperAdminDashboardView'
import PriceView from '../views/dashboard_pages/superadmin/priceplan/PriceView'
import AddPriceView from '../views/dashboard_pages/superadmin/priceplan/AddPriceView'
import EditPriceView from '../views/dashboard_pages/superadmin/priceplan/EditPriceView'
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
import CompanyProfileUpdateView from '../views/dashboard_pages/company/profile/CompanyProfileUpdateView'
import CompanyProfileView from '../views/dashboard_pages/company/profile/CompanyProfileView'
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
import PerformanceIndicatorView from '../views/dashboard_pages/company/PerformanceIndicatorView'


//Employee Component
import EmployeeDashboardView from '../views/dashboard_pages/employee/EmployeeDashboardView'
import RequestLoanView from '../views/dashboard_pages/employee/RequestLoanView'
import LeaveApplicationView from '../views/dashboard_pages/employee/LeaveApplicationView'
import LeaveApplicationListView from '../views/dashboard_pages/employee/LeaveApplicationListView'
import CreateJobDemandView from '../views/dashboard_pages/employee/CreateJobDemandView'
import EmployeeProfileUpdateView from '../views/dashboard_pages/employee/EmployeeProfileUpdateView'
import GiveAttendanceView from '../views/dashboard_pages/employee/GiveAttendanceView'
import PerformanceView from '../views/dashboard_pages/employee/PerformanceView'
import AllocatedAssetView from '../views/dashboard_pages/employee/AllocatedAssetView'
import ResourceDemandApplyView from '../views/dashboard_pages/employee/ResourceDemandApplyView'
import BillSubmisstionView from '../views/dashboard_pages/employee/BillSubmisstionView'
import BillStatusView from '../views/dashboard_pages/employee/BillStatusView'
import PaySlipView from '../views/dashboard_pages/employee/PaySlipView'




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
           name: 'superadmin-dashboard',
   
           component: SuperAdminDashboardView,
        },

        {
          path: 'company',
          name: 'superadmin-company',
          children: [

            {
              path:'companies',
              name:'superadmin-companies',
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
              name:'superadmin.prices',
              component: PriceView
            },
          

            {
              path:'add',
              name:'superadmin.prices.add',
              component: AddPriceView
            },
            {
              path:'edit',
              name:'superadmin.prices.edit',
              component: EditPriceView
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
           name: 'company-dashboard',
           component:CompanyDashboardView,
        },

        {
          path: 'companyprofile',
          name: 'companyprofile',
          children: [

            {
              path:'update',
              name:'company-profile-update',
              component: CompanyProfileUpdateView
            },
            {
              path:'view',
              name:'company-profile-view',
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
              name:'administrative-employees',
              component: EmployeesView
            },

            
            {
              path:'addemployee',
              name:'addemployee',
              component: AddEmployeeView
            },

            {
              path:'adddepartments',
              name:'administrative-adddepartments',
              component: AddDepartmentView
            },

            {
              path:'departments',
              name:'administrative-departments',
              component: DepartmentsView
            },
            {
              path: 'performanceindi',
              name: 'performanceindi',
              component:PerformanceIndicatorView,
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
           name: 'employee-dashboard', 
           component:EmployeeDashboardView,
        },
        {
          path: 'manageinfo',
          name: 'manageinfo',
          children: [


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
         {
          path: 'profile',
          name: 'profile',
          component:EmployeeProfileUpdateView,
         },
      
         {
          path: 'giveattendance',
          name: 'giveattendance',
          component:GiveAttendanceView,
         },
         {
          path: 'performance',
          name: 'performance',
          component:PerformanceView,
         },
         {
          path: 'allocatedasset',
          name: 'allocatedasset',
          component:AllocatedAssetView,
         },
         {
          path: 'resourcedemand',
          name: 'resourcedemand',
          component:ResourceDemandApplyView,
         },
      
         {
          path: 'billsubmission',
          name: 'billsubmission',
          component:BillSubmisstionView,
         },
         {
          path: 'billstatus',
          name: 'billstatus',
          component:BillStatusView,
         },
         {
          path: 'payslip',
          name: 'payslip',
          component:PaySlipView,
         },
      

          ]
       },
        
     
       
    ]
  },





]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
