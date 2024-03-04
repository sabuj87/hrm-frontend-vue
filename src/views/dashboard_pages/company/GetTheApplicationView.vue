<template>
  <div class="wrapper">
    <!-- Preloader -->
    <!-- <div class="preloader flex-column justify-content-center align-items-center">
        <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
      </div> -->

    <!-- Navbar -->
    <navbar-view></navbar-view>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <sidebar-view></sidebar-view>

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

      <div
        class="modal fade"
        id="addModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addModal"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-lg"
          :class="{ modalbig: isbig }"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ title }} Job Application</h5>
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
                  <div class="col-lg-6" :class="{ 'col-lg-12': istwo }">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Applicant Name* </label>
                          <input
                            v-model="applicant_name"
                            type="text"
                            class="form-control"
                          />
                          <sapn id="applicant_name" class="error"></sapn>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Requested Job</label>
                          <select
                            v-model="published_job_id"
                            class="form-control"
                            style="width: 100%"
                          >
                            <option disabled value="">
                              Select published Job
                            </option>
                            <option
                              v-for="job in publishedjobs"
                              :key="job"
                              :value="job.id"
                            >
                              {{ job.position.position_name }}
                              ({{ job.department.department_name }})
                            </option>
                          </select>
                          <sapn id="published_job_id" class="error"></sapn>
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="form-group">
                          <label>Cover Leter</label>
                          <ckeditor
                            style="height: 100px !important"
                            :editor="editor"
                            v-model="cover_leter"
                            :config="editorConfig"
                          ></ckeditor>
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="form-group">
                              <label>Document Name </label>
                              <input
                                v-model="doc_name"
                                type="text"
                                class="form-control"
                              />
                              <sapn id="applicant_name" class="error"></sapn>
                            </div>
                          </div>

                          <div class="col-lg-4">
                            <div class="form-group">
                              <label for="exampleInputFile">Documents </label>
                              <!-- <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="exampleInputFile"
                            />
                            <label
                              class="custom-file-label"
                              for="exampleInputFile"
                              >Choose file</label
                            >
                          </div>
                        </div> -->
                              <input
                                class="form-control"
                                @change="onFileSelect"
                                type="file"
                              />
                            </div>
                          </div>
                          <div class="col-lg-1">
                            <button
                              @click.prevent="adddocument"
                              type="button"
                              class="btn-sc-sm mt-4"
                            >
                              +
                            </button>
                          </div>

                          <div
                            style="max-height: 200px; overflow: auto"
                            class="col-lg-12"
                          >
                            <table
                              v-if="documents.length > 0"
                              class="table table-striped table-bordered"
                            >
                              <thead>
                                <tr>
                                  <th>Document name</th>

                                  <th>File</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="(doc, index) in documents"
                                  :key="doc"
                                >
                                  <td>{{ doc.doc_name }}</td>

                                  <td>
                                    <a >
                                      <img
                                        @click.prevent="modalchange(doc.path)"
                                        v-if="doc.type == 'application/pdf'"
                                        style="height: 30px; width: 30px"
                                        src="/assets/images/resource/pdf.png"
                                        alt=""
                                      />

                                      <img
                                        v-if="
                                          doc.type == 'image/png' ||
                                          doc.type == 'image/jpeg'
                                        "
                                        style="height: 30px; width: 30px"
                                        :src="doc.path"
                                        alt=""
                                      />
                                    </a>
                                  </td>
                                  <td>
                                    <i
                                      class="fa-solid fa-trash-can pc"
                                      @click="deleteDocument(index)"
                                    ></i>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                  

                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-pc-sm" data-dismiss="modal">
                Cancle
              </button>
              <button @click.prevent="aplyjob" type="button" class="btn-sc-sm">
                Confirm
              </button>
            </div>
          </div>
        </div>
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
                    Job applications
                  </h3>
                  <a
                    data-toggle="modal"
                    data-target="#addModal"
                    class="float-right"
                  >
                    <span @click="clear()" class="btn-sc-sm">Add</span>
                  </a>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <DataTable
                    :data="applications"
                    class="display table table-striped table-bordered mt-2"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Applicant Name</th>
                        <th>Job Title/Position</th>
                        <th>Department</th>
                        <th>Created at</th>

                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </DataTable>
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
    <!-- /.content-wrapper -->
  </div>
</template>

      
      <script>
import $ from "jquery";
import axios from "axios";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DataTable from "datatables.net-vue3";
import Constant from "@/other/Constant";
import DataTablesCore from "datatables.net";




DataTable.use(DataTablesCore);
export default {
  components: { DataTable},
  
  data() {
    return {
      isbig: false,
      istwo: true,
      pdfurl:'https://assabuj.com/others/cv.pdf',

      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        height: "100px",
        // The configuration of the editor.
      },
      errors: {},
      applications: [],
      publishedjobs: [],
      documents: [],
      old_documents: [],
      new_documents: [],
      file: "",

      // input field
      title: "",
      applicant_name: "",
      published_job_id: "",
      cover_leter: "",
    };
  },
  methods: {
    clear() {
      this.isbig = false;
      this.istwo = true;
      this.title = "Add";
      this.documents = [];
      (this.applicant_name = ""),
        (this.published_job_id = ""),
        (this.cover_leter = ""),
        this.$refs.addForm.reset();
    },
    modalchange(path) {
     this.pdfurl = path
      this.isbig = true;
      this.istwo = false;
    },
    getApplications() {
      axios
        .get("company/job_appliocations")
        .then((response) => {
          var applications = response.data.data;

          for (var application of applications) {
            var id = application.id;
            var uuid = application.uuid;
            var applicant_name = application.applicant_name;
            var position =
              application.employee_job_demand.position.position_name;
            var department =
              application.employee_job_demand.department.department_name;
            var created_at = application.created_at;

            var action =
              "<i  data-toggle='modal' data-target='#addModal' onclick='handleClick(" +
              '"' +
              uuid +
              '"' +
              ")'  class='fa-solid fa-pen-to-square sc text-large '></i>  <i class='fa-solid fa-trash text-red ms-2 pc'></i>";

            this.applications.push([
              id,
              applicant_name,
              position,
              department,
              created_at,
              action,
            ]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // getsingleapplication

    getApplication(uuid) {
      this.applicant_name = "";
      this.title = "Update";
      this.documents = [];

      axios
        .get("company/job_appliocations/" + uuid)
        .then((response) => {
          if (response) {
            this.applicant_name = response.data.data.applicant_name;
            this.published_job_id = response.data.data.employee_job_demand_id;
            this.cover_leter = response.data.data.cover_leter;
            var files = response.data.data.files;

            if (files.length > 0) {
              for (var file of files) {
                var doc = {
                  doc_name: file.file_info.document_name,
                  file: "",
                  type: file.file_info.type,
                  document_type: file.file_info.document_type,
                  path: Constant.filebaseurl + file.path,
                };
                this.documents.push(doc);
              }
            }
          }
        })
        .catch((error) => {
          if (error) {
            console.log(error);
          }
        });
    },

    getPublishedJob() {
      this.publishedjobs = [];
      axios

        .get("company/publishedjob")
        .then((response) => {
          this.publishedjobs = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    geturl(file) {
      return URL.createObjectURL(file);
    },
    onFileSelect(event) {
      this.file = event.target.files[0];
    },
    adddocument() {
      if (this.file) {
        var doc = {
          doc_name: this.doc_name,
          file: this.file,
          type: this.file.type,
          path: URL.createObjectURL(this.file),
          document_type: "Applicant document",
        };
        this.new_documents.push(doc);
        this.documents.push(doc);
      }
    },
    aplyjob() {
      var formData = new FormData();
      formData.append("applicant_name", this.applicant_name);
      formData.append("cover_leter", this.cover_leter);
      formData.append("published_job_id", this.published_job_id);

      for (var doc of this.new_documents) {
        formData.append("doc_names[]", doc.doc_name);
        formData.append("files[]", doc.file);
        formData.append("types[]", doc.type);
        formData.append("document_types[]", doc.document_type);
      }

      axios
        .post("company/job_appliocations", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);

          this.getApplications();
          $("#addModal .close").click();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /**
     * Handle click event and trigger job demand details retrieval.
     *
     * @param {type} id - The id of the job demand
     * @return {type}
     */

    handleClick(uuid) {
      this.getApplication(uuid);

      // this.$router.push({ name: "jobdetails", query: { uuid: id } });
    },
  },
  mounted: function () {
    this.getApplications();
    this.getPublishedJob();

    window.handleClick = this.handleClick;
  },
};
</script>
      