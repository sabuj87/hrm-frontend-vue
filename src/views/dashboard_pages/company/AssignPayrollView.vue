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
                <h1 class="m-0">Assign Payroll</h1>
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
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Assign Payroll </h3>
                  </div>
                  <!-- /.card-header -->
                  <!-- form start -->
  
                  <form>

                    <div class="card-body">


                        <div class="row">
                            <div class="col-lg-3">
                      <div class="form-group">
                        <label>Select employee</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">employee 1</option>
                          <option selected="selected">employee 2</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Department</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Department 1</option>
                          <option selected="selected">Department 2</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Postion</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Postion 1</option>
                          <option selected="selected">Postion 2</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Reporting Authority</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Authority 1</option>
                          <option selected="selected">Authority 2</option>
                        </select>
                      </div>
                    </div>
             

                   
                   
                 

                   
                  </div>




                  <button type="button" class="btn btn-primary  " >Assign</button>
                    </div>


                  
           

                    <!-- /.card-body -->
  
  
                    <div class="bs-stepper" ></div>
                  </form>
                </div>
  
               
  
             
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
      