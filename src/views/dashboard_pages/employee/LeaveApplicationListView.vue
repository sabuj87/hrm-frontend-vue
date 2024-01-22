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
      <div class="content-wrapper">
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
                    <h3 class="card-title text-white">Your leave list</h3>
                  </div>
              
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Leave Type</th>
                      <th>From</th>
                      <th>Till</th>
                      <th>Status</th>
                      <th>Action</th>
                    
         
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="leave in leaves" :key="leave">
                        <td>{{ leave.id }}</td>
                        <td>{{ leave.leave_type }}</td>
                      <td>{{ leave.from }}</td>
                      <td>{{ leave.to }}</td>

                 
                      <td v-if="leave.status==1"  class="text-success" >Approved</td>
                      <td v-if="leave.status==null"  class="text-success" >Pending</td>

                      <td>
                        
                        <a href="/addemployee" class="btn btn-sm btn-default "><i class="fa-solid fa-eye"></i></a>
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
           
            leaves:[],
          
          };
        },
        methods: {
      
    getLeaves(){
     axios.get("employee/leaves").then((response)=>{
        this.leaves=response.data.data;
     }).catch((error)=>{
         console.log(error);  
     })
    },

  
        },
        mounted: function () {
          this.getLeaves();
        }
      };
      </script>