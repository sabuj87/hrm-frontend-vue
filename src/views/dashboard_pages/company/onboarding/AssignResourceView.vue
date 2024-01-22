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
                <h1 class="m-0">Assign Resource</h1>
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
                          <label>Departments</label>
                          <select
                            class="form-custom-select"
                            style="width: 100%"
                            v-model="company_department_id"
                          >
                            <option :value="department.id"  v-for="department in departments" :key="department" >{{department.department_name}}</option>
                          </select>
                          <p class="text-danger mt-1" v-if="errors.company_department_id" >{{ errors.company_department_id[0] }}</p>

                        </div>
                
                         
                  
                        
                      </div>
                      <div class="col-lg-4">
                       
                       <div class="form-group">
                         <label for="exampleInputEmail1"
                           >Employee</label
                         >
                       
                         <select
                            class="form-custom-select"
                            style="width: 100%"
                            v-model="employee"
                          >
                            <option disabled value=""  >Select a Employee</option>
                            <option  >Employee 1</option>
                            <option  >Employee 2</option>
                  
                          </select>

                         <p class="text-danger mt-1" v-if="errors.grade" >{{ errors.grade[0] }}</p>

                       </div>

                     
              
              
                    
                     </div>
                      <div class="col-lg-4">
                       
                  
                      </div>
                    

                      
                    
                 
                    
                   
                    
                 
                   


                  

                  


               

                    </div>


                    <div class="row">
             
             <div class="col-lg-7">
              
                 <div class="form-group">
                   <label for="exampleInputEmail1"
                     > Item
</label
                   >
                   <input
                     type="text"
                     class="form-control"
                     v-model="allowance"
                 
                   
                   />
                 </div>

               
        
        
              
               </div>
          
             <div class="col-lg-2">
           
                 <div class="form-group">
                   <label for="exampleInputEmail1">Quantity</label>
                   <input
                   
                     type="text"
                     class="form-control"
                     placeholder=""
                     v-model="value"
                    
              
                   />
                 </div>
         
             </div>
             
         


             <div  class="col-lg-1 pt-1 ">
          
           
              <button @click="addallowance" type="button" class="btn btn-default btn-sm mt-4  mb-4" >ADD</button>


           
          
   
         
       </div>


           </div>


           <table class="table text-center table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Item</th>
                      <th>Quantity</th>
              
                      
                     
                     
                     
         
                    </tr>
                  </thead>
                  <tbody>
                  
                    <tr v-for="allowance in allowances" :key="allowance" >
                      <td>1.</td>
                      <td>{{allowance.allowance}}</td>
                      <td>
                        {{allowance.value}}
                      </td>
                 
                       
                    
                    
                    </tr>
                
                  
                   
                 
                  
                  </tbody>
                </table>

                    <button type="button" @click.prevent="addpayroll" class="btn-sc mt-4 mb-4" >Submit</button>
                         
  

                    
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

        var allowance={allowance:this.allowance,value:this.value}
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
      