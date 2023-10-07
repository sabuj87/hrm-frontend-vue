<template>
    <div class="wrapper">
      <!-- Preloader -->
      <!-- <div class="preloader flex-column justify-content-center align-items-center">
        <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
      </div> -->
  
  

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0">Departments</h1>
              </div>
              <!-- /.col -->
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div>
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
              <div class="card-header">
                <!-- <h3 class="card-title d-inline float-left">Bordered Table</h3> -->
                <a href="/adddepartment" class="btn  btn-outline-primary float-right">ADD</a>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table text-center table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Department ID</th>
                      <th>Department Name</th>
                      <th>Action</th>
                     
                     
         
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>ABC123</td>
                      <td>
                        Accounts
                      </td>
                     
                       
                      
                    
                      <td>
                        <a href="/addemployee" class="btn btn-sm btn-default ">Edit</a>

                        <a href="/addemployee" class="btn btn-sm btn-danger ml-2 ">Delete</a>

                      </td>
                    
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td>ABC123</td>
                      <td>
                        Accounts
                      </td>
                     
                       
                      
                    
                      <td>
                        <a href="/addemployee" class="btn btn-sm btn-default ">Edit</a>

                        <a href="/addemployee" class="btn btn-sm btn-danger ml-2 ">Delete</a>

                      </td>
                    
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td>ABC123</td>
                      <td>
                        Accounts
                      </td>
                     
                       
                      
                    
                      <td>
                        <a href="/addemployee" class="btn btn-sm btn-default ">Edit</a>

                        <a href="/addemployee" class="btn btn-sm btn-danger ml-2 ">Delete</a>

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
  
    </div>
  </template>
      
      <script>

  export default {
  
  }
  </script>
      