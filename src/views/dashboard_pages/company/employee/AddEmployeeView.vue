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
              <div class="col-sm-6">
                <h1 class="m-0 pc">Add Employee</h1>
              </div>
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
  
  
        
     
  
              <div class="col-lg-8">
  
                <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Basic Information
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div class="row">
                      
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>First Name *</label>
                          <input v-model="first_name" @input="clearError('first_name')" type="text" class="form-control" />
                          <sapn id="first_name" class="error" ></sapn>
                        
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Middle Name </label>
                          <input v-model="middle_name" type="text" class="form-control" />
                        </div>
                      </div>
  
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Last Name </label>
                          <input v-model="last_name" type="text" class="form-control" />
                        </div>
                      </div>
  
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Father's Name *</label>
                          <input v-model="father_name"  @input="clearError('father_name')" type="text" min="0" class="form-control" />
                          <sapn id="father_name" class="error" ></sapn>
  
                        </div>
                      </div>
  
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Mother's Name </label>
                          <input v-model="mother_name" type="text" min="0" class="form-control" />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Email* </label>
                          <input v-model="email"  @input="clearError('email')" type="email" min="0" class="form-control" />
                          <sapn id="email" class="error" ></sapn>
  
                        </div>
                      </div>
                  
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Gender</label>
<select class="custom-select " style="width: 100%;height: 30px !important;padding:0px !important;padding-left: 5px !important">
  <option>Select</option>
  <option>Male</option>
  <option>Female</option>
  <option>Other</option>


</select>
                        </div>
                      </div>
  
  
                   
  
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Date of Birth * </label>
                          <input v-model="dob"  @input="clearError('dob')" type="date"  class="form-control" />
                          <sapn id="dob" class="error" ></sapn>
  
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Contact Number *</label>
                          <input v-model="contact_number"  @input="clearError('contact_number')" type="number" min="0" class="form-control" />
                          <sapn id="contact_number" class="error" ></sapn>
  
                        </div>
                      </div>
                     
  
                      <div class="col-lg-3">
                        <label for="file-input" style="height: 100px;width:100px;background-color: #dedede;padding:30px" >Select photo</label>
                        <input style="display:none" id="file-input" type="file">
                        
                      
                      </div>
  
                    
                    </div>
                  
        </div>
  
        
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header" id="headingem">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseem" aria-expanded="false" aria-controls="collapseem">
           Employment Details 
        </button>
      </h2>
      <div id="collapseem" class="accordion-collapse collapse" aria-labelledby="headingem" data-bs-parent="#accordionExample">
        <div class="accordion-body">
  
  
          <div class="row">
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Department</label>
                          <select
                            v-model="department_id"
                            class="form-control "
                            style="width: 100%"
                            @change="departmentpostions()"
                          >Positions
                            <option disabled value=null>Select a Department</option>
                            <option v-for="department in departments" :key="department" :value="department.id">{{department.department_name}}</option>

                          </select>
                          <p class="text-danger mt-1" v-if="errors.department_id" >{{ errors.department_id[0] }}</p>

                          
  
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Position</label>
                          <select
                            v-model="position_id"
                            class="form-control "
                            style="width: 100%"
                            @change="getlevel()"
                          >
                            <option disabled value=null>Select a Position</option>
                            <option v-for="position in positions" :key="position" :value="position.id">{{position.position_name}}</option>

                          </select>
                          <p class="text-danger mt-1" v-if="errors.position_id" >{{ errors.position_id[0] }}</p>

                         
                        </div>
                      </div>
                  

                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Assign Under</label>
                          <select
                            v-model="assigned_under"
                            class="form-control"
                        
                            style="width: 100%"
                          >
                            <option disabled value=null>Select a position</option>
                            <option v-for="position in newpostiions" :key="position" :value="position.id">{{position.position_name}}</option>

                          </select>
                          <sapn id="degree" class="error" ></sapn>
  
                        </div>
                      </div>
                    
                    
  
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Joining Date</label>
                          <input
                            v-model="joining_date"
                            type="date"
                            class="form-control"
                            @input="clearError('passing')"
                            
                          />
                          <sapn id="passing" class="error" ></sapn>
  
                        </div>
                      </div>


                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Grade</label>
                          <select
                            v-model="grade_id"
                            class="form-control"
                        
                            style="width: 100%"
                          >
                            <option disabled value=null>Select a grade</option>
                            <option v-for="grade in grades" :key="grade" :value="grade.id">{{grade.grade_name}}</option>

                          </select>
                          <sapn id="degree" class="error" ></sapn>
  
                        </div>
                      </div>
                  
  
                     
  
                    </div>
  
                   
  
                    <div>
                      <button @click.prevent="addbasicinfo" class="btn-sc-wd mr-2">Create</button>
                      <button class="btn-pc-wd " data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Next</button>
                    </div>
  
  
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           Education 
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
  
  
          <div class="row">
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Degree*</label>
                          <select
                            v-model="degree"
                            class="form-control "
                            style="width: 100%"
                            @change="clearError('degree')"
                          >
                            <option selected="selected">SSC</option>
                            <option>HSC</option>
                            <option>Bachalor</option>
                            <option>Masters</option>
                          </select>
                          <sapn id="degree" class="error" ></sapn>
  
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Mejor</label>
                          <input
                            v-model="field"
                            type="text"
                            class="form-control"
                            @input="clearError('field')"
                          />
                          <sapn id="field" class="error" ></sapn>
  
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Institute </label>
                          <input
                            v-model="institute"
                            type="text"
                            class="form-control"
                            @input="clearError('institute')"
                          />
                          <sapn id="institute" class="error" ></sapn>
  
                        </div>
                      </div>
  
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Passing year </label>
                          <input
                            v-model="passing"
                            type="text"
                            class="form-control"
                            @input="clearError('passing')"
                            
                          />
                          <sapn id="passing" class="error" ></sapn>
  
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Result/Grade</label>
                          <input
                            v-model="result"
                            type="text"
                            class="form-control"
                            @input="clearError('result')"
                          />
                          <sapn id="result" class="error" ></sapn>
  
                        </div>
                      </div>
  
                      <div class="col-lg-5">
                        <div class="form-group">
                          <label for="exampleInputFile">Certificate(PDF)</label>
                          <div class="input-group">
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
                          </div>
                        </div>
                      </div>
  
                      <div class="col-1 pt-1">
                        <button
                          @click="addeducation"
                          type="button"
                          class="btn btn-default btn-sm mt-4 mb-4"
                        >
                        <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
  
                    <table v-if="educations.length>0" class="table text-center table-bordered">
                      <thead>
                        <tr>
                          <th style="width: 10px">#</th>
                          <th>Degree</th>
                          <th>Field</th>
                          <th>Institute</th>
                          <th>Passing year</th>
                          <th>Result</th>
                          <th>Certificate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="education in educations" :key="education">
                          <td>1.</td>
                          <td>{{ education.degree }}</td>
                          <td>{{ education.field }}</td>
                          <td>{{ education.institute }}</td>
                          <td>{{ education.passing }}</td>
                          <td>{{ education.result}}</td>
                        
                        </tr>
                      </tbody>
                    </table>
  
                    <div class="mt-3">
                      <button @click.prevent="addeducationall" class="btn-sc-wd mr-2">Save</button>
                      <button class="btn-pc-wd " data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Next</button>
                    </div>
  
  
  
        </div>
      </div>
    </div>

  
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Work Exprience
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
  
          <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Company Name*</label>
                          <input v-model="cname" @input="clearError('cname')" type="text" class="form-control" />
                          <span id="cname" class="error" ></span>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Address* </label>
                          <input v-model="caddress" @input="clearError('caddress')" type="text" class="form-control" />
                          <span id="caddress" class="error" ></span>
  
                        </div>
                      </div>
  
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Designation* </label>
                          <input v-model="designation" @input="clearError('designation')" type="text" class="form-control" />
                          <span id="designation" class="error" ></span>
  
                        </div>
                      </div>
  
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Work from* </label>
                          <input v-model="workfrom" @input="clearError('workfrom')" type="date" min="0" class="form-control" />
                          <span id="workfrom" class="error" ></span>
  
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Work till* </label>
                          <input v-model="worktill" @input="clearError('worktill')" type="date" class="form-control" />
                          <span id="worktill" class="error" ></span>
  
                        </div>
                      </div>
                      <div class="col-lg-7">
                        <div class="form-group">
                          <label>Responsiblity</label>
                          <input v-model="responsiblity" type="text" class="form-control" />
  
                      
                        </div>
                      </div>
  
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label for="exampleInputFile">Document</label>
                          <div class="input-group">
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
                          </div>
                        </div>
                      </div>
                      <div class="col-1 pt-1">
                        <button
                          @click="addwork"
                          type="button"
                          class="btn btn-default btn-sm mt-4 mb-4"
                        >
                        <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
  
                    </div>
  
                    
                    <table v-if="works.length>0" class="table text-center table-bordered">
                      <thead>
                        <tr>
                          <th style="width: 10px">#</th>
                          <th>Company Name</th>
                          <th>Address</th>
                          <th>Designation</th>
                          <th>Work from</th>
                          <th>Work till</th>
                          <th>Responsiblity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="work in works" :key="work">
                          <td>1.</td>
                          <td>{{ work.cname }}</td>
                          <td>{{ work.caddress }}</td>
                          <td>{{ work.designation }}</td>
                          <td>{{ work.workfrom }}</td>
                          <td>{{ work.worktill }}</td>
                          <td>{{ work.responsiblity}}</td>
                  
                        
                        </tr>
                      </tbody>
                    </table>
  
  
  
  
                    <div class="mt-3">
                      <button @click.prevent="addworkall" class="btn-sc-wd mr-2">Save</button>
                      <button class="btn-pc-wd " data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Next</button>
                    </div>
  
          
        </div>
      </div>
    </div>
  
  
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Traning
        </button>
      </h2>
      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Name</label>
                          <input v-model="tname" @input="clearError('tname')"  type="text" class="form-control" />
                          <span id="tname" class="error" ></span>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Organization</label>
                          <input v-model="torg" @input="clearError('torg')" type="text" class="form-control" />
                          <span id="torg" class="error" ></span>
                        </div>
                      </div>
  
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>From</label>
                          <input v-model="tfrom" @input="clearError('tfrom')" type="date" class="form-control" />
                          <span id="tfrom" class="error" ></span>
  
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Till</label>
                          <input @input="clearError('ttill')"  v-model="ttill" type="date" class="form-control" />
                          <span id="ttill" class="error" ></span>
  
                        </div>
                      </div>
  
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label for="exampleInputFile">Document(Pdf)</label>
                          <div class="input-group">
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
                          </div>
                        </div>
                      </div>
  
                      <div class="col-1 pt-1">
                        <button
                          @click="addt"
                          type="button"
                          class="btn btn-default btn-sm mt-4 mb-4"
                        >
                        <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    
                    </div>
                    <table v-if="tras.length>0" class="table text-center table-bordered">
                      <thead>
                        <tr>
                          <th style="width: 10px">#</th>
                          <th>Name</th>
                          <th>Organization</th>
                          <th>From</th>
                          <th>Till</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="tra in tras" :key="tra">
                          <td>1.</td>
                          <td>{{ tra.tname }}</td>
                          <td>{{ tra.torg }}</td>
                          <td>{{ tra.tfrom }}</td>
                          <td>{{ tra.ttill }}</td>
                     
                  
                  
                        
                        </tr>
                      </tbody>
                    </table>
                 
  
                    <div class="mt-2">
                      <button @click.prevent="addtraall" class="btn-sc-wd mr-2">Save</button>
                      <button class="btn-pc-wd " data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Next</button>
                    </div>
          
        </div>
      </div>
    </div>
  
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          Visa and work permit
        </button>
      </h2>
      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body">
  
          <div class="row">
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Orgine Country*</label>
                          <input v-model="orgine_country" @input="clearError('orgine_country')" type="text" class="form-control" />
                          <span id="orgine_country" class="error" ></span>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Passport No*</label>
                          <input v-model="passport_no" @input="clearError('passport_no')" type="text" class="form-control" />
                          <span id="passport_no" class="error" ></span>
                        </div>
                      </div>
  
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Reference Number</label>
                          <input v-model="reference_number" type="number" class="form-control" />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Visa Issue date*</label>
                          <input type="date" v-model="visa_issue_date" @input="clearError('visa_issue_date')" class="form-control" />
                          <span id="visa_issue_date" class="error" ></span>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Visa Expri date*</label>
                          <input type="date"  @input="clearError('visa_expri_date')" v-model="visa_expri_date"  class="form-control" />
                          <span id="visa_expri_date" class="error" ></span>
  
                        </div>
                      </div>
  
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Visa Issue in country*</label>
                          <select
                            v-model="visa_issue_in_country"
                            class="form-control "
                            @change="clearError('visa_issue_in_country')"
                            style="width: 100%"
                          >
                            <option selected="selected">Bangladesh</option>
                            <option>UK</option>
                            <option>USA</option>
                          </select>
                          <span id="visa_issue_in_country" class="error" ></span>
  
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Visa Category</label>
                          <select
                          v-model="visa_category"
                            class="form-control "
                            style="width: 100%"
                            @change="clearError('visa_category')"
                          >
                            <option selected="selected">Student</option>
                            <option>Work</option>
                            <option>Toriest</option>
                          </select>
                          <span id="visa_category" class="error" ></span>
                        </div>
                      </div>
                    </div>
  
                    <div  >
                      <button @click.prevent="addvisa" class="btn-sc-wd mr-2">Save</button>
                      <button class="btn-pc-wd " data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Next</button>
                    </div>
          
          
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingSix">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
          Upload documents
        </button>
      </h2>
      <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
        <div class="accordion-body">
  
          
        </div>
      </div>
    </div>
  
  </div>
  
  
  
  </div>
  
  
              <div class="col-lg-4">
  
                <div class="card">
                <div class="card-header " id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link pc btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      User Info
                    </button>
                  </h2>
                </div>
  
                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                   
                    <div class="row">
                    
  
  
                   
                    </div>
  
                 
                  </div>
                </div>
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
        educations: [],
        departments: [],
        positions: [],
        newpostiions:[],
        levels: [],
        works:[],
        cers:[],
        tras:[],
        errors:"",
        department_id:null,
        position_id:null,
        level_id:null,
        assigned_under:null,
        grades:[],
        grade_id:null,

      };
    },
    methods: {
      addeducation() {
  
        var validator = new Validator();
      var error = validator.validated([
  
      { field: "degree", value: this.degree, type: "required" },
      { field: "field", value: this.field, type: "required" },
      { field: "institute", value: this.institute, type: "required" },
      { field: "passing", value: this.passing, type: "required" },
      { field: "result", value: this.result, type: "required" },
  
  
      ]);
  
      if (error) {
        console.log(error);
      }else{
        var education = {
          degree: this.degree,
          field: this.field,
          institute: this.institute,
          passing: this.passing,
          result: this.result,
        };
        this.educations.push(education);
  
  
      }
     
      },
      addwork() {
  
      var validator = new Validator();
      var error = validator.validated([
  
      { field: "cname", value: this.cname, type: "required" },
      { field: "caddress", value: this.caddress, type: "required" },
      { field: "designation", value: this.designation, type: "required" },
      { field: "workfrom", value: this.workfrom, type: "required" },
      { field: "worktill", value: this.worktill, type: "required" },
  
  
      ]);
  
      if (error) {
        console.log(error);
      }else{
        var work = {
          cname: this.cname,
          caddress: this.caddress,
          designation: this.designation,
          workfrom: this.workfrom,
          worktill: this.worktill,
          responsiblity: this.responsiblity,
        };
        this.works.push(work);
      }
       
      },
      addcer() {
        var cer = {
          cername: this.cername,
          cerissuedate: this.cerissuedate,
          cerdetails: this.cerdetails,
  
        };
        this.cers.push(cer);
      },
      addt() {
  
        var validator = new Validator();
      var error = validator.validated([
  
      { field: "tname", value: this.tname, type: "required" },
      { field: "torg", value: this.torg, type: "required" },
      { field: "tfrom", value: this.tfrom, type: "required" },
      { field: "ttill", value: this.ttill, type: "required" },
  
  
      ]);
  
      if (error) {
        console.log(error);
      }else{
        var tra = {
          tname: this.tname,
          torg: this.torg,
          tfrom: this.tfrom,
          ttill: this.ttill,
  
  
        };
        this.tras.push(tra);
      }
        
      },
  
      addbasicinfo(){
        
     
        var validator = new Validator();
      var error = validator.validated([
  
      { field: "first_name", value: this.first_name, type: "required" },
      { field: "father_name", value: this.father_name, type: "required" },
      { field: "email", value: this.email, type: "required|email" },
      { field: "dob", value: this.dob, type: "required" },
      { field: "contact_number", value: this.contact_number, type: "required" },
  
  
      ]);
  
      if (error) {
        console.log(error);
      }else{
    
      var basic_info={
          "first_name":this.first_name,
          "middle_name":this.middle_name,
          "last_name":this.last_name,        
          "father_name":this.father_name,        
          "mother_name":this.mother_name,        
          "email":this.email,        
          "dob":this.dob,        
          "contact_number":this.contact_number,        
          "logo":"",
  
      }
  
      axios
          .post("/company/employees", {
           
            basic_information:JSON.stringify(basic_info),
            company_department_id:this.department_id,
            position_id:this.position_id,
            grade_id:this.grade_id,
            assigned_under:this.assigned_under,

          })
          .then((response) => {
  
            if(response){
              alert(response.data.message)
              this.$router.push({name: 'administrative-employees'})
             
             
            }
  
  
  
           
  
          }).catch((error)=>{
             
  
           this.errors=error.response.data.errors
  
        
  
        
  
          
          })
         
  
  
  
  
  
  
  
      }
  
  
   
  
  
      },
  
      addeducationall(){
        
     
    
  
      if (this.educations.length==0) {
        alert("Add education first")
      }else{
    
   
  
      axios
         .post("/company/employees", {
            educations:JSON.stringify(this.educations),
           
          })
          .then((response) => {
  
            if(response){
              alert(response.data.message)
             
             
            }
  
  
  
           
  
          }).catch((error)=>{
             
  
           this.errors=error.response.data.errors
  
        
  
        
  
          
          })
         
  
  
  
  
  
  
  
      }
  
  
   
  
  
      },
  
      addworkall(){
        
     
    
  
        if (this.works.length==0) {
          alert("Add a work first")
        }else{
      
     
    
        axios
            .put("/employee/profiles/3", {
              user_id: "3",
              expreriences:JSON.stringify(this.works),
             
            })
            .then((response) => {
    
              if(response){
                alert(response.data.message)
               
               
              }
    
    
    
             
    
            }).catch((error)=>{
               
    
             this.errors=error.response.data.errors
    
          
    
          
    
            
            })
           
    
    
    
    
    
    
    
        }
    
    
     
    
    
        },

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
    getposition() {
      axios
        .get("/company/positions")
        .then((response) => {
          if (response) {
            
            this.positions = response.data.data;

            
        }
        })
        .catch((error) => {
          console.log(error);
          
        });
    },

    departmentpostions() {
  
      axios
        .get("/company/positions/department/"+this.department_id)
        .then((response) => {
          if (response) {
            
            this.positions = response.data.data;

          
        }
        })
        .catch((error) => {
          console.log(error);
          
        });
    },
    levelpostions() {

      let level = this.levels.find(el => el.id === this.level_id);

      var level_name=level.level_name
      const myArray = level_name.split(" ")
      var levelid=myArray[1]-1;
      
      if(levelid>0){
        var newlevelname="Level "+levelid
      
        var newlevel=this.levels.find(el => el.level_name === newlevelname)
        alert(newlevel)
        this.newpostiions=[]
        for(let i=0;i<this.positions.length;i++){
          if(this.positions[i].level_id==newlevel.id){
            this.newpostiions.push(this.positions[i])
 
          }
        }
     
      }else{
        this.newpostiions=[]
      }





  
    },
    getlevel() {
      axios
        .get("/company/levels")
        .then((response) => {
          if (response) {
            
            this.levels = response.data.data;


            let position = this.positions.find(el => el.id === this.position_id);

            var level = this.levels.find(el => el.id === position.level_id);


var level_name=level.level_name
const myArray = level_name.split(" ")
var levelid=myArray[1]-1;

if(levelid>0){
  var newlevelname="Level "+levelid
  


  var newlevel=this.levels.find(el => el.level_name === newlevelname)
  
  this.newpostiions=[]
  for(let i=0;i<this.positions.length;i++){
    if(this.positions[i].level_id==newlevel.id){
      this.newpostiions.push(this.positions[i])

    }
  }

}else{
  this.newpostiions=[]
}



            
        }
        })
        .catch((error) => {
          console.log(error);
          
        });
    },


  
        addtraall(){
        
     
    
  
        if (this.tras.length==0) {
          alert("Add a tranig first")
        }else{
      
     
    
        axios
            .put("/employee/profiles/3", {
              user_id: "3",
              tranings:JSON.stringify(this.tras),
             
            })
            .then((response) => {
    
              if(response){
                alert(response.data.message)
               
               
              }
    
    
    
             
    
            }).catch((error)=>{
               
    
             this.errors=error.response.data.errors
    
          
    
          
    
            
            })
           
    
    
    
    
    
    
    
        }
    
    
     
    
    
        },
  
        addvisa(){
        
     
        var validator = new Validator();
      var error = validator.validated([
  
      { field: "orgine_country", value: this.orgine_country, type: "required" },
      { field: "passport_no", value: this.passport_no, type: "required" },
      { field: "visa_issue_date", value: this.visa_issue_date, type: "required" },
      { field: "visa_expri_date", value: this.visa_expri_date, type: "required" },
      { field: "visa_issue_in_country", value: this.visa_issue_in_country, type: "required" },
      { field: "visa_category", value: this.visa_category, type: "required" },
  
  
      ]);
  
      if (error) {
        console.log(error);
      }else{
    
      var visa={
          "orgine_country":this.orgine_country,
          "passport_no":this.passport_no,
          "reference_number":this.reference_number,        
          "visa_issue_date":this.visa_issue_date,        
          "visa_expri_date":this.visa_expri_date,        
          "visa_issue_in_country":this.visa_issue_in_country,        
          "visa_category":this.visa_category,             
          "logo":"",
  
      }
  
      axios
          .put("/employee/profiles/3", {
            user_id: "3",
            visas:JSON.stringify(visa),
           
          })
          .then((response) => {
  
            if(response){
              alert(response.data.message)
             
             
            }
  
  
  
           
  
          }).catch((error)=>{
             
  
           this.errors=error.response.data.errors
  
        
  
        
  
          
          })
         
  
  
  
  
  
  
  
      }
  
  
   
  
  
      },
      
      clearError(field) {
        $("#" + field).css("display", "none");
        
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
      this.getdepartment()
      this.getgrades()

   
    }
  };
  </script>
    
    