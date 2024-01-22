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
              <div class="col-sm-6">
                <h1 class="m-0">Create Payslip</h1>
              </div>
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
                
                  <!-- /.card-header -->
                  <!-- form start -->
  
                  <form>
                    <div class="card-body">
                    <div class="row">
             
                  
                        <div class="col-lg-4">
                       
                       <div class="form-group">
                         <label for="exampleInputEmail1"
                           >Department </label
                         >
                       
                         <select
                            class="form-custom-select"
                            style="width: 100%"
                            v-model="grade"
                          >
                            <option disabled value=""  >Select a Department</option>
                            <option  >Abu Saeed Sabuj</option>
                            <option  >Roun</option>
                            <option  >Tin</option>
                            <option  >De</option>
                          </select>

                         <p class="text-danger mt-1" v-if="errors.grade" >{{ errors.grade[0] }}</p>

                       </div>

                     
              
              
                    
                     </div>
                   
                      <div class="col-lg-4">
                    
                        <div class="form-group">
                          <label>Month</label>
                          <select
                            class="form-custom-select"
                            style="width: 100%"
                            v-model="company_department_id"
                          >
                          <option disabled value=""  >Select a month</option> 
                          <option  >January</option> 
                          <option   >February</option> 

                          </select>
                          <p class="text-danger mt-1" v-if="errors.company_department_id" >{{ errors.company_department_id[0] }}</p>

                        </div>
                        
                
                         
                  
                        
                      </div>
                      <div class="col-lg-3">
                    
                    <div class="form-group">
                      <label>Year</label>
                      <select
                        class="form-custom-select"
                        style="width: 100%"
                        v-model="company_department_id"
                      >
                      <option disabled value=""  >Select a year</option> 
                      <option  value=""  >2024</option> 
                      <option  value=""  >2025</option> 

                      </select>
                      <p class="text-danger mt-1" v-if="errors.company_department_id" >{{ errors.company_department_id[0] }}</p>

                    </div>
                    
            
                     
              
                    
                  </div>

                    <div  class="col-lg-1 pt-1 ">
          
           
              <button @click="addallowance" type="button" class="btn btn-default btn-sm mt-4  mb-4" >Search</button>


           
          
   
         
       </div>


                
                
                    
                 

                   
                    
                 
                   


                  

                  


               

                    </div>




           <table class="table text-center table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Employee ID</th>
                      <th>Employee Name</th>
                      <th>Department</th>
                      <th>Attendance</th>
                      <th>Leave</th>
                      <th>Action</th>

                      
                     
                     
                     
         
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td>1</td>
                  <td>5344</td>
                  <td>Abu Saeed </td>
                  <td>Software</td>
                  <td>23</td>
                  <td>3</td>
                  <td>
                  <button class="btn-sc-sm" >Create</button>
                  <button class="btn-pc-sm ms-2" >View</button>
                  
                  </td>
                  
                  </tr>
                  <tr>
                  <td>2</td>
                  <td>5454</td>
                  <td>Abu Saeed Sabuj</td>
                  <td>Software</td>
                  <td>23</td>
                  <td>3</td>
                  <td>
                  <button class="btn-sc-sm" >Create</button>
                  <button class="btn-pc-sm ms-2" >View</button>
                  
                  </td>
                  
                  </tr>
                  <tr>
                  <td>3</td>
                  <td>3445</td>
                  <td>Neer Sabuj</td>
                  <td>Software</td>
                  <td>24</td>
                  <td>2</td>
                  <td>
                  <button class="btn-sc-sm" >Create</button>
                  <button class="btn-pc-sm ms-2" >View</button>
                  
                  </td>
                  
                  </tr>
                
                
                  
                   
                 
                  
                  </tbody>
                </table>

                    <button type="button" @click.prevent="addpayroll" class="btn-sc mt-4 mb-4" >Create</button>
                         
  

                    
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
      <!-- /.content-wrapper -->
   
    </div>
  </template>
      
      <script>

import $ from "jquery";
 import axios from "axios";

  export default {

    data() {
      return {
    
        allowances:[],
        departments:[],
        errors:{},
        grade:"",
   
      };
    },
  
    methods: {
      // Creating Feature list
      addallowance(){

        var allowance={allowance:this.allowance,value:this.value,type:this.type}
        this.allowances.push(allowance);



      },

      //Adding price to database

      addpayroll(){


        axios
          .post("/company/payrolls", {
            grade: this.grade,
            company_department_id: this.company_department_id,
            basic: this.basic,
            increment: this.increment,
            date: this.date,
            // features: JSON.stringify(Object.assign({}, this.features))
            allowances: JSON.stringify(this.allowances)
          })
          .then((response) => {

            if(response){
              this.$emit("get_message", response.data.message);
              $(".form-control").val('')
             
            }



           

          }).catch((error)=>{
             

           this.errors=error.response.data.errors

        

        

          
          })
         

      



      },
      getdepartment() {
         axios
          .get("/company/departments")
          .then((response) => {

            if(response){
              // alert(response.data.message)
              this.departments=response.data.data;
         
             
            }



           

          }).catch((error)=>{
             

           console.log(error)

        

        

          
          })
         

  
  },


     
      
    },
  
    mounted: function () {
       this.getdepartment()
    },
  }
  </script>
      