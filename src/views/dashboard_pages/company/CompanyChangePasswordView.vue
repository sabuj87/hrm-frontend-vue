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
                    <h3 class="card-title text-white">Change Password</h3>
                  </div>
              <!-- /.card-header -->
              <div class="card-body">

                <div class="row">
                    <div class="col-lg-7">
                       
                       <div class="form-group">
                         <label for="exampleInputEmail1"
                           >Old password</label
                         >
                         <input
                           type="text"
                           class="form-control"
                           v-model="oldpassword"
                           @input="errors.oldpassword=null"
                         
                         
                         
                         />

                         <p class="text-danger mt-1" v-if="errors.oldpassword" >{{ errors.oldpassword[0] }}</p>

                       
                       </div>

                     
              
              
                    
                     </div>
                     <div></div>
                     <div class="col-lg-7">
                       
                       <div class="form-group">
                         <label for="exampleInputEmail1"
                           >New Password</label
                         >
                         <input
                           type="text"
                           class="form-control"
                           v-model="newpassword"
                           @input="errors.newpassword=null"

                         
                         />
                         <p class="text-danger mt-1" v-if="errors.newpassword" >{{ errors.newpassword[0] }}</p>

                       
                       </div>

                     
              
              
                    
                     </div>
                 
                </div>
      
            <div class="mt-3">
                              
              <button @click.prevent="changepassword" type="button" class="btn-sc  " >Confirm</button>


            </div>
              
                <div class="bs-stepper"></div>
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

    </div>
  </template>
      
      <script>
     // import $ from "jquery";
     import axios from "axios";
     export default {
       data() {
         return {
           errors: {},
           message:""
      
         };
       },
       methods: {
       
         changepassword() {
           axios
             .post("/company/changepassword", {
               oldpassword: this.oldpassword,
               newpassword: this.newpassword,
              
             })
             .then((response) => {
               if (response) {
        
     
                this.oldpassword="";
                this.newpassword="";

                this.$emit("get_message", response.data.message);

                
                  
               }
             })
             .catch((error) => {
               this.errors = error.response.data.errors;
               this.message = error.response.data.message;
             });
         },
     
       
    
       
       },
       mounted: function () {
   
       },
     };
     </script>
      