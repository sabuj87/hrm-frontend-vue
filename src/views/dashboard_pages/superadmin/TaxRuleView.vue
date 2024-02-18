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
                  <div class="card-header pc-bg">
                    <h3 class="card-title d-inline float-left text-white">
                      Tax Rule
                    </h3>
                    <!-- <router-link  class=" float-right"  :to="{ name: 'administrative-adddepartments' }">
  
  <span class="btn-sc-sm" >Add</span>
  </router-link> -->
  
                    <a
                      class="btn-sc-sm float-right"
                      data-toggle="modal"
                      data-target="#addModal"
                      >Set New Tax Rule</a
                    >
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table class="table text-center table-striped table-bordered">
                      <thead>
                        <tr>
                          <th style="width: 10px"> ID</th>
  
                          <th>Country</th>
                          <th>State</th>
                          <th>Type</th>

                         
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="taxrule in taxrules" :key="taxrule">
                          <td>#</td>
                          <td>{{ taxrule.country.country_name }}</td>
                          <td>{{ taxrule.state}}</td>
                          <td>{{ taxrule.type}}</td>
  
                          <td>
                            <a @click.prevent="editdepartment(taxrule.uuid)"   
                      data-toggle="modal"
                      data-target="#editModal" 
                              ><i class="fa-solid fa-pen-to-square"></i></a
                            >
  
                            <a  @click.prevent="deletedepartment(taxrule.uuid)" class="-sm ml-2"
                              ><i class="fa-solid fa-trash text-red"></i></a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- /.card-body -->
                  <div class="card-footer clearfix">
                    <ul class="pagination pagination-sm m-0 float-right">
                      <li class="page-item">
                        <a class="page-link" href="#">&laquo;</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">&raquo;</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- /.card -->
  
                <!-- /.card -->
              </div>
            </div>
          </div>
        </section>
        <!-- /.content -->
      </div>
  
      <div
        class="modal fade"
        id="addModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" >Add new Tax Rule</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
          
  
                <form ref="addForm" >
                  <div class="row">
                    <div class="col-lg-4">
           
                    <div class="form-group">
             <label >Country</label>
         
                          <select
                            v-model="country_id"
                            class="form-control "
                            style="width: 100%"
                            @change="errors.country_id=null"
                          >
                            <option disabled value=null>Select a country</option>
                            <option v-for="country in countries" :key="country" :value="country.id">{{country.country_name}}</option>

                          </select>
                          <p class="text-danger mt-1" v-if="errors.country_id" >{{ errors.country_id[0] }}</p>


           </div>
   
       </div>
    

       <div class="col-lg-4">
              
  
  
            
              <div class="form-group">
                <label>State</label>
                <input type="text"   @input="errors.state=null"  v-model="state" class="form-control" />
                <p class="text-danger mt-1" v-if="errors.state" >{{ errors.state[0] }}</p>

             
              </div>
            </div>

            <div class="col-lg-4">
              
  
  
            
              <div class="form-group">
                <label>Type</label>
                <input type="text"   @input="errors.state=null"  v-model="type" class="form-control" />
                <p class="text-danger mt-1" v-if="errors.state" >{{ errors.state[0] }}</p>

             
              </div>
            </div>



              
          </div>

          <label style="font-size: medium;" >Tax Cap</label>


          <div style="height: 2px;background-color: rgb(216, 216, 216);"></div>

          <div class="row mt-2">

            
            <div class="col-lg-3">
              
  
  
            
              <div class="form-group">
                <label>Tax low Cap</label>
                <input type="text"   @input="errors.tax_low_cap=null"  v-model="tax_low_cap" class="form-control" />
                <p class="text-danger mt-1" v-if="errors.tax_low_cap" >{{ errors.tax_low_cap[0] }}</p>

             
              </div>
            </div>


            
            <div class="col-lg-3">
              
  
  
            
              <div class="form-group">
                <label>Tax high Cap</label>
                <input type="text"   @input="errors.tax_high_cap=null"  v-model="tax_high_cap" class="form-control" />
                <p class="text-danger mt-1" v-if="errors.tax_high_cap" >{{ errors.tax_high_cap[0] }}</p>

             
              </div>
            </div>

            
            <div class="col-lg-3">
              
  
  
            
              <div class="form-group">
                <label>Tax Cap Difference</label>
                <input type="text"   @input="errors.tax_cap_difference=null"  v-model="tax_cap_difference" class="form-control" />
                <p class="text-danger mt-1" v-if="errors.tax_cap_difference" >{{ errors.tax_cap_difference[0] }}</p>

             
              </div>
            </div>



            <div class="col-lg-3">
              
  
  
            
              <div class="form-group">
                <label>Age</label>
                <input type="text"   @input="errors.age=null"  v-model="age" class="form-control" />
                <p class="text-danger mt-1" v-if="errors.age" >{{ errors.age[0] }}</p>

             
              </div>
            </div>


             
              <div class="col-lg-3">
                  <div class="form-group">
                    <label>Tax % </label>
                    <input type="text"  @input="errors.p_tax=null" v-model="p_tax" class="form-control" />
                    <p class="text-danger mt-1" v-if="errors.p_tax" >{{ errors.p_tax[0] }}</p>
  
                  </div>
                </div>

                <div class="col-lg-9">
                  <div class="form-group">
                    <label>Remark</label>
                    <input type="text"  @input="errors.remark=null" v-model="remark" class="form-control" />
                    <p class="text-danger mt-1" v-if="errors.remark" >{{ errors.remark[0] }}</p>
  
                  </div>
                </div>

                <div class="col-lg-2">
                  <button  @click.prevent="adddetail" type="button" class="btn-sc-sm">Add</button>

                </div>




          </div>


          <table class="table text-center table-striped table-bordered mt-2">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Low tax cap</th>
                      <th>High tax cap</th>
                      <th>Tax Cap Difference</th>
                      <th>Age</th>
                      <th>Tax%</th>
                      <th>Remarks</th>
                     
                     
                     
         
                    </tr>
                  </thead>
                  <tbody>
                  
                    <tr v-for="cap_detail in cap_details" :key="cap_detail" >
                      <td>1.</td>
                      <td>{{cap_detail.tax_low_cap}}</td>
                      <td>
                        {{cap_detail.tax_high_cap}}
                      </td>
                      <td>
                        {{cap_detail.tax_cap_difference}}
                      </td>
                   
                      <td>
                        {{cap_detail.age}}
                      </td>
                      <td>
                        {{cap_detail.p_tax}}
                      </td>
                    
                      <td>
                        {{cap_detail.remark}}
                      </td>
                    
                       
                    
                    
                    </tr>
                
                  
                   
                 
                  
                  </tbody>
                </table>



                    
  
      

        

        
              
            
              </form>
             
              
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn-pc-sm"
                data-dismiss="modal"
              >
                Cancle
              </button>
              <button  @click.prevent="createtax" type="button" class="btn-sc-sm">Create</button>
  
           
            </div>
  
         
          </div>
       
        </div>
     
      </div>
      <div
        class="modal fade"
        id="editModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="editModal"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" >Edit Position</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
          
  
                <form ref="addForm" >
                  <div class="row">
             
                  
      
              </div>
              </form>
             
              
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn-pc-sm"
                data-dismiss="modal"
              >
                Cancle
              </button>
              <button  @click.prevent="updatedepartment(department.uuid)" type="button" class="btn-sc-sm">Update</button>
  
           
            </div>
  
         
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
        countries:[],
        taxrules:[],
        cap_details:[],
        country_id:null

       
      };
    },
    methods: {
 
  
   
     
      getCountry(){


axios.get("public/countries").then((response) => {


this.countries=response.data.data;


}).catch((error)=>{
console.log(error.response)
})
},


gettaxrule(){


axios.get("/superadmin/taxrules").then((response) => {


this.taxrules=response.data.data;


}).catch((error)=>{
console.log(error.response)
})
},

adddetail(){

var cap_detail =

{
  tax_low_cap:this.tax_low_cap,
  tax_high_cap:this.tax_high_cap,
  tax_cap_difference:this.tax_cap_difference,
  age:this.age,
  p_tax:this.p_tax,
  remark:this.remark

}



this.cap_details.push(cap_detail);



},
  
      
       createtax() {
        axios
          .post("/superadmin/taxrules", {
            country_id: this.country_id,
            state: this.state,
            type: this.type,
            cap_details: JSON.stringify(this.cap_details),
            status: 1,
         
          })
          .then((response) => {
            if (response) {
     
         
  
           
               
             this.$refs.addForm.reset();  
  
             this.country_id=null;
             this.state="";
             this.type="";
             this.cap_details=[];
               this.gettaxrule();
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
    },
    mounted: function () {
      this.getCountry()
      this.gettaxrule()
   
    },
  };
  </script>
        