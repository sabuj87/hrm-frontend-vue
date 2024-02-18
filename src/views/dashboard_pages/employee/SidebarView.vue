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
          <li v-if="employee_modules_name.includes('Employee Dashboard')" class="nav-item">
            <router-link class="nav-link" :to="{ name: 'employee-dashboard' }">
              <i  class="nav-icon fas fa-tachometer-alt sc"></i>
              <p>Employee Dashboard</p>
            </router-link>
          </li>

          <li v-if="employee_modules" class="nav-item">
            <a href="#" class="nav-link">
              <i  class="nav-icon fa-solid fa-info  sc "></i>
          
              <p>
                Employee Modules
                <i class="right fas fa-angle-left sc"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li v-if="employee_modules_name.includes('Employee Dashboard')" class="nav-item">
                <router-link class="nav-link" :to="{ name: 'profile' }">
                  <i  class="fa-regular fa-user nav-icon sc"></i>
                  <p>Employee Profile</p>
                
               
                </router-link>
              </li>
              <li v-if="employee_modules_name.includes('Employee Dashboard')" class="nav-item">
                <router-link class="nav-link" :to="{ name: 'giveattendance' }">
                  <i  class="fa-solid fa-clipboard-user nav-icon sc"></i>
                  <p>Give Attendance</p>
                  
            
                </router-link>
              </li>
            
            
<!-- 
              <li class="nav-item">
                <a href="/pendingcompanies" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Roaster & Timesheet view</p>
                </a>
              </li> -->

              <li v-if="employee_modules_name.includes('Demand Resource')" class="nav-item">
                <router-link class="nav-link" :to="{ name: 'resourcedemand' }">
                  <i  class=" fa-brands fa-dropbox nav-icon sc"></i>
                  <p>Demand Resource</p>
                 
                </router-link>
              </li>
              
              <li v-if="employee_modules_name.includes('Job Demand')" class="nav-item">
                <router-link class="nav-link" :to="{ name: 'employee-jobdemandlist' }">
                  <i  class=" fa-brands fa-dropbox nav-icon sc"></i>
                  <p>Job Demand</p>
                 
                </router-link>
              </li>
            
            
              <li v-if="employee_modules_name.includes('View resource List')" class="nav-item">
                <router-link class="nav-link" :to="{ name: 'allocatedasset' }">
                  <i  class="fa-solid fa-check nav-icon sc"></i>
                  <p>Allocated Resource</p>
                 
                </router-link>
              </li>
              <li v-if="employee_modules_name.includes('Submit Bill')" class="nav-item">
                <router-link class="nav-link" :to="{ name: 'billsubmission' }">
                  <i class="fa-solid fa-list nav-icon sc"></i>
                  <p>Submit Bill</p>
             
                </router-link>
              </li>
              <li v-if="employee_modules_name.includes('Loan Application')" class="nav-item">
                <router-link class="nav-link" :to="{ name: 'requestloan' }">
                  <i class="fa-solid fa-dollar-sign nav-icon sc"></i>
                  <p>Loan Application</p>
                
                </router-link>
              </li>
              <li v-if="employee_modules_name.includes('Leaves')" class="nav-item">
                <router-link class="nav-link" :to="{ name: 'leavelist' }">
                  <i class="fa-solid fa-l nav-icon sc"></i>
                  <p>Leaves</p>
                </router-link>
               
              </li>
            
              <li v-if="employee_modules_name.includes('Leave Application')" class="nav-item">
                <router-link class="nav-link" :to="{ name: 'leaveapplication' }">
                  <i class="fa-solid fa-arrow-right nav-icon sc"></i>
                  <p>Leave Application</p>
         
                </router-link>
              </li>
              <li v-if="employee_modules_name.includes('Leave Application')" class="nav-item">
                <router-link class="nav-link" :to="{ name: 'performance' }">
                  <i class="far fa-circle nav-icon sc"></i>
                  <p>Performance</p>
                </router-link>
              </li>
              <!-- <li v-if="employee_modules_name.includes('Download Payslip')" class="nav-item">
                <router-link class="nav-link" :to="{ name: 'payslip' }">
                  <i class="far fa-circle nav-icon sc"></i>
                  <p>Download Payslip</p>
                </router-link>
              </li> -->
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'billstatus' }">
                  <i class="far fa-circle nav-icon sc"></i>
                  <p>Bill status</p>
                </router-link>
              </li>
              <li v-if="employee_modules_name.includes('Job demand')"  class="nav-item">
                <router-link class="nav-link" :to="{ name: 'createjobdemand' }">
                  <i class="far fa-circle nav-icon sc"></i>
                  <p>Job demand</p>
                </router-link>
              </li>
            </ul>
          </li>


            <li v-if="employee_modules_name.includes('Other Employee Module')" class="nav-item">
            <a href="#" class="nav-link">
              <i  class="nav-icon fa-solid fa-info  sc "></i>
          
              <p>
              Other Employee Modules
                <i class="right fas fa-angle-left sc"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li  class="nav-item">
                <router-link class="nav-link" :to="{ name: 'employee.otheremployee.attendance' }">
                  <i  class="fa-regular fa-user nav-icon sc"></i>
                  <p>Attendance</p>
                
               
                </router-link>
              </li>
              <li  class="nav-item">
                <router-link class="nav-link" :to="{ name: 'employee.otheremployee.leave-application' }">
                  <i  class="fa-solid fa-clipboard-user nav-icon sc"></i>
                  <p>Leave Application</p>
                  
            
                </router-link>
              </li>
            
            

              <li  class="nav-item">
                <router-link class="nav-link" :to="{ name: 'employee.otheremployee.resource' }">
                  <i  class=" fa-brands fa-dropbox nav-icon sc"></i>
                  <p>Resource Demand</p>
                 
                </router-link>
              </li>
              
              <li  class="nav-item">
                <router-link class="nav-link" :to="{ name: 'employee.otheremployee.setkpi' }">
                  <i  class=" fa-brands fa-dropbox nav-icon sc"></i>
                  <p>Performance KPI</p>
                 
                </router-link>
              </li>
            
            
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'employee.otheremployee.performance' }">
                  <i  class="fa-solid fa-check nav-icon sc"></i>
                  <p>Performance Evaluation</p>
                 
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

export default {


    
data() {
return {
  name:"",
  company_modules:[],
  employee_modules:[],
  company_modules_name:[],
  employee_modules_name:[],

}

},


  methods:{

    userInfo(){



    }


  },

  mounted: function(){
    this.name=JSON.parse(localStorage.getItem("user")).user.name
    this.company_modules=JSON.parse(localStorage.getItem("user")).user.position.company_modules
    for (let i = 0; i < this.company_modules.length; i++) {
      this.company_modules_name.push(this.company_modules[i].company_module.module_name)
      
    }
    this.employee_modules=JSON.parse(localStorage.getItem("user")).user.position.employee_modules
    for (let i = 0; i < this.employee_modules.length; i++) {
      this.employee_modules_name.push(this.employee_modules[i].employee_module.module_name)
      
    }
  
  

  }

}
</script>