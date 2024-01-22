<template>
    <div class="wrapper">
      <!-- Preloader -->
      <!-- <div class="preloader flex-column justify-content-center align-items-center">
        <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
      </div> -->
  
      <!-- Navbar -->
      <navbar-view></navbar-view>
      <!-- /.navbar -->
  
      <!-- Main Sidebar Container -->
      <sidebar-view></sidebar-view>
  
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper bg-white">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->
  
        <!-- Main content -->
        <section class="content">
          <div class="container-fluid">
            <div class="row">

                <div class="col-lg-12">
            <div class="card">
        
              <div  class="card-header pc-bg ">
                <h3 class="card-title d-inline float-left text-white">Employees</h3>
                <router-link  class=" float-right"  :to="{ name: 'addemployee' }">

<span class="btn-sc-sm" >Add</span>
</router-link>
                  </div>
              
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
   
                      <th>Employee ID</th>
                      <th>Employee Name</th>
       
                      <th>Email</th>
                   
                      <th>Position</th>
                      <th>Action</th>
                     
         
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="employee in employees" :key="employee">
                      <td>{{ employee.id }}</td>
                      <td>{{ JSON.parse(
                  employee.basic_information
                ).first_name}} {{ JSON.parse(
                  employee.basic_information
                ).last_name}}</td>
                      <td>
                        {{ JSON.parse(
                  employee.basic_information
                ).email}}
                      </td>
                     
                      <td>
                        Software Developer
                       </td>
                     
                      
                    
                      <td>

                        <router-link    :to="{ name: 'administrative-employee-profile' , query: { uuid: employee.uuid } }">

<span  ><i class="fa-solid fa-eye"></i></span>
</router-link>
               
                      </td>
                    
                    </tr>
               
                
                
                
                   

                  
                 
                  
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
              <div class="card-footer clearfix">
                <ul class="pagination pagination-sm m-0 float-right">
                  <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                </ul>
              </div>
            </div>
            <!-- /.card -->

       
            <!-- /.card -->
          </div>



            </div>
          </div>
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
 
    </div>
  </template>
      
      <script>
      //import $ from "jquery";
     import axios from "axios";
     export default {
       data() {
         return {
           errors: {},
           employees: [],
           
         };
       },
       methods: {
         getemployees() {
           axios
             .get("/company/employees")
             .then((response) => {
               if (response) {
                 
                 this.employees = response.data.data;
     
               }
             })
             .catch((error) => {
               console.log(error);
               
             });
         },
       
       },
       mounted: function () {
         this.getemployees();
       },
     };
     </script>
      