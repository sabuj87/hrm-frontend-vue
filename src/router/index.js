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
import ModulesView from '../views/dashboard_pages/superadmin/ModulesView'
import EmployeeModulesView from '../views/dashboard_pages/superadmin/EmployeeModulesView'
import AddPriceView from '../views/dashboard_pages/superadmin/priceplan/AddPriceView'
import EditPriceView from '../views/dashboard_pages/superadmin/priceplan/EditPriceView'
import CompaniesView from '../views/dashboard_pages/superadmin/CompaniesView'
import PendingCompaniesView from '../views/dashboard_pages/superadmin/PendingCompaniesView'
import SuperadminChangePasswordView from '../views/dashboard_pages/superadmin/SuperadminChangePasswordView'



//Company Component

import CompanyDashboardView from '../views/dashboard_pages/company/CompanyDashboardView'
import AddEmployeeView from '../views/dashboard_pages/company/employee/AddEmployeeView'
import EmployeeAttendancesListview from '../views/dashboard_pages/company/employee/EmployeeAttendancesListview'
import EmployeeProfileView from '../views/dashboard_pages/company/employee/EmployeeProfileView'
import EmployeesView from '../views/dashboard_pages/company/EmployeesView'
import DepartmentsView from '../views/dashboard_pages/company/DepartmentsView'
import GradesView from '../views/dashboard_pages/company/GradesView'
import AddDepartmentView from '../views/dashboard_pages/company/AddDepartmentView'
import AddPositionView from '../views/dashboard_pages/company/AddPositionView'
import PositionsView from '../views/dashboard_pages/company/PositionsView'
import PermissionView from '../views/dashboard_pages/company/PermissionView'
import LevelsView from '../views/dashboard_pages/company/LevelsView'
import RolesView from '../views/dashboard_pages/company/RolesView'
import PayrollsView from '../views/dashboard_pages/company/PayrollsView'
import CreatePayrollView from '../views/dashboard_pages/company/CreatePayrollView'
import CompanyProfileUpdateView from '../views/dashboard_pages/company/profile/CompanyProfileUpdateView'
import CompanyProfileView from '../views/dashboard_pages/company/profile/CompanyProfileView'
import AssignPayrollView from '../views/dashboard_pages/company/AssignPayrollView'
import TaxRuleView from '../views/dashboard_pages/company/TaxRuleView'
import AdvancedPaymentView from '../views/dashboard_pages/company/AdvancedPaymentView'
import RequestedLoanView from '../views/dashboard_pages/company/RequestedLoanView'
import LoanDetailsView from '../views/dashboard_pages/company/LoanDetailsView'
import LeaveApprovalView from '../views/dashboard_pages/company/LeaveApprovalView'
import LeaveListView from '../views/dashboard_pages/company/LeaveListView'
import LeaveDetailsView from '../views/dashboard_pages/company/onboarding/LeaveDetailsView'
import CreatePayslipView from '../views/dashboard_pages/company/CreatePayslipView'
import JobDemandListView from '../views/dashboard_pages/company/onboarding/JobDemandListView'
import InterviewquestionsView from '../views/dashboard_pages/company/onboarding/InterviewquestionsView'
import AssignResourceView from '../views/dashboard_pages/company/onboarding/AssignResourceView'

import JobDetailsView from '../views/dashboard_pages/company/onboarding/JobDetailsView'
import PublishedJobView from '../views/dashboard_pages/company/onboarding/PublishedJobView'
import GetTheApplicationView from '../views/dashboard_pages/company/GetTheApplicationView'
import AddJobApplicationView from '../views/dashboard_pages/company/onboarding/AddJobApplicationView'
import JobApplicationView from '../views/dashboard_pages/company/onboarding/JobApplicationView'
import MangeResumeView from '../views/dashboard_pages/company/MangeResumeView'
import ShortListedCandidateView from '../views/dashboard_pages/company/ShortListedCandidateView'
import CreateInterviewQuestionView from '../views/dashboard_pages/company/CreateInterviewQuestionView'
import ScheduleMangeView from '../views/dashboard_pages/company/ScheduleMangeView'
import InterviewResultManageView from '../views/dashboard_pages/company/InterviewResultManageView'
import FinalCandidateView from '../views/dashboard_pages/company/FinalCandidateView'
import PerformanceIndicatorView from '../views/dashboard_pages/company/PerformanceIndicatorView'
import CompanyChangePasswordView from '../views/dashboard_pages/company/CompanyChangePasswordView'


//Employee Component


import EmployeeDashboardView from '../views/dashboard_pages/employee/EmployeeDashboardView'
import RequestLoanView from '../views/dashboard_pages/employee/RequestLoanView'
import LeaveApplicationView from '../views/dashboard_pages/employee/LeaveApplicationView'
import LeaveApplicationListView from '../views/dashboard_pages/employee/LeaveApplicationListView'
import CreateJobDemandView from '../views/dashboard_pages/employee/CreateJobDemandView'
import EmployeeProfileUpdateView from '../views/dashboard_pages/employee/EmployeeProfileUpdateView'
import EmployeeJobdemandListView from '../views/dashboard_pages/employee/Jobdemand/EmployeeJobdemandListView'
import GiveAttendanceView from '../views/dashboard_pages/employee/GiveAttendanceView'
import TakeAtteandanceView from '../views/dashboard_pages/employee/TakeAtteandanceView'
import OtherEmployeeAttendanceView from '../views/dashboard_pages/employee/OtherEmployeeAttendanceView'

import PerformanceView from '../views/dashboard_pages/employee/PerformanceView'

import OtherEmployeeAtteandanceListVIew from '../views/dashboard_pages/employee/OtherEmployeeAtteandanceListVIew'
import OtherEmployeeLeaveApplicationView from '../views/dashboard_pages/employee/OtherEmployeeLeaveApplicationView'
import OtherEmployeePerformanceView from '../views/dashboard_pages/employee/OtherEmployeePerformanceView'
import OtherEmployeeResourceDemandListView from '../views/dashboard_pages/employee/OtherEmployeeResourceDemandListView'
import OtherEmployeeSetKPIView from '../views/dashboard_pages/employee/OtherEmployeeSetKPIView'
import OtherEmployeeLeaveApplicaionDetailsView from '../views/dashboard_pages/employee/OtherEmployeeLeaveApplicaionDetailsView'


import AllocatedAssetView from '../views/dashboard_pages/employee/AllocatedAssetView'
import ResourceDemandApplyView from '../views/dashboard_pages/employee/ResourceDemandApplyView'
import BillSubmisstionView from '../views/dashboard_pages/employee/BillSubmisstionView'
import BillStatusView from '../views/dashboard_pages/employee/BillStatusView'
import PaySlipView from '../views/dashboard_pages/employee/PaySlipView'
import EmployeeChangePasswordView from '../views/dashboard_pages/employee/EmployeeChangePasswordView'

//Common
import ChangePasswordView from '../views/dashboard_pages/common/ChangePasswordView'






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

//Common
{
  path: '/common',
  name: 'common',
  meta: { layout: "common"},
  children: [
      {
         path: 'changepassword',
         name: 'changepassword',
 
         component: ChangePasswordView,
      },
    ]
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
           path: 'change-password',
           name: 'superadmin.change.password',
   
           component: SuperadminChangePasswordView,
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
        
        {
          path:'modules',
          name:'superadmin.modules',
          component: ModulesView
        },
        {
          path:'employeemodules',
          name:'superadmin.employeemodules',
          component: EmployeeModulesView
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
          path: 'change-password',
          name: 'company.change.password',
  
          component: CompanyChangePasswordView,
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
              path:'employee',
              name:'administrative-employee-profile',
              component: EmployeeProfileView
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
              path:'grades',
              name:'administrative-grades',
              component: GradesView
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
           path:'roles',
           name:'roles',
           component: RolesView
        },
        {
           path:'permissions',
           name:'permissions',
           component: PermissionView
        },
        {
          path:'levels',
          name:'levels',
          component: LevelsView
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
              path:'taxrule',
              name:'taxrule',
  
              component: TaxRuleView
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
              path:'attendancelist',
              name:'attendancelist',
  
              component: EmployeeAttendancesListview
            },
            

             {
              path:'leaveaplylist',
              name:'leaveaplylist',
  
              component: LeaveListView
            },
             {
              path:'leavedetails',
              name:'leavedetails',
  
              component: LeaveDetailsView
            },
            {
              path:'createpayslip',
              name:'createpayslip',
  
              component: CreatePayslipView
            },
            {
              path:'createpayslip',
              name:'createpayslip',
  
              component: CreatePayslipView
            },
            {
              path:'assignresource',
              name:'assignresource',
  
              component: AssignResourceView
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
              path:'jobpublish',
              name:'jobpublish',
  
              component: PublishedJobView
            },
            {
              path:'gettheapplication',
              name:'gettheapplication',
  
              component: GetTheApplicationView
            },
            

            {
              path:'addjobapplicathon',
              name:'addjobapplicathon',
  
              component: AddJobApplicationView
            },

          {
              path:'interviewquestions',
              name:'interviewquestions',
  
              component: InterviewquestionsView
            },

            {
              path:'jobapplicathondetails',
              name:'jobapplicathondetails',
  
              component: JobApplicationView
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
          path: 'change-password',
          name: 'employee.change.password',
  
          component: EmployeeChangePasswordView,
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
          path: 'jobdemandlist',
          name: 'employee-jobdemandlist',
          component:EmployeeJobdemandListView,
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
          path: 'takeattendance',
          name: 'takeattendance',
          component:TakeAtteandanceView,
         },
         {
          path: 'employeeattendance',
          name: 'employeeattendance',
          component:OtherEmployeeAttendanceView,
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

       {
        path: 'otheremployee',
        name: 'otheremployee',
        children: [


          {
            path:'attendance',
            name:'employee.otheremployee.attendance',
            component:OtherEmployeeAtteandanceListVIew,
         },
         {
          path:'leave-application',
          name:'employee.otheremployee.leave-application',
          component:OtherEmployeeLeaveApplicationView,
       },
         {
          path: 'performance',
          name: 'employee.otheremployee.performance',
          component:OtherEmployeePerformanceView,
       },
       {
        path: 'resource',
        name: 'employee.otheremployee.resource',
        component:OtherEmployeeResourceDemandListView,
       },
       {
        path: 'setkpi',
        name: 'employee.otheremployee.setkpi',
        component:OtherEmployeeSetKPIView,
       },
      
       {
        path: 'leavedetails',
        name: 'employee.otheremployee.leavedetails',
        component:OtherEmployeeLeaveApplicaionDetailsView,
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
