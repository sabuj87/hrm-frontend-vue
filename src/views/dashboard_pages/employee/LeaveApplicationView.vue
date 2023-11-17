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
                    <h3 class="card-title">Leave Application</h3>
                  </div>
             
                  <!-- /.card-header -->
                  <!-- form start -->
  
                  <form>

                    <div class="card-body">
                        
                        <div class="row">
                        
                        <div class="col-lg-3 border p-2">

                            <span style="font-size: 120%;" ><strong class="sc" >Total Leave days :</strong> 22 </span>
                    
                    </div>
                   
                        <div class="col-lg-3 border p-2">

                            <span style="font-size: 120%;" ><strong class="sc" >Casual Leave :</strong> 15 </span>
                    
                    </div>
                   
                        <div class="col-lg-3 border p-2">

                            <span style="font-size: 120%;" ><strong class="sc" >Medical Leave :</strong> 12</span>
                    
                    </div>
                   
                        <div class="col-lg-3 border p-2">

                            <span style="font-size: 120%;" ><strong class="sc">Casual Remaining :</strong> 8</span>
                    
                    </div>
                   
                   
               
               
               
               
                

                 
                 
               

                 
                </div>
         
                <h5 class="mt-3" >Apply for leave</h5>
                        <div class="row  mt-3 ">
                            
                        
                           
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Leave Type</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Type 1</option>
                          <option selected="selected">Type 2</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>From</label>
                        <input
                            type="date"
                            class="form-control"
                           
                          />
                       
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>To</label>
                        <input
                            type="date"
                            class="form-control"
                           
                          />
                       
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Approval Authority</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Authority 1</option>
                          <option selected="selected">Authority 2</option>
                        </select>
                      </div>
                    </div>
             

             

                      <div class="col-lg-12">
                        <div class="form-group">
                          <label 
                            >Reason
                          </label>
                          <input
                            type="number"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                   
                 
                 
                 
                 
                
                   
                   
                 

                   
                  </div>




                  <button type="button" class="btn-sc" >Apply</button>
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
      