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
                    Departments
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
                    :data="departments"
                    class="display table table-striped table-bordered mt-2"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Department Name</th>
                        <th>Department ID</th>

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
            <h5 class="modal-title">Add new department</h5>
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
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Department name</label>
                    <input
                      type="text"
                      @input="errors.department_name = null"
                      v-model="department_name"
                      class="form-control"
                    />
                    <p class="text-danger mt-1" v-if="errors.department_name">
                      {{ errors.department_name[0] }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Department ID(Max 2 Digit)</label>
                    <input
                      type="number"
                      min="0"
                      @input="errors.d_id = null"
                      v-model="d_id"
                      class="form-control"
                    />
                    <p class="text-danger mt-1" v-if="errors.d_id">
                      {{ errors.d_id[0] }}
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
              @click.prevent="adddepartment"
              type="button"
              class="btn-sc-sm"
            >
              Add
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
            <h5 class="modal-title">Edit department</h5>
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
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Department name</label>
                    <input
                      id="okk"
                      type="text"
                      @input="errors.department_name = null"
                      v-model="department.department_name"
                      class="form-control"
                    />
                    <p class="text-danger mt-1" v-if="errors.department_name">
                      {{ errors.department_name[0] }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Department ID (Max 2 Digit) </label>
                    <input
                      type="number"
                      @input="errors.d_id = null"
                      v-model="department.d_id"
                      class="form-control"
                    />
                    <p class="text-danger mt-1" v-if="errors.d_id">
                      {{ errors.d_id[0] }}
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
      departments: [],
  
      department: {},
    };
  },
  methods: {
    getdepartment() {
      axios
        .get("/company/departments")
        .then((response) => {
          if (response) {
            var departments = response.data.data;

            this.departments = [];

            for (var department of departments) {
              var id = department.id;

              var department_name = department.department_name;
              var d_id = department.d_id;
              var action =
                "<i  data-toggle='modal' data-target='#editModal'  class='fa-solid fa-pen-to-square sc text-large '></i>  <i class='fa-solid fa-trash text-red ms-2 pc'></i>";

              this.departments.push([id, department_name, d_id, action]);
            }
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
          d_id: this.d_id,
        })
        .then((response) => {
          if (response) {
            //  this.$refs.addForm.reset();

            this.department_name = "";
            this.d_id = "";
            this.getdepartment();
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
          d_id: this.department.d_id,
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
  },
  mounted: function () {
    this.getdepartment();
  },
};
</script>
      