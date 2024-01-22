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
              
              </div>
              <!-- /.col -->
              <div class="col-sm-6">
            
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
               
                  <div  class="card-header pc-bg ">
                    <h3 class="card-title">Job Demand</h3>
                  </div>
  
                  <form>

                    <div class="card-body">


                        <div class="row">
                            <div class="col-lg-3">
                      <div class="form-group">
                        <label>Department</label>
                        <select
                           v-model="department_id"
                           @change="clearError('department_id')"
                          class="form-control "
                          style="width: 100%"
                        >
                          <option disabled value="">Select department</option>
                          <option  v-for="department in departments" :key="department" :value="department.id ">{{department.department_name}}</option>
                         
                        </select>
                        <sapn id="department_id" class="error" ></sapn>

                      </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >Demanded By
                          </label>
                          <input
                          v-model="demanded_by"
                          @input="clearError('demanded_by')"

                            type="text"
                            class="form-control"
                           
                          />
                          <sapn id="demanded_by" class="error" ></sapn>

                        </div>
                      </div>
             
                        
                          <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >New employee designation
                          </label>
                          <input
                          v-model="designation"
                          @input="clearError('designation')"

                            type="text"
                            class="form-control"
                           
                          />
                          <sapn id="designation" class="error" ></sapn>

                        </div>
                      </div>
                          <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >Quantity
                          </label>
                          <input
                          v-model="quantity"
                          @input="clearError('quantity')"


                            type="text"
                            class="form-control"
                           
                          />
                          <sapn id="quantity" class="error" ></sapn>

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
                          v-model="qualification"
                          @input="clearError('qualification')"


                            type="text"
                            class="form-control"
                           
                          />
                          <sapn id="qualification" class="error" ></sapn>

                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                        <label 
                            >Special Qualification
                          </label>
                          <input
                          v-model="special_qualification"
                  


                            type="text"
                            class="form-control"
                           
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                      <div class="form-group">
                        <label>Salary range</label>
                        <select
                        v-model="salary_range"
                        @change="clearError('salary_range')"


                          class="form-control"
                          style="width: 100%"
                        >
                          <option selected="selected">20-25</option>
                          <option selected="selected">25-30</option>
                        </select>
                        <sapn id="salary_range" class="error" ></sapn>

                      </div>
                      
                    </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label 
                            >When to recruite
                          </label>
                          <input
                          v-model="recruitement_date"
                          @input="clearError('recruitement_date')"


                            type="date"
                            class="form-control"
                           
                          />
                          <sapn id="recruitement_date" class="error" ></sapn>

                        </div>
                      </div>
                      <div class="col-lg-9">
                        <div class="form-group">
                          <label 
                            >Job Description
                          </label>
                          <input
                          v-model="job_description"
              


                            type="text"
                            class="form-control"
                           
                          />
                 

                        </div>
                      </div>
                 
                 
                 
                 

                   
                   
                 

                   
                  </div>




                  <button @click.prevent="createjobdemand" type="button" class=" btn-sc  " >Request</button>
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
  import { Validator } from "@/other/Validator";
    import $ from "jquery";
import axios from "axios";
      export default {
        data() {
          return {
            errors: {},
            departments:[],
            department_id: ""
          };
        },
        methods: {
          createjobdemand(){



      
   
      var validator = new Validator();
    var error = validator.validated([

    { field: "department_id", value: this.department_id, type: "required" },
    { field: "demanded_by", value: this.demanded_by, type: "required" },
    { field: "designation", value: this.designation, type: "required" },
    { field: "quantity", value: this.quantity, type: "required" },
    { field: "qualification", value: this.qualification, type: "required" },
    { field: "salary_range", value: this.salary_range, type: "required" },
    { field: "recruitement_date", value: this.recruitement_date, type: "required" },


    ]);

    if (error) {
      console.log(error);
    }else{ 

  
    var job_demand={
        "department_id":this.department_id,
        "demanded_by":this.demanded_by,
        "designation":this.designation,        
        "quantity":this.quantity,        
        "qualification":this.qualification,    
        "special_qualification":this.special_qualification,             
        "salary_range":this.salary_range,             
        "recruitement_date":this.recruitement_date,        
        "job_description":this.job_description,        

    }

    axios
        .post("/employee/jobdemands", 
          job_demand
         
        )
        .then((response) => {

          if(response){
            alert(response.data.message)
           
           
          }



         

        }).catch((error)=>{
           

         this.errors=error.response.data.errors

      

      

        
        })
       







    }


 


    },
    getDepartments(){
     axios.get("employee/departments").then((response)=>{
        this.departments=response.data.data;
     }).catch((error)=>{
         console.log(error);  
     })
    },

    clearError(field) {
      $("#" + field).css("display", "none");
    },

        },
        mounted: function () {
          this.getDepartments();
        }
      };
      </script>
          
      