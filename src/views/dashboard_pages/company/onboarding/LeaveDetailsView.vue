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
                    <h3 class="card-title text-white">Leave Details</h3>
                  </div>
              <!-- /.card-header -->
              <div class="card-body">

                <div class="row">
                  <div class="col-md-4">
                       
                <span><strong>Employee Name</strong>
                  <div class="custom-card text-center mt-3">
                Abu Saeed
                  
                  </div>
                  
                 </span> 
                 
                    
                  </div>
                  <div class="col-md-4">
                       
                <span><strong>Leave Type</strong>
                  <div class="custom-card text-center mt-3">
                    {{ leave.leave_type}}
                  
                  </div>
                  
                 </span> 
                 
                    
                  </div>
                  <div class="col-md-4">
                       
                <span><strong>From </strong>
                  <div class="custom-card text-center mt-3">
                    {{ leave.from}}
                  
                  </div>
                  
                 </span> 
                 
                    
                  </div>
                  <div class="col-md-4 mt-2">
                       
                <span ><strong>To </strong>
                  <div class="custom-card text-center mt-3">
                    {{ leave.to}}
                  
                  </div>
                  
                 </span> 
                 
                    
                  </div>
                 
                 

                       

                         <div class="col-md-12 mt-2">
                       
                       <span><strong>Reason</strong>
                         <div class="custom-card  mt-3">
                            {{ leave.reason}}
                         
                         </div>
                         
                        </span> 
                        
                           
                         </div>


                </div>
      
            <div class="mt-3">
                              
              <button @click.prevent="approve" type="button" class="btn-sc  " >Approve</button>
                <button @click.prevent="reject"  type="button" class="btn-pc ml-2 " >Reject</button>


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
//import moment from "moment";
export default {
  data() {
    return {
      errors: {},
      job_demand:"",
      uuid:"",
      department:"",
      leave:{},
      employee:{},
      basic_information:"",
    };
  },
  methods: {
    getLeaveDetails(id) {
      axios
        .get("/company/leaves/"+id)
        .then((response) => {
          if (response) {
            this.leave = response.data.data;
            this.employee = response.data.data.employee;
            this.basic_information=response.data.data.employee.basic_information;
        
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    approve() {
         this.$emit("get_message", "Approved");

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
    this.id=this.$route.query.id;
    this.getLeaveDetails(this.id)

  }
};
</script>