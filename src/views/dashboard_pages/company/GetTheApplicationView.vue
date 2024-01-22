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
                <h3 class="card-title d-inline float-left text-white">Job applications</h3>
                <router-link  class=" float-right"  :to="{ name: 'addjobapplicathon' }">

<span class="btn-sc-sm" >Add</span>
</router-link>
                  </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Applicant Name</th>
                      <th>Job Title</th>
                      <th>Status</th>
                 
                      <th>Action</th>
         
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="application in applications" :key="application">

                        <td>{{application.id}}</td>
                        <td>{{application.applicant_name}}</td>
                      <td>{{application.published_job.job.designation}}</td>
                      <td>Approve</td>
            
                      

                    
                      <td>
                        <router-link   :to="{ name: 'jobapplicathondetails',query: { uuid: application.uuid } }">

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
import axios from "axios";
  export default { 
    data() {
          return {
            errors: {},
            applications:[]
            
          };

       
        },
        methods: {
          getApplications(){
     axios.get("company/job_appliocations").then((response)=>{
        this.applications=response.data.data;
     }).catch((error)=>{
         console.log(error);  
     })
    },

        },
        mounted:function(){
          this.getApplications()
        }

     
   
  
  }
  </script>
      