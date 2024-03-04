<template>
  <div class="wrapper">
    <!-- Preloader -->
    <!-- <div class="preloader flex-column justify-content-center align-items-center">
        <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
      </div> -->

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
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
              <div class="card card-primary">
                <div class="card-header pc-bg">
                  <h3 class="card-title">Leave Application</h3>
                </div>

                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Leave Type</label>
                          <select
                            v-model="leave_id"
                            class="form-control"
                            @change="countleave(leave_id)"
                            style="width: 100%"
                          >
                            <option disabled value="">Select leave type</option>
                            <option :value="companyleaves.id" v-for="companyleaves in company_leaves" :key="companyleaves" selected="selected">
                              {{ companyleaves.type }}
                            </option>
                          
                          </select>
                        </div>
                      </div>
                    </div>

                    <div v-if="company_leave" class="row">
                    

                      <div class="col-lg-3 border p-2">
                        <span style="font-size: 120%"
                          ><strong class="sc">Total {{ company_leave.type }} Leave :</strong> {{company_leave.days}}</span
                        >
                      </div>
                      <div class="col-lg-3 border p-2">
                        <span style="font-size: 120%"
                          ><strong class="sc">Your {{ company_leave.type }} Leave :</strong> {{totalleavecount}}</span
                        >
                      </div>

                      <div class="col-lg-3 border p-2">
                        <span style="font-size: 120%"
                          ><strong class="sc"> Remaining :</strong> {{company_leave.days-totalleavecount}}</span
                        >
                      </div>
                    </div>

                    <hr />

                    <h5 class="mt-3">Apply for leave</h5>

                    <div class="row mt-3">
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>From</label>
                          <input
                            v-model="from"
                            type="date"
                            class="form-control"
                          />
                        </div> 
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>To</label>
                          <input
                            v-model="to"
                            type="date"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                      <div class="form-group">
                        <label for="exampleInputFile">Document</label>

                        <input
                          type="file"
                          @change="handleDocumentUpload"
                          class="form-control"
                          id="exampleInputFile"
                        />
                      </div>
                    </div>

                      

                      

                      <div class="col-lg-12">
                        <div class="form-group">
                          <label>Reason </label>
                          <ckeditor  :editor="editor" v-model="reason" :config="editorConfig"></ckeditor>
                   
                        </div>
                      </div>
                    </div>

                    <button @click="leaveApply" type="button" class="btn-sc">
                      Apply
                    </button>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /.content -->
    </div>
  </div>
</template>
      
      <script>
import { Validator } from "@/other/Validator";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Api from "@/other/Api";
// import ApiCall from "@/other/ApiCall"
import $ from "jquery";
 import moment from "moment";
import axios from "axios";
export default {
  data() {
    return {
      errors: {},
      editor: ClassicEditor,
                editorData: '',
                editorConfig: {
                    // The configuration of the editor.
                },
      departments: [],
      department_id: "",
      leave_type: "",
      authority: "",
      leaves: "",
      leave_id:"",
      company_leaves: "",
      company_leave:"",
      yourleaves:"",
      approved_leaves:[],
      daycount:0,
      totalleavecount:0,
      file:""

    };
  },
  methods: {
    leaveApply() {
     
      var validator = new Validator();
      var error = validator.validated([
        { field: "from", value: this.from, type: "required" },
        { field: "to", value: this.to, type: "required" },
        { field: "reason", value: this.reason, type: "required" },
      ]);

      if (error) {
        console.log(error);
      } else {
        var formData=new FormData

        formData.append('leave_id',this.leave_id)
        formData.append('from',this.from)
        formData.append('to',this.to)
        formData.append('reason',this.reason)
        formData.append('file',this.file)
        

        axios
          .post("/employee/leaves", formData,{
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            if (response) {
              this.$emit("get_message", response.data.message);
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },
    



    getDepartments() {
      axios
        .get("employee/departments")
        .then((response) => {
          this.departments = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getCompanyLeaves() {
      axios
        .get(Api.employee.company_leaves_employee)
        .then((response) => {
          this.company_leaves = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    countleave(id){

     //  var daycount=0;
       this.company_leave= this.company_leaves.find(el => el.id === id)
       this.approved_leaves = this.leaves.filter(
              (item) => item.status === "1" &&  item.leave_id===id
            ); 
            this.totalleavecount=0
            for(var approved_leave of this.approved_leaves){
              var start = moment(approved_leave.from, "YYYY-MM-DD");
              var end = moment(approved_leave.to, "YYYY-MM-DD");
              this.daycount=moment.duration(end.diff(start)).asDays();
        

             this.totalleavecount+= this.daycount





          
            }
         
           

          
    },

    handleDocumentUpload(event){

       this.file=event.target.files[0]



    },

    getLeaves() {
      axios
        .get(Api.employee.leaves)
        .then((response) => {
          this.leaves = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    clearError(field) {
      $("#" + field).css("display", "none");
    },
  },
  mounted: function () {
    this.getDepartments();
    this.getCompanyLeaves();
    this.getLeaves();
  },
};
</script>