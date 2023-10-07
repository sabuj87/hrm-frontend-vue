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
                <h1 class="m-0">Request Loan</h1>
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
                    <h3 class="card-title">Request Loan</h3>
                  </div>
                  <!-- /.card-header -->
                  <!-- form start -->
  
                  <form>

                    <div class="card-body">


                        <div class="row">
                        
                          <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >Loan amount
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
                            >Loan duration
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
                            >Loan Reason
                          </label>
                          <input
                            type="text"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                 
                 
                 
                 
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Recommended officer</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Officer 1</option>
                          <option selected="selected">Officer 2</option>
                        </select>
                      </div>
                    </div>
             

                   
                   
                 

                   
                  </div>




                  <button type="button" class="btn btn-primary  " >Request</button>
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
      