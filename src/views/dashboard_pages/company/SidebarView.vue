<template>

<aside  class="main-sidebar sidebar-light-primary elevation-2 ">
    <!-- Brand Logo -->
    <a href="" class="brand-link text-center">
      <img src="/assets/images/logo/logo.png" alt="logo" class=" text-center" style="height:50px;width:100px;">
    </a>


    <div class="user-panel  py-3  d-flex">
        <div class="image">
          <img height="70px" width="50px" src="/assets/images/logo/user.png" class="ml-3" alt="User Image">
        </div>
        <div class="info ml-2">
          <a href="#" style="color:gray" class="d-block">{{name}}</a>
        </div>
       
      </div>
  
    
      <!-- Sidebar -->
      <div class="sidebar">
    
        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library -->
                 <li v-if="modules_name.includes('Company Dashboard')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'company-dashboard' }">
              <i class="nav-icon fas fa-tachometer-alt sc"></i>
              <p>Company Dashboard</p>
              </router-link>
             
              </li>
              <li v-if="modules_name.includes('Company Profile')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'company-profile-view' }">
                  <i class="nav-icon fa-solid fa-user sc"></i>
              <p>Company Profile</p>
              </router-link>
             
              </li>

              
              <li v-if="modules_name.includes('Employee Management')" class=" nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-person sc"></i>
               
                <p>
                  Employee Management	
                  <i class="fas fa-angle-left right sc"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
               
                <li v-if="modules_name.includes('Employees')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-employees' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Employees</p>
                  </router-link>
             
                 </li>
            
          
              </ul>
            </li>


              <li v-if="modules_name.includes('Administrative')" class=" nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-person sc"></i>
               
                <p>
                  Administrative
                  <i class="fas fa-angle-left right sc"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
               
                 <li v-if="modules_name.includes('Department')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-departments' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Departments</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Grade')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-grades' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Grades</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Position')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'positions' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Positions</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Role')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'roles' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Roles</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Permission')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'permissions' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Permissions</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Level')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'levels' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Levels</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Performance Indicator')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'performanceindi' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Performance Indicator</p>
                  </router-link>
             
                 </li>
                <!-- <li class="nav-item">
                  <a href="" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Performance Evaluation</p>
                  </a>
                </li>
             -->
                <!-- <li class="nav-item">
                  <a href="" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Employee Promotion</p>
                  </a>
                </li> -->
<!--             
                <li class="nav-item">
                  <a href="" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>TA/DA approval</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Resource demand approval</p>
                  </a>
                </li> -->
                
            
                <!-- <li class="nav-item">
                  <a href="" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Roles & permission </p>
                  </a>
                </li> -->
              
              
              </ul>
            </li>
          
          
          

            <li v-if="modules_name.includes('Employee Onboarding')"  class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-person-snowboarding sc"></i>
                <p>
                   Employee Onboarding 
                  <i class="fas fa-angle-left right sc"></i>
               
                </p>
              </a> 
              <ul class="nav nav-treeview">
                <li v-if="modules_name.includes('Create Job Demand')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'jobdemandlist' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Create Job Demand</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Approve Job')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'gettheapplication' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Job application</p>
                  </router-link>
             
                 </li>
                 <!-- <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'manageresume' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Manage Resume</p>
                  </router-link>
             
                 </li> -->
                 <li v-if="modules_name.includes('Short listed candidates')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'shortlisted' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Shortlisted Candidates</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Interview Question')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'interviewquestions' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Interview Question</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('List of interview Shedule')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'schedulemange' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Interview Schedules</p>
                  </router-link>
             
                 </li>



               
                <!-- <li class="nav-item">
                  <a href="pages/forms/advanced.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Aptitude Test Schedules</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/forms/advanced.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Aptitude Results</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/forms/advanced.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Offer Approvals</p>
                  </a>
                </li> -->
                <li v-if="modules_name.includes('Interview results')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'interviewresult' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Interview Result</p>
                  </router-link>
             
                 </li>
                <li v-if="modules_name.includes('Final candidate')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'finalcandidate' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Final Candidates</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Assign resources')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'assignresource' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Assign Resource</p>
                  </router-link>
             
                 </li>

               
              
                <!-- <li class="nav-item">
                  <a href="pages/forms/advanced.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Personalized Profile</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/forms/advanced.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Background Verification</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/forms/advanced.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Resource Allocation</p>
                  </a>
                </li>
              -->
               
              
              </ul>
            </li>
            <li v-if="modules_name.includes('Attendance & Leave')" class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-clipboard sc"></i>
                <p>
                  Attendance & Leave
                  <i class="fas fa-angle-left right sc"></i>
                
                </p>
              </a>
              <ul class="nav nav-treeview">
                <!-- <li class="nav-item">
                  <a href="pages/tables/simple.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Leaves</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/tables/simple.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Holidayes</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/tables/simple.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Attendance</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/tables/simple.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Attendance App</p>
                  </a>
                </li> -->
                <li v-if="modules_name.includes('Leave application list')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'leaveaplylist' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Employee Leaves</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Leave  approval')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'leaveapproval' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Leave  approval</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Employee Attendance')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'attendancelist' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Employee Attendance</p>
                  </router-link>
             
                 </li>

               
                <!-- <li class="nav-item">
                  <a href="pages/tables/simple.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Timesheet</p>
                  </a>
                </li> -->
               
                <!-- <li class="nav-item">
                  <a href="pages/tables/simple.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Shift & Schedules</p>
                  </a>
                </li> -->
               
                <!-- <li class="nav-item">
                  <a href="pages/tables/simple.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Overtimes</p>
                  </a>
                </li> -->
               
             
              </ul>
            </li>

            <li v-if="modules_name.includes('Training Management')" lass="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-clock sc"></i>
             
                
                <p>
                  Training Management
                  <i class="fas fa-angle-left right sc"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li v-if="modules_name.includes('Training cost estimation')" class="nav-item">
                  <a href="pages/tables/simple.html" class="nav-link">
                    <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                    <p>Training cost estimation</p>
                  </a>
                </li>
                <li v-if="modules_name.includes('Trainings')" class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                    <p>Trainings</p>
                  </a>
                </li>
                <li v-if="modules_name.includes('Trainers')" class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                    <p>Trainers</p>
                  </a>
                </li>
                <li v-if="modules_name.includes('Assign Training')" class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                    <p>Assign Training</p>
                  </a>
                </li>
                <li v-if="modules_name.includes('Training result')" class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                    <p>Training result</p>
                  </a>
                </li>
              
              
              </ul>
            </li>
            <li v-if="modules_name.includes('Basic Payroll')" class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-dollar-sign sc"></i>
              
                <p>
                  Basic Payroll
                  <i class="fas fa-angle-left right sc"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li v-if="modules_name.includes('Payrolls')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'payrolls' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Payrolls</p>
                  
                  </router-link>
               
                 </li>
                 <li v-if="modules_name.includes('Assign Payroll')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'assignpayroll' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Assign Payroll</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Employee Payrolls')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'assignpayroll' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Employee Payrolls</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Employee Payslip')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'assignpayroll' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Employee Payslip</p>
                  </router-link>
             
                 </li>



              
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Provident Fund </p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Project Estimates</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Payment for Employees</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Expenses for employee</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Employee TA/DA Approval</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Pay slips</p>
                  </a>
                </li> -->
<!--               
                <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Payroll items</p>
                  </a>
                </li> -->
              
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Promotion Management</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Resignation Management</p>
                  </a>
                </li> -->
              
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Termination Management</p>
                  </a>
                </li>
               -->
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Asset Management</p>
                  </a>
                </li> -->
              
              
              </ul>
            </li>

            <li v-if="modules_name.includes('Advance Payroll')" class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-dollar-sign sc"></i>
              
                <p>
                  Advanced Payroll
                  <i class="fas fa-angle-left right sc"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
            

                 <li v-if="modules_name.includes('Approve advance loan')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'requestedloan' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Requested Loan</p>
                  </router-link>
             
                 </li>

                 <li v-if="modules_name.includes('Advance loans')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'advancedpayment' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Advanced loans</p>
                  </router-link>
             
                 </li>
          
                <li v-if="modules_name.includes('Provident fund')" class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Provident Fund </p>
                  </a>
                </li>
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Project Estimates</p>
                  </a>
                </li> -->
                 <li v-if="modules_name.includes('Payment for Employees')" class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Payment for Employees</p>
                  </a>
                </li>
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Expenses for employee</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Employee TA/DA Approval</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Pay slips</p>
                  </a>
                </li> -->
<!--               
                <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Payroll items</p>
                  </a>
                </li> -->
              
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Promotion Management</p>
                  </a>
                </li> -->
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Resignation Management</p>
                  </a>
                </li> -->
              
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Termination Management</p>
                  </a>
                </li>
               -->
                <!-- <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Asset Management</p>
                  </a>
                </li> -->
              
              
              </ul>
            </li>
            <li v-if="modules_name.includes('Complain Management')" class=" nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-person sc"></i>
               
                <p>
                  Complain Management
                  <i class="fas fa-angle-left right sc"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
               
                <li v-if="modules_name.includes('Complains')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-employees' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Complains</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Actions')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-employees' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Actions</p>
                  </router-link>
             
                 </li>
            
            
          
              </ul>
            </li>

            <li v-if="modules_name.includes('Performance Management Module')" class=" nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-person sc"></i>
               
                <p>
                  Performance Management
                  <i class="fas fa-angle-left right sc"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
               
                <li v-if="modules_name.includes('Set KPI')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-employees' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Set KPI</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('List of submitted KPI')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-employees' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>List of submitted KPI</p>
                  </router-link>
             
                 </li>
            
                 <li v-if="modules_name.includes('Assigned KPI')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-employees' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Assigned KPI</p>
                  </router-link>
             
                 </li>
            
            
          
              </ul>
            </li>

            <li v-if="modules_name.includes('Training Management')" class=" nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-person sc"></i>
               
                <p>
                  Training Management
                  <i class="fas fa-angle-left right sc"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
               
                <li v-if="modules_name.includes('Assign training')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-employees' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Assign training</p>
                  </router-link>
             
                 </li>
                 <li v-if="modules_name.includes('Approve training')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-employees' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Approve training</p>
                  </router-link>
             
                 </li>
            
                 <li v-if="modules_name.includes('Assigned KPI')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-employees' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Assigned KPI</p>
                  </router-link>
             
                 </li>
            
                 <li v-if="modules_name.includes('Ongoing training')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-employees' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Ongoing training</p>
                  </router-link>
             
                 </li>
            
                 <li v-if="modules_name.includes('Training status')" class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-employees' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Training status</p>
                  </router-link>
             
                 </li>
            
            
          
              </ul>
            </li>
        
        
        

            <li v-if="modules_name.includes('Billings')" class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-file-invoice sc"></i>
                <p>
                  Billings
                
                </p>
              </a>
            
            </li>
            <li v-if="modules_name.includes('Payslips')" class="nav-item">
              <router-link class="nav-link"  :to="{ name: 'createpayslip' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Payslips</p>

                  </router-link>
            
            </li>
          



        
         
          
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
  
</template>

<script>

export default {


    
data() {
return {
  name:"",
  modules:[],
  modules_name:[]
}

},


  methods:{

    userInfo(){



    }


  },

  mounted: function(){
    this.name=JSON.parse(localStorage.getItem("user")).user.name
    this.modules=JSON.parse(localStorage.getItem("user")).user.price.price.modules
    for (let i = 0; i < this.modules.length; i++) {
      this.modules_name.push(this.modules[i].company_module.module_name)
      
    }
  

  }

}
</script>

