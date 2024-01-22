<template>
    <div class="wrapper">
      <!-- Preloader -->
      <!-- <div class="preloader flex-column justify-content-center align-items-center">
        <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
      </div> -->
  
      <!-- Navbar -->
      <navbar-view></navbar-view>
      <!-- /.navbar -->
  
      <!-- Main Sidebar Container -->
      <sidebar-view></sidebar-view>
  
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
            <div class="card">
              <div  class="card-header pc-bg ">
                    <h3 class="card-title text-white">Publish job</h3>
                  </div>
              <!-- /.card-header -->
              <div class="card-body">

                <div class="row">
                  <div class="col-md-4">
                       
                <span><strong>Department :</strong>
                  <div class="custom-card text-center mt-3">
                    {{ department.department_name }}
                  
                  </div>
                  
                 </span> 
                 
                    
                  </div>
                  <div class="col-md-4">
                       
                <span><strong>Job title :</strong>
                  <div class="custom-card text-center mt-3">
                    {{ job_demand.designation }}
                  
                  </div>
                  
                 </span> 
                 
                    
                  </div>
                  <div class="col-md-4">
                       
                <span><strong>Recruitment date :</strong>
                  <div class="custom-card text-center mt-3">
                    {{ job_demand.recruitement_date }}
                  
                  </div>
                  
                 </span> 
                 
                    
                  </div>
                  <div class="col-md-4 mt-2">
                       
                <span ><strong>Qualification :</strong>
                  <div class="custom-card text-center mt-3">
                    {{ job_demand.qualification }}
                  
                  </div>
                  
                 </span> 
                 
                    
                  </div>
                  <div class="col-md-4 mt-2">
                       
                <span><strong>Special Qualification :</strong>
                  <div class="custom-card text-center mt-3">
                    {{ job_demand.special_qualification }}
                  
                  </div>
                  
                 </span> 
                 
                    
                  </div>
                  <div class="col-md-4 mt-2">
                       
                       <span><strong>Salary Range :</strong>
                         <div class="custom-card text-center mt-3">
                           {{ job_demand.salary_range }}
                         
                         </div>
                         
                        </span> 
                        
                           
                         </div>

                         <div class="col-md-4 mt-2">
                       
                       <span><strong>Quantity :</strong>
                         <div class="custom-card text-center mt-3">
                           {{ job_demand.quantity }}
                         
                         </div>
                         
                        </span> 
                        
                           
                         </div>

                         <div class="col-md-12 mt-2">
                       
                       <span><strong>Job Description :</strong>
                         <div class="custom-card  mt-3">
                           {{ job_demand.job_description }}
                         
                         </div>
                         
                        </span> 
                        
                           
                         </div>


                </div>

                <span class="mt-4"><strong>Publish Job</strong></span>

                <div class="row">
                            <div class="col-lg-4">
                                <div class="form-group">
                        <label>Media*</label>
                        <select
                           v-model="media"
                           @change="clearError('media')"
                          class="form-control "
                          style="width: 100%"
                        >
                          <option disabled value="">Select Media</option>
                          <option  value="newsportal">Newspaper</option>
                          <option  value="jobportal">Job portal</option>
                         
                        </select>
                        <sapn id="media" class="error" ></sapn>

                      </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label 
                            >Start Date
                          </label>
                          <input
                          v-model="start_date"
                          @input="clearError('start_date')"

                            type="date"
                            class="form-control"
                           
                          />
                          <sapn id="start_date" class="error" ></sapn>

                        </div>
                      </div>

                      <div class="col-lg-4">
                        <div class="form-group">
                          <label 
                            >End Date
                          </label>
                          <input
                          v-model="end_date"
                          @input="clearError('end_date')"

                            type="date"
                            class="form-control"
                           
                          />
                          <sapn id="end_date" class="error" ></sapn>

                        </div>
                      </div>
                      </div>
      
            <div class="mt-3">
                              
              <button @click.prevent="publish" type="button" class="btn-sc  " >Publish</button>


            </div>

              </div>
              <!-- /.card-body -->
           
            </div>
            <!-- /.card -->

       
            <!-- /.card -->
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
import { Validator } from "@/other/Validator";
 import $ from "jquery";
import axios from "axios";
export default {
  data() {
    return {
      errors: {},
      job_demand:"",
      uuid:"",
      department:"",
      media:""
    };
  },
  methods: {
    getjobdemand(uuid) {
      axios
        .get("/company/jobdemands/"+uuid)
        .then((response) => {
          if (response) {
            this.job_demand = response.data.data;
            this.department = response.data.data.department
          
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    approve() {
      axios
        .put("/company/jobdemands/approval/"+this.uuid,{status:1})
        .then((response) => {
          if (response) {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    publish() {

        var validator = new Validator();
      var error = validator.validated([
        {
          field: "media",
          value: this.media,
          type: "required",
        },
        {
          field: "start_date",
          value: this.start_date,
          type: "required",
        },
        {
          field: "end_date",
          value: this.end_date,
          type: "required",
        },
      ]);
      if(error){

        console.log(error);
      }else{
       var  publish_job={
         employee_job_demand_id:this.job_demand.id,
          media:this.media,
          start_date:this.start_date,
          end_date:this.end_date,
          status:1
        }

        axios

        .post("/company/publushed_jobs",publish_job)
        .then((response) => {
          if (response) {
            alert(response.data.message);
            this.published();
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
        
      }
    
    },
    reject() {
      axios
        .put("/company/jobdemands/approval/"+this.uuid,{status:0})
        .then((response) => {
          if (response) {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },

    published() {
      axios
        .put("/company/jobdemands/approval/"+this.uuid,{status:3})
        .then((response) => {
          if (response) {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    clearError(field) {
      $("#" + field).css("display", "none");
    },
  },
  mounted:function(){
    this.uuid=this.$route.query.uuid;
    this.getjobdemand(this.uuid)

  }
};
</script>