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
                <h1 class="m-0">Create Payrolls</h1>
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
                           >Designation name </label
                         >
                         <input
                           type="email"
                           class="form-control"
                           v-model="designation_name"
                         
                         />
                         <p class="text-danger mt-1" v-if="errors.designation_name" >{{ errors.designation_name[0] }}</p>

                       </div>

                     
              
              
                    
                     </div>
                   
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
                           >Basic  </label
                         >
                         <input
                           type="email"
                           class="form-control"
                            v-model="basic"
                         
                         />
                         <p class="text-danger mt-1" v-if="errors.basic" >{{ errors.basic[0] }}</p>

                       </div>
                     </div>
                      <div class="col-lg-4">
                       
                       <div class="form-group">
                         <label for="exampleInputEmail1"
                           >Increment </label
                         >
                         <input
                           type="email"
                           class="form-control"
                           v-model="increment"
                         
                         />
                         <p class="text-danger mt-1" v-if="errors.increment" >{{ errors.increment[0] }}</p>

                       </div>
                     </div>
                      <div class="col-lg-4">
                       
                       <div class="form-group">
                         <label for="exampleInputEmail1"
                           >Date </label
                         >
                         <input
                           type="email"
                           class="form-control"
                           v-model="date"
                         
                         />
                       </div>
                     </div>

                   
                    
                 
                   


                  

                  


               

                    </div>


                    <div class="row">
             
             <div class="col-lg-7">
              
                 <div class="form-group">
                   <label for="exampleInputEmail1"
                     > Allowances
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
                   <label for="exampleInputEmail1">Value</label>
                   <input
                     type="text"
                     class="form-control"
                     v-model="value"
                    
              
                   />
                 </div>
         
             </div>
             
             <div class="col-lg-2">
           
           <div class="form-group">
             <label >Type</label>
         
                          <select
                            v-model="type"
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Adding</option>
                            <option selected="selected">deduction</option>
                          </select>
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
                      <th>Allowance</th>
                      <th>Value</th>
                      <th>Type</th>
                      
                     
                     
                     
         
                    </tr>
                  </thead>
                  <tbody>
                  
                    <tr v-for="allowance in allowances" :key="allowance" >
                      <td>1.</td>
                      <td>{{allowance.allowance}}</td>
                      <td>
                        {{allowance.value}}
                      </td>
                      <td>
                        {{allowance.type}}
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
            designation_name: this.designation_name,
            company_department_id: this.company_department_id,
            basic: this.basic,
            increment: this.increment,
            date: this.date,
            // features: JSON.stringify(Object.assign({}, this.features))
            allowances: JSON.stringify(this.allowances)
          })
          .then((response) => {

            if(response){
              alert(response.data.message)
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
      