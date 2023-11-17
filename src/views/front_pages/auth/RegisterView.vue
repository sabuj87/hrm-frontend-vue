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
          <h3 class="primary-color mt-3">Register in hrm !</h3>

          <form>

            <div class=" m-20 row">

              <div class="col-lg-6">
                        <div class="form-group">
                          <label 
                            >Company Name*
                          </label>
                          <input v-model="company_name" @input="clearError('company_name')" class="common-form" type="text" />
                          <span id="company_name" class="error" ></span>
                        </div>
                      </div>
                      
              <div class="col-lg-6">
                        <div class="form-group">
                          <label 
                            >Country*
                          </label>
                          <select v-model="country_id" @change="clearError('country_id')" class="common-select" >
                            <option disabled value=null >Select country</option>
                            <option :value="country.id" v-for="country in countries" :key="country" >{{country.country_name}}</option>
                        


                          </select>
                           <span id="country_id" class="error" ></span>
                        </div>
                      </div>


                      <div class="col-lg-12">
                        <div class="form-group">
                          <label 
                            >Full Name*
                          </label>
                          <input v-model="name" @input="clearError('name')" class="common-form" type="text" />
                          <span id="name" class="error" ></span>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label 
                            >Email*
                          </label>
                          <input v-model="email" @input="clearError('email')" class="common-form" type="text" />
                          <span id="email" class="error" ></span>
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="form-group">
                          <label 
                            >Password*
                          </label>
                          <input v-model="password" @input="clearError('password')" class="common-form" type="text" />
                          <span id="password" class="error" ></span>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label 
                            >Comfirm password*
                          </label>
                          <input v-model="confirm_password" @input="clearError('confirm_password')" class="common-form" type="text" />
                          <span id="confirm_password" class="error" ></span>
                        </div>
                      </div>




           
            


            </div>
     
          


          
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

      countries:[],
      country_id:null
    
    }

  },

  methods: {
    register() {

      var validator = new Validator();
      var error = validator.validated([

      { field: "company_name", value: this.company_name, type: "required" },
      { field: "country_id", value: this.country_id, type: "required" },
      { field: "name", value: this.name, type: "required" },
      { field: "email", value: this.email, type: "required|email"},
      {
          field: "password",
          value: this.password,
          type: "required|length",
          size: 8,
      },
      {
          field: "confirm_password",
          value: this.confirm_password,
          type: "required|length",
          size: 8,
      },
 
 
    

       
 
      ]);

      if (error) {
        console.log(error);
      } else {
          
        axios
          .post("register", {
            name: this.name,
            company_name: this.company_name,
            country_id: this.country_id,
            email: this.email,
            password: this.password,
            confirm_password: this.confirm_password,
          })
          .then((response) => {


              console.log(response.data);
              this.$router.push({ name: "login" });


          }).catch((error)=>{
             

           
            if(error.response.data.errors.password){
              $('#password').css("display","block")
              $('#password').html(error.response.data.errors.password[0])
            }

            if(error.response.data.errors.confirm_password){
              $('#confirm_password').css("display","block")
              $('#confirm_password').html(error.response.data.errors.confirm_password[0])
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

    getCountry(){


      axios.get("public/countries").then((response) => {

  
      this.countries=response.data.data;


}).catch((error)=>{
  console.log(error.response)
})
    },

    clearError(field) {
      $("#" + field).css("display", "none");
    },
  },
  mounted:function(){
    this.getCountry()
  }
};
</script>

<style>
</style>