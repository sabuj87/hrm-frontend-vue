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
                    Provident fund Rule
                  </h3>
                  <!-- <router-link  class=" float-right"  :to="{ name: 'administrative-adddepartments' }">
  
  <span class="btn-sc-sm" >Add</span>
  </router-link> -->

                  <a
                    class="btn-sc-sm float-right"
                    data-toggle="modal"
                    data-target="#addModal"
                    >Set New PF Rule</a
                  >
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <!-- <table class="table text-center table-striped table-bordered">
                    <thead>
                      <tr>
                        <th style="width: 10px">ID</th>

                        <th>Grade</th>
                        <th>PF%</th>
                        <th>Age of job</th>

                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="pfrule in pfrules" :key="pfrule">
                        <td>#</td>
                        <td>{{ pfrule.grade.grade_name }}</td>
                        <td>{{ pfrule.p_pf }}</td>
                        <td>{{ pfrule.age_of_job }}</td>

                        <td>
                          <a
                            @click.prevent="editdepartment(pfrule.uuid)"
                            data-toggle="modal"
                            data-target="#editModal"
                            ><i class="fa-solid fa-pen-to-square"></i
                          ></a>

                          <a
                            @click.prevent="deletedepartment(pfrule.uuid)"
                            class="-sm ml-2"
                            ><i class="fa-solid fa-trash text-red"></i
                          ></a>
                        </td>
                      </tr>
                    </tbody>
                  </table> -->


                  <DataTable
                    :data="pfrules"
                    class=" table table-striped table-bordered mt-2"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Grade</th>
                        <th>PF%</th>
                        <th>Age of job</th>
                        <th>Action</th>
                      </tr>
                    </thead>
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
            <h5 class="modal-title">Add new PF Rule</h5>
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
            <form ref="addForm">
              <div class="row">
                <div class="col-lg-4">
                  <div class="form-group">
                    <label>Grade</label>

                    <select
                      v-model="grade_id"
                      class="form-control"
                      style="width: 100%"
                      @change="errors.grade_id = null"
                    >
                      <option disabled value="null">Select a grade</option>
                      <option
                        v-for="grade in grades"
                        :key="grade"
                        :value="grade.id"
                      >
                        {{ grade.grade_name }}
                      </option>
                    </select>
                    <p class="text-danger mt-1" v-if="errors.grade_id">
                      {{ errors.grade_id[0] }}
                    </p>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="form-group">
                    <label>PF%</label>
                    <input
                      type="text"
                      @input="errors.p_pf = null"
                      v-model="p_pf"
                      class="form-control"
                    />
                    <p class="text-danger mt-1" v-if="errors.p_pf">
                      {{ errors.p_pf[0] }}
                    </p>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="form-group">
                    <label>Age of job</label>
                    <input
                      type="text"
                      @input="errors.age_of_job = null"
                      v-model="age_of_job"
                      class="form-control"
                    />
                    <p class="text-danger mt-1" v-if="errors.age_of_job">
                      {{ errors.age_of_job[0] }}
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-pc-sm" data-dismiss="modal">
              Cancle
            </button>
            <button
              @click.prevent="createpfrule"
              type="button"
              class="btn-sc-sm"
            >
              Create
            </button>
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
            <h5 class="modal-title">Edit Position</h5>
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
            <form ref="addForm">
              <div class="row"></div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-pc-sm" data-dismiss="modal">
              Cancle
            </button>
            <button
              @click.prevent="updatedepartment(department.uuid)"
              type="button"
              class="btn-sc-sm"
            >
              Update
            </button>
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

      pfrules: [],

      grades: [],
      grade_id: null,
    };
  },
  methods: {
    getpfrule() {
      axios
        .get("/company/pfrules")
        .then((response) => {
       var pfrules = response.data.data;


   for(var pfrule of pfrules){

   var id  = pfrule.id;
   var grade  = pfrule.grade.grade_name;
   var p_pf = pfrule.p_pf;
   var age_of_job = pfrule.age_of_job;
   var action = "<i class='fa-solid fa-pen-to-square sc text-large '></i>  <i class='fa-solid fa-trash text-red ms-2 pc'></i>";

   

   this.pfrules.push([id,grade,p_pf,age_of_job,action]);


   }
          





        })
        .catch((error) => {
          console.log(error.response);
        });
    },

    createpfrule() {
      axios
        .post("/company/pfrules", {
          grade_id: this.grade_id,
          p_pf: this.p_pf,
          age_of_job: this.age_of_job,
          status: 1,
        })
        .then((response) => {
          if (response) {
            this.$refs.addForm.reset();

            this.grade_id = null;
            this.p_pf = "";
            this.age_of_job = "";

            this.getpfrule();
            $("#addModal .close").click();
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },

    editdepartment(uuid) {
      axios
        .get("/company/departments/" + uuid)
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
        .put("/company/departments/" + uuid, {
          department_name: this.department.department_name,
          code: this.department.code,
        })
        .then((response) => {
          if (response) {
            this.getdepartment();

            $("#editModal .close").click();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deletedepartment(uuid) {
      axios
        .delete("/company/departments/" + uuid)
        .then((response) => {
          if (response) {
            this.getdepartment();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getgrades() {
      axios
        .get("/company/grades")
        .then((response) => {
          if (response) {
            this.grades = response.data.data;

            this.$refs.addForm.reset();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted: function () {
    this.getpfrule();
    this.getgrades();
  },
};
</script>
        