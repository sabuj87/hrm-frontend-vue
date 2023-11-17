<template>
  <div class="auth-container">

<div class="row h-100 ">


  <div class="col-lg-6  h-100 auth-bannar ">
    <!-- <i style="position: fixed;top: 50px;left: 50px;;font-size: 180%;" class="fa-solid fa-arrow-left"></i> -->

   <div class="text-center mt-3"> 

    <!-- <h1 class="primary-color" > Welcome to Human Resource</h1> -->

    <img style="height: 70%;width: 70%;"  class="auth-image box-shadow mt-3 " src="assets/images/resource/hr.jpg">
 


    </div>

    


  </div>
  <div class="col-lg-6  auth-form">
   


    <div class="auth-box">
          <h3 class="primary-color">Login to HRM</h3>

          <form>
       
            
            <label class="m-20 form-lebel">Email</label>
          <input v-model="email" @input="clearError('email')" class="common-form" type="text" />

          <span id="email" class="error" ></span>

          <label class="form-lebel">Password</label>
        
          <input v-model="password" @input="clearError('password')"  class="common-form" type="password" />
          <span id="password" class="error"></span>
          <div class="mt-2">
            <span class="float-left">Remember me</span>
            <span class="float-right">Forgot Password?</span>
          </div>

          <button @click.prevent="login" class="mt-3 btn-100">LOGIN</button>



          </form>

        
          <h6 class="text-center mt-3">
            Don't have a account?<strong
              ><a href="/register" class="primary-color"> SIGNUP</a>
            </strong>
          </h6>
        </div>

  

  </div>


</div>



</div>
 
</template>

<script>

import { Validator } from "@/other/Validator";
import $ from "jquery";
 import axios from "axios";



export default {
  name: "LoginView",
  
  data() {
    return {
    
    }

  },

  methods: {
    login() {
      var validator = new Validator();
      var error = validator.validated([

      { field: "email", value: this.email, type: "required" },

        {
          field: "password",
          value: this.password,
          type: "required|length",
          size: 4,
        },
 
      ]);

      if (error) {
        console.log(error);
      } else {

      //   if(this.email=="superadmin@gmail.com" && this.password=="superadmin"){

      //     this.$router.push({ path: 'superadmin' })
      // .then(() => {
      //   window.location.reload();
      // })
      // .catch(error => {
      //   console.error(error);
      // });


      //   }
      //   if(this.email=="company@gmail.com" && this.password=="company"){
      //     this.$router.push({ path: 'company' })
      // .then(() => {
      //   window.location.reload();
      // })
      // .catch(error => {
      //   console.error(error);
      // });


      //   }

      //   if(this.email=="employee@gmail.com" && this.password=="employee"){
      //     this.$router.push({ path: 'employee' })
      // .then(() => {
      //   window.location.reload();
      // })
      // .catch(error => {
      //   console.error(error);
      // });


      //   }
          
        axios
          .post("login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {

              
              localStorage.setItem("user", JSON.stringify(response.data));
             
             
              if(response.data.user.roles[0]=="superadmin"){
                this.$router.push({ name: "superadmin" }).then(() => {
       window.location.reload();
     })
      .catch(error => {
      console.error(error);
      });


 
              }
              if(response.data.user.roles[0]=="company"){
                this.$router.push({ name: "company" }).then(() => {
       window.location.reload();
     })
      .catch(error => {
      console.error(error);
      });
            

 
              }
              if(response.data.user.roles[0]=="employee"){
                this.$router.push({ name: "employee" }).then(() => {
       window.location.reload();
     })
      .catch(error => {
      console.error(error);
      });
            

 
              }

           

          }).catch((error)=>{
             

            if(error.response.data.errors.password){
              $('#password').css("display","block")
              $('#password').html(error.response.data.errors.password[0])
            }
            if(error.response.data.errors.email){
              $('#email').css("display","block")
              $('#email').html(error.response.data.errors.email[0])
            }


        

          
          })
         

      }
    },

    clearError(field) {
      $("#" + field).css("display", "none");
    },
  },
};
</script>

<style>
</style>