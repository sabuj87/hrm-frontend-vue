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
                    Leaves
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

                        <th>Department Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="department in departments" :key="department">
                        <td>#</td>
                        <td>{{ department.department_name }}</td>

                        <td>
                          <a @click.prevent="editdepartment(department.uuid)"   
                    data-toggle="modal"
                    data-target="#editModal" 
                            ><i class="fa-solid fa-pen-to-square"></i></a
                          >

                          <a  @click.prevent="deletedepartment(department.uuid)" class="-sm ml-2"
                            ><i class="fa-solid fa-trash text-red"></i></a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table> -->

                  <DataTable
                        :data="leaves"
  
                        class="display  table table-striped table-bordered mt-2"
                      >
                        <thead>
                          <tr>
                            <th style="width: 10px;" >#</th>
                            <th>Type</th>
                            <th>Days</th>

    
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </DataTable>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                  <!-- <ul class="pagination pagination-sm m-0 float-right">
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
                  </ul> -->
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
            <h5 class="modal-title" >Add new leave</h5>
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
                  <label>Leave Type</label>
                  <input type="text"   @input="errors.type=null"  v-model="type" class="form-control" />
                  <p class="text-danger mt-1" v-if="errors.type" >{{ errors.type[0] }}</p>

               
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label>Days</label>
                  <input type="number"  min="0" @input="errors.days=null" v-model="days" class="form-control" />
                  <p class="text-danger mt-1" v-if="errors.days" >{{ errors.days[0] }}</p>

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
            <button  @click.prevent="addleave" type="button" class="btn-sc-sm">Add</button>

         
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
            <h5 class="modal-title" >Edit department</h5>
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
                  <label>Leave Type</label>
                  <input  type="text"   @input="errors.leave=null"  v-model="leave.type" class="form-control" />
                  <p class="text-danger mt-1" v-if="errors.leave" >{{ errors.leave[0] }}</p>

               
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label>Days</label>
                  <input  type="number"  @input="errors.days=null" v-model="leave.days" class="form-control" />
                  <p class="text-danger mt-1" v-if="errors.days" >{{ errors.days[0] }}</p>

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
            <button  @click.prevent="updatedepartment(leave.uuid)" type="button" class="btn-sc-sm">Update</button>

         
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
import api from "@/other/Api";

DataTable.use(DataTablesCore);
export default {
  components: { DataTable },

  data() {
    return {
      errors: {},
      leaves: [],
      leave: {},
    };
  },
  methods: {
    getleaves() {
      axios
        .get(api.company_leaves)
        .then((response) => {
          if (response) {
            
           var leaves = response.data.data;

           this.leaves=[]
           var serial=0;
           for(var leave of leaves){
            //  var id=leave.id

            serial++

            var type=leave.type
            var days=leave.days;
            var action = "<i  data-toggle='modal' data-target='#editModal'  class='fa-solid fa-pen-to-square sc text-large '></i>  <i class='fa-solid fa-trash text-red ms-2 pc'></i>";

            this.leaves.push([serial,type,days,action]);

           }
          




            
        }
        })
        .catch((error) => {
          console.log(error);
          
        });
    },
    addleave() {
      axios
        .post(api.company_leaves, {
          type: this.type,
          days: this.days,
        })
        .then((response) => {
          if (response) {
   
       

         
             
          //  this.$refs.addForm.reset();

           this.type="";
           this.days="";
              this.getleaves();
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
          d_id: this.department.d_id,
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
    this.getleaves();
  },
};
</script>
      