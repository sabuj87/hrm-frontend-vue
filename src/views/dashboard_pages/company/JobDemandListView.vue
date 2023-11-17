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
                    <h3 class="card-title text-white">Job Demand List</h3>
                  </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Job ID</th>
                      <th>Department</th>
                      <th>Job Title</th>
                      <th>Job created date</th>
                      <th>Action</th>
                    
         
                    </tr>
                  </thead>
                  <tbody>
                    <tr>

                        <td>1.</td>
                        <td>00123</td>
                      <td>Development</td>
                      <td>Softawre Developer</td>
                      <td>12/10/2023</td>
                 
                    
                      <td>
                        <router-link    :to="{ name: 'jobdetails' }">

<span class="btn-sc-outline-sm" >View</span>
</router-link>   
                      </td>
                    
                    </tr>
                     <tr>

                        <td>1.</td>
                        <td>00123</td>
                      <td>Development</td>
                      <td>Softawre Developer</td>
                      <td>12/10/2023</td>
                 
                    
                      <td>
                        <router-link    :to="{ name: 'jobdetails' }">

<span class="btn-sc-outline-sm" >View</span>
</router-link>    
                      </td>
                    
                    </tr>
                     <tr>

                        <td>1.</td>
                        <td>00123</td>
                      <td>Development</td>
                      <td>Softawre Developer</td>
                      <td>12/10/2023</td>
                 
                    
                      <td>
                        <router-link    :to="{ name: 'jobdetails' }">

<span class="btn-sc-outline-sm" >View</span>
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

  export default {

  
  }
  </script>
      