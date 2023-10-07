<template>
  <div class="auth-container">

<div class="row h-100 ">


  <div class="col-lg-7  h-100 auth-bannar ">
    <!-- <i style="position: fixed;top: 50px;left: 50px;;font-size: 180%;" class="fa-solid fa-arrow-left"></i> -->

   <div class="text-center mt-3"> 

    <!-- <h1 class="primary-color" > Welcome to Human Resource</h1> -->

    <img style="height: 70%;width: 70%;"  class="auth-image box-shadow mt-3 " src="assets/images/resource/hr.jpg">
 


    </div>

    


  </div>
  <div class="col-lg-5  auth-form">
   


    <div class="auth-box">
          <h3 class="primary-color">Fill information</h3>

          <form>

            <div class=" m-20 row">

              <div class="col-lg-6">
                <label class=" form-lebel">First name</label>
          <input v-model="first" @input="clearError('first')" class="common-form" type="text" />

          <span id="first" class="error" ></span>


              </div>
              <div class="col-lg-6">
                <label class=" form-lebel">Last name</label>
          <input v-model="last_name" @input="clearError('last_name')" class="common-form" type="text" />

          <span id="last_name" class="error" ></span>


                
              </div>


            </div>
            <label class="mt-2 form-lebel">Company name</label>
          <input v-model="email" @input="clearError('email')" class="common-form" type="text" />

            
            <label class="mt-2 form-lebel">Email</label>
          <input v-model="email" @input="clearError('email')" class="common-form" type="text" />

          <span id="email" class="error" ></span>

          <label class="form-lebel">Password</label>
        
          <input v-model="password" @input="clearError('password')"  class="common-form" type="password" />
          <span id="password" class="error"></span>

          
    
          <label class="form-lebel">Confirm password</label>
        
        <input   class="common-form" type="text" />
  
          
          <!-- <div class="mt-2">
            <span class="float-left">Remember me</span>
            <span class="float-right">Forgot Password?</span>
          </div> -->

          <button @click.prevent="register" class="mt-3 btn-100">Register</button>



          </form>

        
          <h6 class="text-center mt-3">
            Don't have a account?<strong
              ><a href="/register" class="primary-color"> LOGIN</a>
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
  name: "RegisterView",
  
  data() {
    return {
    
    }

  },

  methods: {
    register() {

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
          
        axios
          .post("register", {
            name: this.first+" "+this.last_name,
            email: this.email,
            password: this.password,
          })
          .then((response) => {


              console.log(response.data);
              this.$router.push({ name: "login" });


          }).catch((error)=>{
             

            if(error.response.data.errors.password){
              $('#password').css("display","block")
              $('#password').html(error.response.data.errors.password[0])
            }
            if(error.response.data.errors.email){
              $('#email').css("display","block")
              $('#email').html(error.response.data.errors.email[0])
            }
            if(error.response.data.errors.name){
              $('#first').css("display","block")
              $('#first').html(error.response.data.errors.name[0])
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