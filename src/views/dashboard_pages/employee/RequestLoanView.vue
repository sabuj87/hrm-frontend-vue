<template>
    <div class="wrapper">
      <!-- Preloader -->
      <!-- <div class="preloader flex-column justify-content-center align-items-center">
        <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
      </div> -->
  
     
  
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
                <div class="card card-primary">

                  
                  <div  class="card-header pc-bg ">
                    <h3 class="card-title text-white">Loan Request</h3>
                  </div>
              
                  
                  <!-- /.card-header -->
                  <!-- form start -->
  
                  <form>

                    <div class="card-body">


                        <div class="row">
                        
                          <div class="col-lg-4">
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
                      <div class="col-lg-4">
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
                   
                 
                 
                 
                 
                    <div class="col-lg-4">
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
                    <div class="col-lg-12">
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
             

                   
                   
                 

                   
                  </div>




                  <button type="button" class="btn-sc" >Request</button>
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
      