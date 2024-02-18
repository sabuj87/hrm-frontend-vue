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
                    Weekends
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
                  <table class="table text-center table-striped table-bordered">
                    <thead>
                      <tr>
                        <th style="width: 10px">#</th>

                        <th>Day</th>
                        <th>note</th>
                        <th>Rate</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="weekend in weekends" :key="weekend">
                        <td>#</td>
                        <td>{{ weekend.day }}</td>
                        <td>{{ weekend.note }}</td>
                        <td>{{ weekend.rate }}</td>

                        <td>
                          <a @click.prevent="editdepartment(weekend.uuid)"   
                    data-toggle="modal"
                    data-target="#editModal" 
                            ><i class="fa-solid fa-pen-to-square"></i></a
                          >

                          <a  @click.prevent="deletedepartment(weekend.uuid)" class="-sm ml-2"
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
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" >Add new weekend</h5>
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
                  <label>Day</label>
         
         <select
           v-model="day"
           class="form-control "
           style="width: 100%"
         >
           <option disabled value=null>Select a day</option>
           <option >Saturday</option>
           <option >Sunday</option>
           <option >Monday</option>
           <option >Tuesday</option>
           <option >Wednesday</option>
           <option >Thursday</option>
           <option >Friday</option>
         </select>
         <p class="text-danger mt-1" v-if="errors.day" >{{ errors.day[0] }}</p>

               
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label>note </label>
                  <input type="text"  @input="errors.note=null" v-model="note" class="form-control" />
                  <p class="text-danger mt-1" v-if="errors.note" >{{ errors.note[0] }}</p>

                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label>Rate</label>
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
            <button  @click.prevent="addweekend" type="button" class="btn-sc-sm">Add</button>

         
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
                  <label>Day</label>
                  <input id="okk" type="text"   @input="errors.department_name=null"  v-model="department.department_name" class="form-control" />
                  <p class="text-danger mt-1" v-if="errors.department_name" >{{ errors.department_name[0] }}</p>

               
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label>Note </label>
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
export default {
  data() {
    return {
      errors: {},
      weekends: [],
      department: {},
      day:null
    };
  },
  methods: {
    getweekends() {
      axios
        .get("/company/weekends")
        .then((response) => {
          if (response) {
            
            this.weekends = response.data.data;

            this.$refs.addForm.reset();
          }
        })
        .catch((error) => {
          console.log(error);
          
        });
    },
    addweekend() {
      axios
        .post("/company/weekends", {
          note: this.note,
          day: this.day,
          rate: this.rate,
        })
        .then((response) => {
          if (response) {
   
             
           this.$refs.addForm.reset();
           this.rate

           this.holiday_name="";
           this.note="";
              this.getweekends();
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
    this.getweekends();
  },
};
</script>
      