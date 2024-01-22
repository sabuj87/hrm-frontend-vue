<template>
  
    <aside  class="main-sidebar sidebar-light-primary elevation-2 ">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link text-center">
      <img src="/assets/images/logo/logo.png" alt="logo" class=" text-center" style="height:50px;width:100px;">
      <!-- <p class="brand-text text-center font-weight-light">H R M</p> -->
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
      <!-- Sidebar user panel (optional) -->
   
  


      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'employee-dashboard' }">
              <i  class="nav-icon fas fa-tachometer-alt sc"></i>
              <p>Dashboard</p>
            </router-link>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i  class="nav-icon fa-solid fa-info  sc "></i>
          
              <p>
                Manage Information
                <i class="right fas fa-angle-left sc"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'profile' }">
                  <i  class="fa-regular fa-user nav-icon sc"></i>
                  <p>Profile update</p>
                
               
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'giveattendance' }">
                  <i  class="fa-solid fa-clipboard-user nav-icon sc"></i>
                  <p>Attendance</p>
                  
            
                </router-link>
              </li>
            
            
<!-- 
              <li class="nav-item">
                <a href="/pendingcompanies" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Roaster & Timesheet view</p>
                </a>
              </li> -->

              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'resourcedemand' }">
                  <i  class=" fa-brands fa-dropbox nav-icon sc"></i>
                  <p>Demand Resource</p>
                 
                </router-link>
              </li>
              
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'employee-jobdemandlist' }">
                  <i  class=" fa-brands fa-dropbox nav-icon sc"></i>
                  <p>Job Demand</p>
                 
                </router-link>
              </li>
            
            
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'allocatedasset' }">
                  <i  class="fa-solid fa-check nav-icon sc"></i>
                  <p>Allocated Resource</p>
                 
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'billsubmission' }">
                  <i class="fa-solid fa-list nav-icon sc"></i>
                  <p>Bill submission</p>
             
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'requestloan' }">
                  <i class="fa-solid fa-dollar-sign nav-icon sc"></i>
                  <p>Loan Request</p>
                
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'leavelist' }">
                  <i class="fa-solid fa-l nav-icon sc"></i>
                  <p>Leaves</p>
                </router-link>
               
              </li>
            
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'leaveapplication' }">
                  <i class="fa-solid fa-arrow-right nav-icon sc"></i>
                  <p>Leave Application</p>
         
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'performance' }">
                  <i class="far fa-circle nav-icon sc"></i>
                  <p>Performance</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'payslip' }">
                  <i class="far fa-circle nav-icon sc"></i>
                  <p>Pay slip</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'billstatus' }">
                  <i class="far fa-circle nav-icon sc"></i>
                  <p>Bill status</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'createjobdemand' }">
                  <i class="far fa-circle nav-icon sc"></i>
                  <p>Job demand</p>
                </router-link>
              </li>
            
            
            
            
            
            
            
            
            
            
             
        
           
            </ul>
          </li>

          

          
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
    
    <script>
export default {};
</script>
    
    <style>
</style>