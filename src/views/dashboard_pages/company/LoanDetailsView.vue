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
              <div class="col-sm-6">
                <h1 class="m-0">Loan Details</h1>
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
                <!-- <a href="/addemployee" class="btn  btn-outline-primary float-right">ADD</a> -->
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <span><strong>Empaloyee name :</strong> Abu Saeed Sabuj </span> <br><br>
                <span><strong>Department :</strong> Development</span>  <br><br>
                <span><strong>Position :</strong> Softawre Developer</span>  <br><br>
                <span><strong>Request amount :</strong> 20000</span> <br><br>
                <span><strong>Request Duration :</strong> 6 month</span> <br><br>
                <div class="row">

                    <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >Adjustment amount
                          </label>
                          <input
                            type="number"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >Adjustment Duration
                          </label>
                          <input
                            type="number"
                            class="form-control"
                           
                          />
                        </div>
                      </div>



                </div>

                <button type="button" class="btn btn-primary  " >Approve</button>
                <button type="button" class="btn btn-danger ml-2 " >Reject</button>
              </div>
              <!-- /.card-body -->
           
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
      