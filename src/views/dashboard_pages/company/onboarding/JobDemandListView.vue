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
              <div class="card">
                <div class="card-header pc-bg">
                  <h3 class="card-title d-inline float-left text-white">
                    Job Demands
                  </h3>
                  <!-- <router-link
                    class="float-right"
                    :to="{ name: 'createjobdemand' }"
                  >
                    <span class="btn-sc-sm">Create</span>
                  </router-link> -->
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-8">
                      <h5
                        style="
                          background-color: rgb(241, 241, 241);
                          padding: 10px 0px;
                          border-radius: 10px;
                        "
                        class="text-center"
                      >
                        Rquested Job
                      </h5>
                      <hr />

                      <DataTable
                        :data="pending_job"
                        class="display table table-striped table-bordered mt-2"
                      >
                        <thead>
                          <tr>
                            <th>Department</th>
                            <th>Title/Position</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </DataTable>
                    </div>

                    <div class="col-lg-4">
                      <h5
                        style="
                          background-color: rgb(241, 241, 241);
                          padding: 10px 0px;
                          border-radius: 10px;
                        "
                        class="text-center sc"
                      >
                        Published Job
                      </h5>
                      <hr />

                      <DataTable
                        :data="published_job"
                        class="display table table-striped table-bordered mt-2"
                      >
                        <thead>
                          <tr>
                            <th>Department</th>
                            <th>Title/Position</th>
                            <th>Quantity</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </DataTable>
                    </div>
                  </div>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->

              <!-- /.card -->
            </div>
          </div>
        </div>
      </section>

      <!-- /.content -->
    </div>

    <!-- /.content-wrapper -->
  </div>

  <div
    class="modal fade"
    id="viewModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Job demand</h5>
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
                  <label>Department</label>

                  <select
                    v-model="job_demand.department_id"
                    @input="clearError('department_id')"
                    class="form-control"
                    style="width: 100%"
                    @change="getposition(job_demand.department_id)"
                  >
                    <!-- <option disabled value="null">Select a department</option> -->
                    <option
                      v-for="department in departments"
                      :key="department"
                      :value="department.id"
                    >
                      {{ department.department_name }}
                    </option>
                  </select>
                  <sapn id="department_id" class="error"></sapn>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Position</label>

                  <select
                    v-model="job_demand.position_id"
                    @input="clearError('position_id')"
                    class="form-control"
                    style="width: 100%"
                  >
                    <option disabled value="null">Select a position</option>
                    <option
                      v-for="position in positions"
                      :key="position"
                      :value="position.id"
                    >
                      {{ position.position_name }}
                    </option>
                  </select>
                  <sapn id="position_id" class="error"></sapn>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="form-group">
                  <label>No of position </label>
                  <input
                    v-model="job_demand.quantity"
                    @input="clearError('quantity')"
                    type="text"
                    class="form-control"
                  />
                  <sapn id="quantity" class="error"></sapn>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="form-group">
                  <label>When to recruite </label>
                  <input
                    v-model="job_demand.recruitement_date"
                    @input="clearError('recruitement_date')"
                    type="date"
                    class="form-control"
                  />
                  <sapn id="recruitement_date" class="error"></sapn>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Salary Range</label>
                  <input
                    v-model="salary_range"
                    @input="clearError('recruitement_date')"
                    type="text"
                    class="form-control"
                  />
                  <sapn id="recruitement_date" class="error"></sapn>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="form-group">
                  <label>Exprience level</label>

                  <select
                    v-model="exprience_level"
                    class="form-control"
                    style="width: 100%"
                  >
                    <option disabled value="">Select a level</option>
                    -->
                    <option value="Entry">Entry</option>
                    -->
                    <option value="Intermediate">Intermediate</option>
                    -->
                    <option value="Mid">Mid</option>
                    -->
                    <option value="Expart">Expart</option>
                    -->
                  </select>
                  <sapn id="department_id" class="error"></sapn>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Job Type</label>

                  <select
                    v-model="job_type"
                    class="form-control"
                    style="width: 100%"
                  >
                    <option disabled value="">Select a type</option>
                    -->
                    <option value="Entry">Intern</option>
                    -->
                    <option value="Entry">Parttime</option>
                    -->
                    <option value="Intermediate">FullTime</option>
                    -->
                  </select>
                  <sapn id="department_id" class="error"></sapn>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Work Place</label>

                  <select
                    v-model="work_place"
                    class="form-control"
                    style="width: 100%"
                  >
                    <option disabled value="">Select a place</option>
                    -->
                    <option value="Onsite">Onsite</option>
                    -->
                    <option value="Remote">Remote</option>
                    -->
                    <option value="Hybrid">Hybrid</option>
                    -->
                  </select>
                  <sapn id="department_id" class="error"></sapn>
                </div>
              </div>
              <div class="col-lg-9"></div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label>Job Discription</label>
                  <ckeditor
                    style="height: 100px !important"
                    :editor="editor"
                    v-model="job_demand.job_description"
                    :config="editorConfig"
                  ></ckeditor>
                </div>
              </div>

              <div class="col-lg-7">
                <div class="form-group">
                  <label>Qualification</label>
                  <ckeditor
                    style="height: 100px !important"
                    :editor="editor"
                    v-model="job_demand.qualification"
                    :config="editorConfig"
                  ></ckeditor>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="form-group">
                  <label>Others</label>
                  <ckeditor
                    style="height: 100px !important"
                    :editor="editor"
                    v-model="others"
                    :config="editorConfig"
                  ></ckeditor>
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
            @click.prevent="publishjobdemand"
            type="button"
            class="btn-sc-sm"
          >
            Publish
          </button>
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Api from "@/other/Api";

DataTable.use(DataTablesCore);
export default {
  components: { DataTable },
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        height: "100px",
        // The configuration of the editor.
      },
      job_demands: [],
      published_job: [],
      pending_job: [],

      positions: [],
      departments: [],
      job_demand: "",
      exprience_level: "",
      place: "",
      job_type: "",
      uuid: "",
    };
  },
  methods: {
    getjobdemand() {
      axios
        .get("/company/jobdemands")
        .then((response) => {
          if (response) {
            var job_demands = response.data.data;

            this.job_demands = [];
            this.pending_job=[];
            this.published_job=[];

            for (var job_demand of job_demands) {
              var id = job_demand.uuid;
              var position_name =
                job_demand.position != null
                  ? job_demand.position.position_name
                  : "";
              var department_name =
                job_demand.department != null
                  ? job_demand.department.department_name
                  : "";

              var quantity = job_demand.quantity;
              var status =
                job_demand.status == null
                  ? "Pending"
                  : job_demand.status == 3
                  ? "Published"
                  : "Rejected";
              var action =
                "<i   data-toggle='modal' data-target='#viewModal'  onclick='handleClick(" +
                '"' +
                id +
                '"' +
                ")'  class='fa-solid fa-eye sc text-large '></i>  ";

              this.job_demands.push([
                department_name,
                position_name,
                quantity,
                status,
                action,
              ]);
               

              if (job_demand.status == null) {
                this.pending_job.push([
                  department_name,
                  position_name,
                  quantity,
                  status,
                  action,
                ]);
              }

      
              if (job_demand.status === 3) {
                this.published_job.push([
                  department_name,
                  position_name,
                  quantity,
                  status,
                  action,
                ]);
              }
            }

           
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleClick(id) {
      this.getjobdemanddetails(id);
      this.uuid = id;

      // this.$router.push({ name: "jobdetails", query: { uuid: id } });
    },
    getdepartment() {
      axios
        .get("/company/departments")
        .then((response) => {
          if (response) {
            this.departments = response.data.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getjobdemanddetails(uuid) {
      axios
        .get("/company/jobdemands/" + uuid)
        .then((response) => {
          if (response) {
            this.job_demand = response.data.data;
            this.department = response.data.data.department;

            this.getposition(this.job_demand.department_id);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    publishjobdemand() {
      axios
        .post("/company/jobdemands/published/" + this.uuid, {
          department_id: this.job_demand.department_id,
          position_id: this.job_demand.position_id,
          quantity: this.job_demand.quantity,
          recruitement_date: this.job_demand.recruitement_date,
          salary_range: this.salary_range,
          exprience_level: this.exprience_level,
          job_type: this.job_type,
          work_place: this.work_place,
          job_description: this.job_demand.job_description,
          qualification: this.job_demand.qualification,
          others: this.others,
        })
        .then((response) => {
          if (response) {
          this.getjobdemand()

            $("#viewModal .close").click();
       
            this.$emit("get_message", response.data.message);
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },

    clearError(field) {
      $("#" + field).css("display", "none");
    },

    getposition(department_id) {
      axios
        .get(Api.company.departmentPostion + department_id)
        .then((response) => {
          if (response) {
            this.positions = response.data.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted: function () {
    this.getjobdemand();
    this.getdepartment();
    window.handleClick = this.handleClick;
  },
};
</script>
           