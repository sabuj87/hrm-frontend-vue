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
                    <h3 class="card-title text-white">Job Application</h3>
                  </div>
              <!-- /.card-header -->
              <div class="card-body">

                <div class="row">
                  <div class="col-md-6">
                       
                <span><strong>Applicant Name :</strong>
                  <div class="custom-card text-center mt-3">
                    {{ job_application.applicant_name }}
                  
                  </div>
                  
                 </span> 
                 
                    
                  </div>
                  <div class="col-md-6">
                       
                <span><strong>Job title :</strong>
                  <div class="custom-card text-center mt-3">
                    {{designation}}
                  
                  
                  </div>
                  
                 </span> 
                 
                    
                  </div>
                  <div class="col-md-12">
                       
                <span><strong>Cover letter :</strong>
                  <div class="custom-card  mt-3">
                    {{ job_application.cover_letter }}
                  
                  </div>
                  
                 </span> 
                 
                    
                  </div>
                  <div class="col-md-12">
                       
                       <span><strong>Documents :</strong>
                         <div class="custom-card  mt-3">
                           <div class="d-inline" style="width: 100px;" v-for="file in files" :key="file">
                            <span style="width:100px" >
                                <img style="width: 100px;" src="/assets/images/resource/pdf.png" alt="" />
                          
                               
                            
                            </span>

                        
                         
                        
                        
                        </div>
                         
                         </div>
                         
                        </span> 
                        
                           
                         </div>
              
                 




                </div>
      
            <div class="mt-3">
                              
              <button @click.prevent="approve" type="button" class="btn-sc  " >Cancle</button>


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
// import $ from "jquery";
import axios from "axios";
export default {
  data() {
    return {
      errors: {},
      job_application:{},
      uuid:"",
      designation:"",
      files:[],

    };
  },
  methods: {
    getjobapplication(uuid) {
      axios
        .get("/company/job_appliocations/"+uuid)
        .then((response) => {
          if (response) {
            this.job_application = response.data.data;
            this.designation = response.data.data.published_job.job.designation
            this.files = response.data.data.files
          
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
  },
  mounted:function(){
    this.uuid=this.$route.query.uuid;
    this.getjobapplication(this.uuid)

  }
};
</script>