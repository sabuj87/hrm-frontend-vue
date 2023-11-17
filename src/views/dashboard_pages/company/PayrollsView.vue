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
            <div class="card">
              <div  class="card-header pc-bg ">
                    <h3 class="card-title text-white float-left">Payrolls</h3>
                
                    <router-link  class=" float-right"  :to="{ name: 'createpayroll' }">

<span class="btn-sc-sm" >Create</span>
</router-link>
                  </div>
       
             
            
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table text-center table-striped table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>

                      <th>Payroll Name</th>
                      <th>Departments</th>
                      <th>Action</th>
                     
                     
                     
         
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="payroll in payrolls" :key="payroll" >
                      <td>{{ payroll.id  }}</td>
                      <td>{{ payroll.designation_name}}</td>
                      <td>
                      Software
                      </td>
                     
                       
                      
                    
                      <td>
                        <a href="/addemployee" class="btn-sc-sm ">Edit</a>

                        <a href="/addemployee" class="btn-dn-sm  ml-2">Delete</a>

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

    </div>
  </template>
      
  <script>

 // import $ from "jquery";
 import axios from "axios";
export default {

  data() {
  return {
    errors:{},
    payrolls:""
  };
},
methods: {
  getpayroll() {
    axios
          .get("/company/payrolls")
          .then((response) => {

            if(response){
              // alert(response.data.message)
              this.payrolls=response.data.data;
         
             
            }



           

          }).catch((error)=>{
             

           this.errors=error.response.data.errors

        

        

          
          })
         

  
  },
},
mounted:function(){
  this.getpayroll()
}
  

}
  </script>
      