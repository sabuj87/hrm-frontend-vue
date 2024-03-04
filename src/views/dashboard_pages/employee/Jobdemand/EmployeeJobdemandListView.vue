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
                    Job Demands
                  </h3>
                  <!-- <router-link  class=" float-right"  :to="{ name: 'administrative-adddepartments' }">

<span class="btn-sc-sm" >Add</span>
</router-link> -->

                  <a
                    class="btn-sc-sm float-right"
                    data-toggle="modal"
                    data-target="#addModal"
                    >Create job demand</a
                  >
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <DataTable
                    :data="job_demands"
                    class="display table table-striped table-bordered mt-2"
                  >
                    <thead>
                      <tr>
                        <th>Department</th>
                        <th>Title/Position</th>
                        <th>Quantity</th>
                        <th>Qualification</th>
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
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create job demand</h5>
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
                      v-model="department_id"
                      @input="clearError('department_id')"

                      class="form-control"
                      style="width: 100%"
                      @change="getposition(department_id)"
                    >
                      <option disabled value="null">Select a department</option>
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
                      v-model="position_id"
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
                      v-model="quantity"
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
                      v-model="recruitement_date"
                      @input="clearError('recruitement_date')"
                      type="date"
                      class="form-control"
                    />
                    <sapn id="recruitement_date" class="error"></sapn>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Qualification</label>
                    <ckeditor
                      style="height: 100px !important"
                      :editor="editor"
                      v-model="qualification"
                      :config="editorConfig"
                    ></ckeditor>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Job Discription</label>
                    <ckeditor
                      style="height: 100px !important"
                      :editor="editor"
                      v-model="job_description"
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
            <button @click.prevent="createjobdemand" type="button" class="btn-sc-sm">
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
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Grade</h5>
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
                    <label>Day</label>
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
                    <label>Note </label>
                    <input
                      i
                      type="text"
                      @input="errors.code = null"
                      v-model="department.code"
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
DataTable.use(DataTablesCore);
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Api from "@/other/Api"
import { Validator } from "@/other/Validator";


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
      errors: {},
      weekends: [],
      department: {},
      department_id:null,
      day: null,
      departments:[],
      job_demands:[],
      positions:[],
      position_id:null
    };
  },
  methods: {
    getweekends() {
      axios
        .get("/company/weekends")
        .then((response) => {
          if (response) {
         console.log(response.data.data)

          
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getdepartment() {
      axios
        .get("/employee/departments")
        .then((response) => {
          if (response) {
            this.departments = response.data.data;


          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getJobDemands(){
      axios
        .get("/employee/jobdemands")
        .then((response) => {
          if (response) {
            var job_demands = response.data.data;
            
           this.job_demands=[]
          
          for(var job_demand of job_demands){
          //  var id=job_demand.id
           var position_name=job_demand.position!=null?job_demand.position.position_name:""
           var department_name=job_demand.department!=null?job_demand.department.department_name:""

           var quantity=job_demand.quantity
           var qualification=job_demand.qualification
           var action = "<i  data-toggle='modal' data-target='#editModal'  class='fa-solid fa-pen-to-square sc text-large '></i>  <i class='fa-solid fa-trash text-red ms-2 pc'></i>";

           this.job_demands.push([department_name,position_name,quantity,qualification,action]);

          }
         






          }
        })
        .catch((error) => {
          console.log(error);
        });

    },

    createjobdemand() {
      var validator = new Validator();
      var error = validator.validated([
        { field: "department_id", value: this.department_id, type: "required" },
        { field: "position_id", value: this.position_id, type: "required" },
        { field: "quantity", value: this.quantity, type: "required" },
        // { field: "qualification", value: this.qualification, type: "required" },
        {
          field: "recruitement_date",
          value: this.recruitement_date,
          type: "required",
        },
      ]);

      if (error) {
        console.log(error);
      } else {
        var job_demand = {
          department_id: this.department_id,
          position_id: this.position_id,
          quantity: this.quantity,
          qualification: this.qualification,
          salary_range: this.salary_range,
          recruitement_date: this.recruitement_date,
          job_description: this.job_description,
        };

        axios
          .post("/employee/jobdemands", job_demand)
          .then((response) => {
            if (response) {
              $("#addModal .close").click()
              this.$emit("get_message", response.data.message);
              this.getJobDemands();

            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },


    getposition(department_id) {
      axios
        .get(Api.employee.departmentPostion+department_id)
        .then((response) => {
          if (response) {
            this.positions = response.data.data;


          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    clearError(field) {
      $("#" + field).css("display", "none");
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
            this.rate;

            this.holiday_name = "";
            this.note = "";
            this.getweekends();
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
    this.getweekends();
    this.getdepartment();
    this.getJobDemands();
    
  },
};
</script>
<style >
.ck-content {
  height: 150px !important;
}
</style>
      