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
          <a href="#" style="color:gray" class="d-block">MR Brownlly</a>
        </div>
       
      </div>
  
    
      <!-- Sidebar -->
      <div class="sidebar">
    
        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library -->
                 <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'company-dashboard' }">
              <i class="nav-icon fas fa-tachometer-alt sc"></i>
              <p>Dashboard</p>
              </router-link>
             
              </li>
              <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'company-profile-view' }">
                  <i class="nav-icon fa-solid fa-user sc"></i>
              <p>Profile</p>
              </router-link>
             
              </li>
          
          
          

              <li class=" nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-person sc"></i>
               
                <p>
                  Administrative
                  <i class="fas fa-angle-left right sc"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
               
                <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-employees' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Employees</p>
                  </router-link>
             
                 </li>
              
               
                 <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'administrative-departments' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Departments</p>
                  </router-link>
             
                 </li>
                 <li class="nav-item">
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
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-person-snowboarding sc"></i>
                <p>
                   Employee Onboarding 
                  <i class="fas fa-angle-left right sc"></i>
               
                </p>
              </a> 
              <ul class="nav nav-treeview">
                <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'jobdemandlist' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Job Demands</p>
                  </router-link>
             
                 </li>
                 <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'gettheapplication' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Job application</p>
                  </router-link>
             
                 </li>
                 <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'manageresume' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Manage Resume</p>
                  </router-link>
             
                 </li>
                 <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'shortlisted' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Shortlisted Candidates</p>
                  </router-link>
             
                 </li>
                 <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'createiq' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Interview Question</p>
                  </router-link>
             
                 </li>
                 <li class="nav-item">
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
                <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'interviewresult' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Interview Result</p>
                  </router-link>
             
                 </li>
                <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'finalcandidate' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Final Candidates</p>
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
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-clipboard sc"></i>
                <p>
                  Leave & Attendance
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
                <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'leaveaplylist' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Employee Leaves</p>
                  </router-link>
             
                 </li>
                 <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'leaveapproval' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Leave  approval</p>
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

            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-clock sc"></i>
             
                
                <p>
                  Training Management
                  <i class="fas fa-angle-left right sc"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="pages/tables/simple.html" class="nav-link">
                    <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                    <p>Training cost estimation</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                    <p>Trainings</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                    <p>Trainers</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                    <p>Assign Training</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/tables/data.html" class="nav-link">
                    <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                    <p>Training result</p>
                  </a>
                </li>
              
              
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fa-solid fa-dollar-sign sc"></i>
              
                <p>
                  Accounts & Payroll
                  <i class="fas fa-angle-left right sc"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'payrolls' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Payrolls</p>
                  </router-link>
             
                 </li>
                 <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'assignpayroll' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Assign Payroll</p>
                  </router-link>
             
                 </li>

                 <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'requestedloan' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Requested Loan</p>
                  </router-link>
             
                 </li>

                 <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'advancedpayment' }">
                  <i class="far fa-circle nav-icon fs80 ml-3 sc"></i>
                  <p>Advanced Payment</p>
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

            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-table sc"></i>
                <p>
                  Complain Management
                
                </p>
              </a>
            
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-table sc"></i>
                <p>
                  Billings
                
                </p>
              </a>
            
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


}
</script>

