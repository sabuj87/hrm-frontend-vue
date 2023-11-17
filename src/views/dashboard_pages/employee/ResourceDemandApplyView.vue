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
                    <h3 class="card-title">Demand Resource</h3>
                  </div>
                
                  <!-- /.card-header -->
                  <!-- form start -->
  
                  <form>

                    <div class="card-body">


                        <div class="row">
                            <div class="col-lg-3">
                      <div class="form-group">
                        <label>Resource Type</label>
                        <select
                          v-model="rtype"
                          class="form-control "
                          style="width: 100%"
                        >
                          <option selected="selected">Electronics</option>
                          <option >Stationary</option>
                        </select>
                      </div>
                    </div>
                        
                          <div class="col-lg-6">
                        <div class="form-group">
                          <label 
                            >Resource name
                          </label>
                          <input
                            v-model="name"
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
                            v-model="quantity"
                            type="number"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                      <div class="col-lg-8">
                        <div class="form-group">
                          <label 
                            >Description
                          </label>
                          <input
                            v-model="description"
                            type="text"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                 
                 
                 
                 
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Approval Authority</label>
                        <select
                          v-model="authority"
                          class="form-control "
                          style="width: 100%"
                        >
                          <option selected="selected">Officer 1</option>
                          <option >Officer 2</option>
                        </select>
                      </div>
                    </div>
                    <div  class="col-lg-1 pt-1 ">
          
           
          <button @click="adddemands" type="button" class="btn-sc-outline-sm  mt-4   mb-4" >Add</button>

        
       
      

     
   </div>


                   
                   
                 

                   
                  </div>

                  <table class="table text-center table-striped table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Resource Type</th>
                      <th>Resource Name</th>
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Authority</th>
                     
                     
                     
         
                    </tr>
                  </thead>
                  <tbody>
                  
                    <tr v-for="demand in demands" :key="demand" >
                      <td>1.</td>
                      <td>{{demand.rtype}}</td>
                      <td>{{demand.name}}</td>
                      <td>{{demand.description}}</td>
                      <td>{{demand.quantity}}</td>
                      <td>{{demand.authority}}</td>
                    
                  
                    
                    
                    </tr>
                
                  
                   
                 
                  
                  </tbody>
                </table>

             




                  <button type="button" class="btn-sc mt-4  " >Request</button>
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
    data() {
    return {
      demands: [],
   
    };
  
  },
  methods:{
    adddemands(){
      var demand={
        rtype:this.rtype,
        name:this.name,
        description:this.description,
        quantity:this.quantity,
        authority:this.authority


      }

      this.demands.push(demand)


    }
        


}

  
  }
  </script>
      