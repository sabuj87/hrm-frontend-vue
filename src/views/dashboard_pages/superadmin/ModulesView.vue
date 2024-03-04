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
                      Company Modules
                    </h3>
                    <!-- <router-link  class=" float-right"  :to="{ name: 'administrative-adddepartments' }">
  
  <span class="btn-sc-sm" >Add</span>
  </router-link> -->
  
                    <a
                      class="btn-sc-sm float-right"
                      data-toggle="modal"
                      data-target="#addModal"
                      >Add</a
                    >
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <!-- <table class="table text-center table-striped table-bordered">
                      <thead>
                        <tr>
                          <th style="width: 10px">#</th>
  
                          <th>Module Name</th>
                          <th>Path Name</th>
                          <th>Parent Module</th>

                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="module in modules" :key="module">
                          <td>#</td>
                          <td>{{ module.module_name }}</td>
                          <td>{{ module.path_name }}</td>
                          <td v-if="module.parent!=null" >{{ module.parent.module_name }}</td>
                          <td v-else ></td>
                          <td>
                            <a @click.prevent="editmodule(module.uuid)"   
                      data-toggle="modal"
                      data-target="#editModal" 
                              ><i class="fa-solid fa-pen-to-square"></i></a
                            >
  
                            <a  @click.prevent="deletemodule(module.uuid)" class="-sm ml-2"
                              ><i class="fa-solid fa-trash text-red"></i></a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table> -->

                    <DataTable
                        :data="modules"
  
                        class="display table table-striped table-bordered mt-2"
                      >
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Module Name</th>
                            <th>Path Name</th>
                            <th>Parent Module</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </DataTable>
                  </div>
                  <!-- /.card-body -->
                  <div class="card-footer clearfix">
                 
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
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" >Add new Module</h5>
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
                <div class="col-lg-6">
              
  
  
            
                  <div class="form-group">
                    <label>Module name</label>
                    <input type="text"   @input="errors.module_name=null"  v-model="module_name" class="form-control" />
                    <p class="text-danger mt-1" v-if="errors.module_name" >{{ errors.module_name[0] }}</p>
  
          
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Path name </label>
                    <input type="text"  @input="errors.path_name=null" v-model="path_name" class="form-control" />
                    <p class="text-danger mt-1" v-if="errors.path_name" >{{ errors.path_name[0] }}</p>
  
                  </div>
                </div>
                <div class="col-lg-6">
                  <label>Parent module</label>

                  <select
                            v-model="parent_id"
                            class="form-control "
                            style="width: 100%"
                          >
                            <option disabled value=null>Select a parent module</option>
                            <option v-for="module in modules" :key="module" :value="module.id">{{module.module_name}}</option>

                          </select>
                          <p class="text-danger mt-1" v-if="errors.department_id" >{{ errors.department_id[0] }}</p>


                </div>
                
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
              <button  @click.prevent="addModule" type="button" class="btn-sc-sm">Add</button>
  
           
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
              <h5 class="modal-title" >Edit Module</h5>
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
                <div class="col-lg-6">
              

                  <div class="form-group">
                    <label>Module name</label>
                    <input id="okk" type="text"   @input="errors.module_name=null"  v-model="module.module_name" class="form-control" />
                    <p class="text-danger mt-1" v-if="errors.module_name" >{{ errors.module_name[0] }}</p>
  
                 
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Path name </label>
                    <input i type="text"  @input="errors.code=null" v-model="module.path_name" class="form-control" />
                    <p class="text-danger mt-1" v-if="errors.path_name" >{{ errors.path_name[0] }}</p>
  
                  </div>
                </div>
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
              <button  @click.prevent="updatemodule(module.uuid)" type="button" class="btn-sc-sm">Update</button>
  
           
            </div>
  
         
          </div>
       
        </div>
     
      </div>
  
  
    </div>
  </template>
        
        <script>
   import $ from "jquery";
  import axios from "axios";
  import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
DataTable.use(DataTablesCore);
  export default {
    components: { DataTable },

    data() {
      return {
        errors: {},
        modules: [],
        module: {},
        parent_id:null
      };
    },
    methods: {
      getModule() {
        axios
          .get("/superadmin/company_modules")
          .then((response) => {
            if (response) {
              
             var modules = response.data.data;
             for(var module of modules){
              var id=module.id;
              var module_name=module.module_name;
              var path_name=module.path_name;
              var parent_module=module.parent!=null ? module.parent.module_name:"";
              var action = "<i  data-toggle='modal' data-target='#editModal'  class='fa-solid fa-pen-to-square sc text-large '></i>  <i class='fa-solid fa-trash text-red ms-2 pc'></i>";
             

              this.modules.push([id,module_name,path_name,parent_module,action]);

               
             }
  
     
            }
          })
          .catch((error) => {
            console.log(error);
            
          });
      },
      addModule() {
        axios
          .post("/superadmin/company_modules", {
            module_name: this.module_name,
            path_name: this.path_name,
            parent_id: this.parent_id,
          })
          .then((response) => {
            if (response) {
     
         
  
           
               
             this.$refs.addForm.reset();
  
             this.module_name="";
             this.module_name="";
                this.getModule();
                $("#addModal .close").click()
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      },
  
      editmodule(uuid) {
        axios
          .get("/superadmin/company_modules/"+uuid)
          .then((response) => {
            if (response) {
              
              this.module = response.data.data;
  
             
         
            }
          })
          .catch((error) => {
            console.log(error);
            
          });
      },
      updatemodule(uuid) {
       
        axios
          .put("/superadmin/company_modules/"+uuid,{
            module_name: this.module.module_name,
            path_name: this.module.path_name,
          })
          .then((response) => {
            if (response) {
              
           
              this.getModule()
           
              $("#editModal .close").click()
         
            }
          })
          .catch((error) => {
            console.log(error);
            
          });
      },
      deletemodule(uuid) {
       
       axios
         .delete("/superadmin/company_modules/"+uuid)
         .then((response) => {
           if (response) {
             
          
            this.getModule()
          
        
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
        