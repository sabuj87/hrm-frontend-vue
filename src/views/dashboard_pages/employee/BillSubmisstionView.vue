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
                    <h3 class="card-title text-white">Bill Submission</h3>
                  </div>
              
                  <!-- /.card-header -->
                  <!-- form start -->
  
                  <form>

                    <div class="card-body">


                        <div class="row">

                            <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >Date
                          </label>
                          <input
                            v-model="date"
                            type="date"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                            <div class="col-lg-3">
                      <div class="form-group">
                        <label>Bill category</label>
                        <select
                          v-model="category"
                          class="form-control "
                          style="width: 100%"
                        >
                          <option selected="selected">Categroy 1</option>
                          <option >Category 2</option>
                        </select>
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
                            min="0"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >Rate
                          </label>
                          <input
                            v-model="rate"
                            type="number"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >Total
                          </label>
                          <input
                            v-model="total"
                            type="number"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                 
                 
                 
                 
                
                    <div  class="col-lg-1 pt-1 ">
          
           
          <button @click="addbill" type="button" class="btn-sc-outline-sm mt-4   mb-4" >ADD</button>

        
       
      

     
   </div>

                   
                 

                   
                  </div>
                  <table class="table text-center table-striped  table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Date</th>
                      <th>Bill Category</th>
                      <th>Quantity</th>
                      <th>Rete</th>
                      <th>Total</th>
                     
                     
                     
         
                    </tr>
                  </thead>
                  <tbody>
                  
                    <tr v-for="bill in bills" :key="bill" >
                      <td>1.</td>
                      <td>{{bill.date}}</td>
                      <td>{{bill.category}}</td>
                      <td>{{bill.quantity}}</td>
                      <td>{{bill.rate}}</td>
                      <td>{{bill.total}}</td>
                  
                    
                  
                    
                    
                    </tr>
                
                  
                   
                 
                  
                  </tbody>
                </table>

             

                   




                  <button type="button" class="btn-sc mt-4 " >Request</button>
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
      bills: [],
   
    };
  
  },
  methods:{
    addbill(){
      var bill={
        date:this.date,
        category:this.category,
        quantity:this.quantity,
        rate:this.rate,
        total:this.total


      }

      this.bills.push(bill)


    }
        


}

  
  }
  </script>
      