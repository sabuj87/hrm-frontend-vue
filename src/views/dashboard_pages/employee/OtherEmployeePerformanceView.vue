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
                    <h3 class="card-title text-white">Performance</h3>
                  </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Assignment</th>
                      <th>Description</th>
                      <th>Deliverable</th>
                      <th>Due date</th>
                      <th>Status</th>
                      <th>Action</th>
                    
         
                    </tr>
                  </thead>
                  <tbody>
                    <tr>

                        <td>1.</td>
                        <td>Assignment 1</td>
                      <td>Have to complete</td>
                      <td>It is deliverable</td>
                      <td>12/6/2023</td>
                      <td class="text-success" >Aggred</td>
                    
                      <td>
                        <a href="/addemployee" class="btn btn-sm btn-default ">View</a>
                        <a  class="btn btn-sm btn-default ml-2 " data-toggle="modal" data-target="#exampleModal" >Report</a>
                      </td>
                    
                    </tr>
                    <tr>

<td>1.</td>
<td>Assignment 1</td>
<td>Have to complete</td>
<td>It is deliverable</td>
<td>12/6/2023</td>
<td class="text-success" >Aggred</td>

<td>
<a href="/addemployee" class="btn btn-sm btn-default ">View</a>
<a href="/addemployee" class="btn btn-sm btn-default ml-2 ">Report</a>
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
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add report</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
                        
                        <div class="col-lg-6">
                      <div class="form-group">
                        <label 
                          >Completion Date
                        </label>
                        <input
                          type="date"
                          class="form-control"
                         
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label 
                          >Note
                        </label>
                        <input
                          type="text"
                          class="form-control"
                         
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="exampleInputFile">Document</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="exampleInputFile"
                            />
                            <label
                              class="custom-file-label"
                              for="exampleInputFile"
                              >Choose file</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
               
               
               

                 
                 
               

                 
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancle</button>
        <button type="button" class="btn btn-primary">Update</button>
      </div>
    </div>
  </div>
</div>
    </div>
  </template>
      
      <script>

  export default {

  
  }
  </script>
      