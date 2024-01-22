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
                    <h3 class="card-title">Leave Application</h3>
                  </div>
             
                  <!-- /.card-header -->
                  <!-- form start -->
  
                  <form>

                    <div class="card-body">
                      <div class="row" >
                        <div class="col-lg-3">
                      <div class="form-group">
                        <label>Leave Type</label>
                        <select
                          v-model="leave_type"
                          class="form-control "
                          style="width: 100%"
                        >  
                        <option disabled value="" >Select leave type</option>
                          <option value="medical" selected="selected">Medical</option>
                          <option value="casual" >Casual</option>
                        </select>
                      </div>
                    </div>


                      </div>
                        
                        <div class="row">
                        
                        
                        <div class="col-lg-3 border ms-2   p-2">

                            <span style="font-size: 120%;" ><strong class="sc" >Total Leave days :</strong> 22 </span>
                    
                    </div>
                   
 
                   
                        <div class="col-lg-3 border p-2">

                            <span style="font-size: 120%;" ><strong class="sc" >Medical Leave :</strong> 2</span>
                    
                    </div>
                   
                        <div class="col-lg-3 border p-2">

                            <span style="font-size: 120%;" ><strong class="sc"> Remaining :</strong> 20</span>
                    
                    </div>
                   
                   
               
               
               
               
                

                 
                 
               

                 
                </div>

                <hr>
         
                <h5 class="mt-3" >Apply for leave</h5>
             
                        <div class="row  mt-3 ">
                            
                        
                           
                    
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>From</label>
                        <input
                           v-model="from"
                            type="date"
                            class="form-control"
                           
                          />
                       
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>To</label>
                        <input
                         v-model="to"
                            type="date"
                            class="form-control"
                           
                          />
                       
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Approval Authority</label>
                        <select
                         v-model="authority"
                          class="form-control "
                          style="width: 100%"
                        > 
                        <option disabled value="" >Select Authority</option>

                          <option selected="selected">Authority 1</option>
                        </select>
                      </div>
                    </div>
             

             

                      <div class="col-lg-12">
                        <div class="form-group">
                          <label 
                            >Reason
                          </label>
                          <textarea class="form-control"  v-model="reason">
                          
                          </textarea>
                       
                        </div>
                      </div>
                   
                 
                 
                 
                 
                
                   
                   
                 

                   
                  </div>




                  <button @click="leaveApply" type="button" class="btn-sc" >Apply</button>
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
                department_id: "",
                leave_type:"",
                authority:"",
              };
            },
            methods: {
              leaveApply(){
    
    
    
          
       
          var validator = new Validator();
        var error = validator.validated([
    
        { field: "leave_type", value: this.leave_type, type: "required" },
        { field: "from", value: this.from, type: "required" },
        { field: "to", value: this.to, type: "required" },
        { field: "reason", value: this.reason, type: "required" },

    
        ]);
    
        if (error) {
          console.log(error);
        }else{ 
    
      
        var leave={
            "leave_type":this.leave_type,
            "from":this.from,
            "to":this.to,        
            "authority":this.authority,        
   
        }
    
        axios
            .post("/employee/leaves", 
            leave
             
            )
            .then((response) => {
    
              if(response){
                this.$emit("get_message", response.data.message);
               
               
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