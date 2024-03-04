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
                    Positions
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

                        <th>Position Name</th>
                        <th>Department</th>
                        <th>Level</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {{ positions }}
                      <tr v-for="position in positions" :key="position">
                        <td>#</td>
                        <td>{{ position.position_name }}</td>
                        <td>{{ position.company_department.department_name}}</td>
                        <td>{{ position.level.level_name}}</td>

                        <td>
                          <a @click.prevent="editdepartment(position.uuid)"   
                    data-toggle="modal"
                    data-target="#editModal" 
                            ><i class="fa-solid fa-pen-to-square"></i></a
                          >

                          <a  @click.prevent="deletedepartment(position.uuid)" class="-sm ml-2"
                            ><i class="fa-solid fa-trash text-red"></i></a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table> -->

                  <DataTable
                    :data="positions"
                    class="display table table-striped table-bordered mt-2"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Position Name</th>
                        <th>Department</th>
                        <th>Grade</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </DataTable>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix"></div>
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
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add new position</h5>
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
                    <label>Department</label>

                    <select
                      v-model="department_id"
                      class="form-control"
                      @change="getdepartmentposition(department_id)"
                      style="width: 100%"
                    >
                      <option disabled value="null">Select a Department</option>
                      <option
                        v-for="department in departments"
                        :key="department"
                        :value="department.id"
                      >
                        {{ department.department_name }}
                      </option>
                    </select>
                    <p class="text-danger mt-1" v-if="errors.department_id">p
                      {{ errors.department_id[0] }}
                    </p>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Level</label>

                    <select
                      v-model="level_id"
                      class="form-control"
                      style="width: 100%"
                    >
                      <option disabled value="null">Select a level</option>
                      <option
                        v-for="level in levels"
                        :key="level"
                        :value="level.id"
                      >
                        {{ level.level_name }}
                      </option>
                    </select>
                    <p class="text-danger mt-1" v-if="errors.level_id">
                      {{ errors.level_id[0] }}
                    </p>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Assigned Under</label>

                    <select
                      v-model="assign_under"
                      class="form-control"
                      style="width: 100%"
                    >
                      <option disabled value="null">Select a position</option>
                      <option
                        v-for="position in departmentPostions"
                        :key="position"
                        :value="position.id"
                      >
                        {{ position.position_name}}
                      </option>
                    </select>
                    <p class="text-danger mt-1" v-if="errors.level_id">
                      {{ errors.level_id[0] }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Position name</label>
                    <input
                      type="text"
                      @input="errors.position_name = null"
                      v-model="position_name"
                      class="form-control"
                    />
                    <p class="text-danger mt-1" v-if="errors.position_name">
                      {{ errors.position_name[0] }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Code </label>
                    <input
                      type="text"
                      @input="errors.code = null"
                      v-model="code"
                      class="form-control"
                    />
                    <p class="text-danger mt-1" v-if="errors.code">
                      {{ errors.code[0] }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Company Modules </label>

                    <select
                      class="custom-select"
                      multiple
                      data-live-search="true"
                      style="width: 100%; height: 200px"
                      v-model="selectedModulesID"
                    >
                      <option disabled value="">Select modules</option>
                      <option
                        v-for="module in modules"
                        :value="module.company_module.id"
                        :key="module"
                      >
                        <span v-if="module.company_module.parent_id == null">{{
                          module.company_module.module_name
                        }}</span
                        ><span v-if="module.company_module.parent_id != null"
                          >{{ module.company_module.module_name }}({{
                            module.company_module.parent.module_name
                          }})</span
                        >
                      </option>
                    </select>

                    <p class="text-danger mt-1" v-if="errors.grade">
                      {{ errors.grade[0] }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Employee Modules </label>

                    <select
                      class="custom-select"
                      multiple
                      data-live-search="true"
                      style="width: 100%; height: 200px"
                      v-model="selectedEmployeeModulesID"
                    >
                      <option disabled value="">Select modules</option>
                      <option
                        v-for="module in employee_modules"
                        :value="module.employee_module.id"
                        :key="module"
                      >
                        <span v-if="module.employee_module.parent_id == null">{{
                          module.employee_module.module_name
                        }}</span
                        ><span v-if="module.employee_module.parent_id != null"
                          >{{ module.employee_module.module_name }}({{
                            module.employee_module.parent.module_name
                          }})</span
                        >
                      </option>
                    </select>

                    <p class="text-danger mt-1" v-if="errors.grade">
                      {{ errors.grade[0] }}
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
              @click.prevent="addposition"
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
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Position name</label>
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
                    <label>Code </label>
                    <input
                      i
                      type="text"
                      @input="errors.code = null"
                      v-model="code"
                      class="form-control"
                    />
                    <p class="text-danger mt-1" v-if="errors.code">
                      {{ errors.code[0] }}
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
import Api from "@/other/Api";

DataTable.use(DataTablesCore);

export default {
  components: { DataTable },

  data() {
    return {
      errors: {},
      departments: [],
      levels: [],
      department_id: null,
      level_id: null,
      department: "",
      positions: [],
      modules: [],
      assign_under:"",
      employee_modules: [],
      selectedModulesID: [],
      selectedEmployeeModulesID: [],
      departmentPostions:[]
    };
  },
  methods: {
    getdepartment() {
      axios
        .get("/company/departments")
        .then((response) => {
          if (response) {
            this.departments = response.data.data;

            this.$refs.addForm.reset();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getlevel() {
      axios
        .get("/company/levels")
        .then((response) => {
          if (response) {
            this.levels = response.data.data;

            this.$refs.addForm.reset();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getposition() {
      axios
        .get("/company/positions")
        .then((response) => {
          if (response) {
            var positions = response.data.data;

            for (var position of positions) {
              var id = position.id;

              var position_name = position.position_name;

              var department = position.company_department.department_name;

              var level = position.level.level_name;

              var action =
                '<button onclick="handleClick(' +
                id +
                ')" class="btn btn-sm btn-default"><i class="fa-solid fa-eye"></i></button>';

              this.positions.push([
                id,
                position_name,
                department,
                level,
                action,
              ]);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getdepartmentposition(department_id) {
      axios
        .get(Api.company.departmentPostion+department_id)
        .then((response) => {
          if (response) {
            this.departmentPostions = response.data.data;

      
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addposition() {
      axios
        .post("/company/positions", {
          department_id: this.department_id,
          level_id: this.level_id,
          position_name: this.position_name,
          code: this.code,
          modules: this.selectedModulesID,
          employeemodules: this.selectedEmployeeModulesID,
        })
        .then((response) => {
          if (response) {
            this.$refs.addForm.reset();

            this.department_id = null;
            this.level_id = null;
            this.position_name = "";
            this.code = "";
            this.getposition();
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
  },
  mounted: function () {
    this.getdepartment();
    this.getlevel();
    this.getposition();
    this.modules = JSON.parse(
      localStorage.getItem("user")
    ).user.price.price.modules;
    this.employee_modules = JSON.parse(
      localStorage.getItem("user")
    ).user.price.price.employee_modules;
  },
};
</script>
      