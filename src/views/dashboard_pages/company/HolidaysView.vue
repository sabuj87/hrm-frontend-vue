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
                      Holidays
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

                          <th>Date</th>
                          <th>Holiday Name</th>
                          <th>Work Rate</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="holiday in holidays" :key="holiday">
                          <td>#</td>
                          <td>{{ holiday.date }}</td>
                          <td>{{ holiday.holiday_name }}</td>
                          <td>{{ holiday.rate }}</td>
  
                          <td>
                            <a @click.prevent="editdepartment(holiday.uuid)"   
                      data-toggle="modal"
                      data-target="#editModal" 
                              ><i class="fa-solid fa-pen-to-square"></i></a
                            >
  
                            <a  @click.prevent="deletedepartment(holiday.uuid)" class="-sm ml-2"
                              ><i class="fa-solid fa-trash text-red"></i></a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table> -->

                    <DataTable
                        :data="holidays"
  
                        class="display table table-striped table-bordered mt-2"
                      >
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Date</th>

                            <th>Holiday name</th>
                            <th>Work Rate</th>
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
              <h5 class="modal-title" >Add new holiday</h5>
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
                    <label> Date</label>
                    <input type="date"   @input="errors.date=null"  v-model="date" class="form-control" />
                    <p class="text-danger mt-1" v-if="errors.date" >{{ errors.date[0] }}</p>
  
                 
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Holiday name </label>
                    <input type="text"  @input="errors.holiday_name=null" v-model="holiday_name" class="form-control" />
                    <p class="text-danger mt-1" v-if="errors.holiday_name" >{{ errors.holiday_name[0] }}</p>
  
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Work Rate (ex:10%) </label>
                    <input type="text"  @input="errors.rate=null" v-model="rate" class="form-control" />
                    <p class="text-danger mt-1" v-if="errors.rate" >{{ errors.rate[0] }}</p>
  
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
              <button  @click.prevent="addholiday" type="button" class="btn-sc-sm">Add</button>
  
           
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
              <h5 class="modal-title" >Edit Grade</h5>
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
                    <label>Grade name</label>
                    <input id="okk" type="text"   @input="errors.department_name=null"  v-model="department.department_name" class="form-control" />
                    <p class="text-danger mt-1" v-if="errors.department_name" >{{ errors.department_name[0] }}</p>
  
                 
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Code </label>
                    <input i type="text"  @input="errors.code=null" v-model="department.code" class="form-control" />
                    <p class="text-danger mt-1" v-if="errors.code" >{{ errors.code[0] }}</p>
  
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
  import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
DataTable.use(DataTablesCore);
  export default {
    components: { DataTable },

    data() {
      return {
        errors: {},
        holidays: [],
        department: {},
      };
    },
    methods: {
      getholidays() {
        axios
          .get("/company/holidays")
          .then((response) => {
            if (response) {
              
              var holidays = response.data.data;

              for(var holiday of holidays){

                var id=holiday.id;
                var date=holiday.date;
                var holiday_name=holiday.holiday_name;
                var rate=holiday.rate;
                var action="<i class='fa-solid fa-pen-to-square sc text-large '></i>  <i class='fa-solid fa-trash text-red ms-2 pc'></i>"
                this.holidays.push([id,date,holiday_name,rate,action]);
              }
  
            }
          })
          .catch((error) => {
            console.log(error);
            
          });
      },
      addholiday() {
        axios
          .post("/company/holidays", {
            date: this.date,
            holiday_name: this.holiday_name,
            rate: this.rate,
          })
          .then((response) => {
            if (response) {
     
         
  
           
               
             this.$refs.addForm.reset();
  
             this.holiday_name="";
             this.date="";
                this.getholidays();
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
      this.getholidays();
    },
  };
  </script>
        