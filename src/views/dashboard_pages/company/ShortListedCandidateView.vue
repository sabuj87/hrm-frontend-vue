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
              <div class="col-sm-6">
                <h1 class="m-0 pc">Short Listed</h1>
              </div>
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

                <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >Search
                          </label>
                          <input
                            type="text"
                            placeholder="Job title"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                      <div class="col-lg-3 mt-4 pt-2">
                      
                        <a href="/addemployee" class="btn-sc-sm mt-5 ">Search</a>
                      </div>


            </div>


            <div class="row">

                <div class="col-lg-12">
            <div class="card">
             
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Applicant Name</th>
                      <th>Job Title</th>
                      <th>View</th>
                 
                 
                    
         
                    </tr>
                  </thead>
                  <tbody>
                    <tr>

                        <td>1.</td>
                        <td>Abu Saeed Sabuj</td>
                      <td>Software Developer</td>
                      <td>CV(icon) cover letter (icon) doc1, doc2, doc3</td>
            
                 
                  
                    
                    </tr>

                    <tr>

<td>1.</td>
<td>Abu Saeed Sabuj</td>
<td>Software Developer</td>
<td>CV(icon) cover letter (icon) doc1, doc2, doc3</td>




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
      