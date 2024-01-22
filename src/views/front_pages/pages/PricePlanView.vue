<template>

    <div class="container " >
      <div class="text-center p-2">
      <button class="btn btn-light text-primary btn-sm" >Pricing</button>
      <h3>Choose your suitable pricing</h3>
      <p>Our service design to cater to specific needs</p>


      </div>
       <div class="row ">

        <div v-for="price in prices" :key="price" class="col-md-4">

          <div class="p-3" style="background-color: aliceblue;">
            <h5 class="" >{{ price.name }}</h5>
            <h2>{{ price.price }}</h2>
            <p>{{ price.duration }}</p>
            <p>Completely free for 30 days,all Features are free so you can work out if it's for you</p>
            <div v-for="feature in JSON.parse(price.features)" :key="feature" ><i class="fa-solid fa-circle-check text-primary"></i> &nbsp; &nbsp;  {{feature.value}} {{feature.feature}}</div>
            <!-- <div  ><i class="fa-solid fa-circle-check text-primary"></i> &nbsp; &nbsp; 2 theme</div>
            <div ><i class="fa-solid fa-circle-check text-primary"></i> &nbsp; &nbsp; No Support</div> -->
            <button @click="gotosignup(price.id)" class="w-100 mt-4 btn btn-dark  " >Get started</button>
            <button class="w-100  mt-3 btn btn-outline-dark  " >See all features</button>




          </div>
 

        </div>
     



       </div>



    </div>
    
  </template>
  
  <script>
  import $ from "jquery";
 import axios from "axios";
 export default {
   data() {
     return {
       errors: {},
       prices: [],
       department: {},
       features: [],
     };
   },
   methods: {
     getprice() {
       axios
         .get("/public/prices")
         .then((response) => {
           if (response) {
             
             this.prices = response.data.data;
 
            
           }
         })
         .catch((error) => {
           console.log(error);
           
         });
     },
     adddepartment() {
       axios
         .post("/company/departments", {
           department_name: this.department_name,
           code: this.department_code,
         })
         .then((response) => {
           if (response) {
    
        
 
          
              
            this.$refs.addForm.reset();
 
            this.department_name="";
            this.department_code="";
               this.getdepartment();
               $("#addModal .close").click()
           }
         })
         .catch((error) => {
           this.errors = error.response.data.errors;
         });
     },
 
     editdepartment(uuid) {
       axios
         .get("/company/departments/"+uuid)
         .then((response) => {
           if (response) {
             
             this.department = response.data.data;
 
            
        
           }
         })
         .catch((error) => {
           console.log(error);
           
         });
     },
     updatedepartment(uuid) {
      
       axios
         .put("/company/departments/"+uuid,{
           department_name: this.department.department_name,
           code: this.department.code,
         })
         .then((response) => {
           if (response) {
             
          
             this.getdepartment()
          
             $("#editModal .close").click()
        
           }
         })
         .catch((error) => {
           console.log(error);
           
         });
     },
     deletedepartment(uuid) {
      
      axios
        .delete("/company/departments/"+uuid)
        .then((response) => {
          if (response) {
            
         
            this.getdepartment()
         
       
          }
        })
        .catch((error) => {
          console.log(error);
          
        });
    },
    gotosignup(id){
        if(id){
          this.$router.push({ name: "register", query: { id: id } });

        }
   },
  },
   mounted: function () {
     this.getprice();
   },
 };
 </script>
  
  