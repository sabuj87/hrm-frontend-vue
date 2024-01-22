<template>
    <div class="wrapper">
      <!-- Preloader -->
      <!-- <div class="preloader flex-column justify-content-center align-items-center">
        <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
      </div> -->
  
      <!-- Navbar -->
    
  
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
                <div class="card card-primary">
                  <div  class="card-header pc-bg ">
                    <h3 class="card-title text-white">Add price plan</h3>
                  </div>
                 
                  <!-- /.card-header -->
                  <!-- form start -->
  
                  <form ref="addForm"  >
                    <div class="card-body">
                    <div class="row">
             
                      <div class="col-lg-7">
                       
                          <div class="form-group">
                            <label for="exampleInputEmail1"
                              >Plan Name</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="name"
                              @input="errors.name=null"
                            
                            
                            />
                            <p class="text-danger mt-1" v-if="errors.name" >{{ errors.name[0] }}</p>
                          </div>

                        
                 
                 
                       
                        </div>
                   
                      <div class="col-lg-2">
                    
                          <div class="form-group">
                            <label for="exampleInputEmail1">Price</label>
                            <input
                              type="number"
                              min="0"
                              class="form-control"
                              v-model="price"
                              @input="errors.price=null"

                             
                            />
                            <p class="text-danger mt-1" v-if="errors.price" >{{ errors.price[0] }}</p>

                          </div>
                
                         
                  
                        
                      </div>

                      <div class="col-lg-3">
                    
                    <div class="form-group">
                      <label for="exampleInputEmail1">Duration</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="duration"
                        @input="errors.duration=null"

                 
                      />
                      <p class="text-danger mt-1" v-if="errors.duration" >{{ errors.duration[0] }}</p>

                    </div>
          
                   
            
                  
                </div>


                    </div>


                    <div class="row">
             
             <div class="col-lg-9">
              
                 <div class="form-group">
                   <label for="exampleInputEmail1"
                     >Features</label
                   >
                   <input
                     type="text"
                     class="form-control"
                     v-model="feature"
                     id="exampleInputEmail1"
                   
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
                     id="exampleInputEmail1"
              
                   />
                 </div>
          

                 
                
         
               
             </div>


             <div  class="col-lg-1 pt-1 ">
          
           
              <button @click="addFeature" type="button" class="btn-sc-outline-sm mt-4  mb-4" >ADD</button>


           
          
   
         
       </div>

       
       <div class="col-lg-3">
                       
                       <div class="form-group">
                         <label for="exampleInputEmail1"
                           >Modules </label
                         >

                     
                       
                         <select
                           class="custom-select" multiple  data-live-search="true"
                            style="width: 100%"
                            v-model="selectedModulesID"
                        
                          >
                            <option disabled value=""  >Select a module</option>
                            <option v-for="module in modules"  :value=" module.id " :key="module" >{{ module.module_name }}</option>
                          
                          </select>

                         <p class="text-danger mt-1" v-if="errors.grade" >{{ errors.grade[0] }}</p>

                       </div>

                     
              
              
                    
                     </div>


           </div>




           <table class="table text-center table-striped table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Feature Name</th>
                      <th>Value</th>
                     
                     
                     
         
                    </tr>
                  </thead>
                  <tbody>
                  
                    <tr v-for="feature in features" :key="feature" >
                      <td>1.</td>
                      <td>{{feature.feature}}</td>
                      <td>
                        {{feature.value}}
                      </td>
                    
                       
                    
                    
                    </tr>
                
                  
                   
                 
                  
                  </tbody>
                </table>

                    <button type="button" @click.prevent="addPrice"  class="btn-sc  mt-4 mb-4" >Submit</button>
                         
  

                    
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
 //import $ from "jquery";
 import axios from "axios";

  export default {
   

    data() {
      return {
    
        features:[],
        errors:{},
        modules:[],
        selectedModulesID:[],
        
   
      };
    },
  
    methods: {
      // Creating Feature list
      addFeature(){

        var feature={feature:this.feature,value:this.value}
        this.features.push(feature);



      },

      //Adding price to database

      addPrice(){


        axios
          .post("/superadmin/prices", {
            "name": this.name,
            "price": this.price,
            "duration": this.duration,
            // features: JSON.stringify(Object.assign({}, this.features))
            "features": JSON.stringify(this.features),
            "modules": this.selectedModulesID
          })
          .then((response) => {

            if(response){
              this.$refs.addForm.reset();
              this.$emit("get_message", response.data.message);
     
             
            }



           

          }).catch((error)=>{
             

           this.errors=error.response.data.errors

        

        

          
          })
         

      



      },
      getModule() {
        axios
          .get("/superadmin/company_modules")
          .then((response) => {
            if (response) {
              
              this.modules = response.data.data;
 
            }
          })
          .catch((error) => {
            console.log(error);
            
          });
      },



     
      
    },
  
    mounted: function () {
      this.getModule();



    },
  };
  </script>
      