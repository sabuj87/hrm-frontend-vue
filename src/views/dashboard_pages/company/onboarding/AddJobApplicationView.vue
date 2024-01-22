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
              <div class="col-sm-6">
              
              </div>
              <!-- /.col -->
              <div class="col-sm-6">
            
              </div>
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
               
                  <div  class="card-header pc-bg ">
                    <h3 class="card-title">Add Job Application</h3>
                  </div>
  
                  <form>

                    <div class="card-body">

                     


                        <div class="row">
                            <div class="col-lg-6">
                        <div class="form-group">
                          <label 
                            >Applicant Name*
                          </label>
                          <input
                          v-model="applicant_name"
                          @input="clearError('applicant_name')"

                            type="text"
                            class="form-control"
                           
                          />
                          <sapn id="applicant_name" class="error" ></sapn>

                        </div>
                      </div>
                            <div class="col-lg-6">
                      <div class="form-group">
                        <label>Requested Job</label>
                        <select
                           v-model="published_job_id"
                           @change="clearError('published_job_id')"
                          class="form-control "
                          style="width: 100%"
                        >
                          <option disabled value="">Select Job</option>
                          <option  v-for="job in jobs" :key="job" :value="job.id ">{{job.job.designation}} {{ job.job.recruitement_date }}</option>
                         
                        </select>
                        <sapn id="published_job_id" class="error" ></sapn>

                      </div>
                    </div>
                   
             
                        
                         
                          

                  

                      
                  
                     

                     
                      <div class="col-lg-12">
                        <div    class="form-group">
                          <label 
                            >Cover letter (Optional)
                          </label>
                          <input
                          style="height: 100px !important"
                          v-model="cover_letter"
              


                            type="text"
                            class="form-control"
                           
                          />
                 

                        </div>
                      </div>
                 
                 
                 
                 

                   
                   
                 

                   
                  </div>

                  <div class="row">
               
               

                  
                   

                    <div class="col-lg-5">
                      <div class="form-group">
                        <label for="exampleInputFile">Documents (CV,Transcripts,Certificates etc..)</label>
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
                        <input class="form-control" @change="onFileSelect" multiple type="file">
                      </div>
                
                    </div>

                 
<!-- 
                    <div class="col-1 pt-1">
                      <button
                        @click="adddoc"
                        type="button"
                        class="btn btn-default btn-sm mt-4 mb-4"
                      >
                      <i class="fa-solid fa-plus"></i>
                      </button>
                    </div> -->
                  </div>


                  <!-- <table v-if="docs.length>0" class="table text-center table-bordered">
                    <thead>
                      <tr>
                        <th style="width: 10px">#</th>
                        <th>Document name</th>
                        <th>File</th>
                     
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="doc in docs" :key="doc">
                        <td>1.</td>
                        <td>{{ doc.document_name }} </td>
                 
                      </tr>
                    </tbody>
                  </table> -->




                  <button @click.prevent="apply" type="button" class="mt-3 btn-sc" >Apply</button>
                    </div>


                  
           

                    <!-- /.card-body -->
  
  
                    <div class="bs-stepper" ></div>
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
    import $ from "jquery";
import axios from "axios";
      export default {
        data() {
          return {
            errors: {},
            departments:[],
            published_job_id: "",
        
            jobs:[],
            file:"",
            files:[],
            docs:[]
          
            
          };
        },
        methods: {

          onFileSelect(event) {
      const files = event.target.files;

      for (let i = 0; i < files.length; i++) {
        if (!this.docs.some((e) => e.name === files[i].name)) {
          var doc = {
            name: files[i].name,
            file: files[i],
            type: "document",
            document_type: "document",
            document_name: "applicant documents",
            url: URL.createObjectURL(files[i]),
          };
          this.docs.push(doc);
        }
      }

      

          },

          uploadcv() {
      if (this.file) {
        var formData = new FormData();

        formData.append("file", this.file);
        formData.append("type", "document");
        formData.append("document_type", "cv");
        formData.append("document_name", "applicant_cv");
        formData.append("_method", "put");

        axios
          .post("/company/job_appliocations", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            if (response) {
              alert(response.data.message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }else{
        alert("select the file");
      }
    },

    apply() {

        var validator = new Validator();
      var error = validator.validated([
        {
          field: "applicant_name",
          value: this.applicant_name,
          type: "required",
        },
        {
          field: "published_job_id",
          value: this.published_job_id,
          type: "required",
        },
       
      ]);
      if(error){

        console.log(error);
      }else{
    
        var formData = new FormData();

        for (var i = 0; i < this.docs.length; i++) {
          formData.append("files[]", this.docs[i].file);
          formData.append("types[]", this.docs[i].type);
          formData.append("document_types[]", this.docs[i].document_type);
          formData.append("document_names[]", this.docs[i].document_name);
          formData.append("applicant_name", this.applicant_name);
          formData.append("published_job_id", this.published_job_id);
          formData.append("cover_letter", this.cover_letter);
          formData.append("status", 1);
        }




        axios

        .post("/company/job_appliocations",formData,{
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then((response) => {
          if (response) {
            alert(response.data.message);
         

          }
        })
        .catch((error) => {
         console.log(error);  
        });
        
      }
    
    },

          
  
 
    getjobs(){
     axios.get("company/publushed_jobs").then((response)=>{
        this.jobs=response.data.data;
     }).catch((error)=>{
         console.log(error);  
     })
    },

    clearError(field) {
      $("#" + field).css("display", "none");
    },

        },
        mounted: function () {
          this.getjobs();
        }
      };
      </script>
          
      