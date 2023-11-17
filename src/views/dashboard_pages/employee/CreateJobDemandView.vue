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
                <h1 class="m-0">Create job demand</h1>
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
               
                  <!-- /.card-header -->
                  <!-- form start -->
  
                  <form>

                    <div class="card-body">


                        <div class="row">
                            <div class="col-lg-3">
                      <div class="form-group">
                        <label>Department</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Accounts</option>
                          <option selected="selected">Development</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >Demanded By
                          </label>
                          <input
                            type="text"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
             
                        
                          <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >New employee designation
                          </label>
                          <input
                            type="text"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                          <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >Quantity
                          </label>
                          <input
                            type="text"
                            class="form-control"
                           
                          />
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >Roles
                          </label>
                          <input
                            type="text"
                            class="form-control"
                           
                          />
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >Qualification 
                          </label>
                          <input
                            type="text"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >Special Qualification
                          </label>
                          <input
                            type="text"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                      <div class="form-group">
                        <label>Salary range</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">20-25</option>
                          <option selected="selected">25-30</option>
                        </select>
                      </div>
                      
                    </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >When to recruite
                          </label>
                          <input
                            type="date"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                 
                 
                 
                 

                   
                   
                 

                   
                  </div>




                  <button type="button" class="btn btn-outline-primary  " >Request</button>
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
      