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
              <h1 class="m-0">Profile</h1>
            </div>
            <!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Dashboard v1</li>
              </ol>
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
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Basic Information
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
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Name of organization* </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Type of organization</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Type 1</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Registration Number. </label>
                        <input type="number" min="0" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Contact Number </label>
                        <input type="number" min="0" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label> Signin Email </label>
                        <input type="email" min="0" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label> Email of Organisation </label>
                        <input type="email" min="0" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label> Web link </label>
                        <input type="text" min="0" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label> Telephone Number </label>
                        <input type="text" min="0" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label> Name of Trading </label>
                        <input type="text" min="0" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Period in Trading </label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Trading 1</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Name of sector</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">
                            Information and communication
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Changed orgnization</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Yes</option>
                          <option selected="selected">No</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label for="exampleInputPassword1">Details info </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Faced Penalty?</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Yes</option>
                          <option selected="selected">No</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label for="exampleInputFile">Logo</label>
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
                  </div>

                  <div>
                    <button class="btn btn-sm btn-primary mr-2">Save</button>
                    <button class="btn btn-sm btn-warning">Next</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Authorized Person Details
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>First name* </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Last name </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Designation </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Phone No </label>
                        <input type="number" min="0" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Email </label>
                        <input type="email" class="form-control" />
                      </div>
                    </div>
                  

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label for="exampleInputFile">Photo</label>
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
                  </div>

                  <div>
                    <button class="btn btn-sm btn-primary mr-2">Save</button>
                    <button class="btn btn-sm btn-warning">Next</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Key contact
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                    <div class="row">
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>First name* </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Last name </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Designation </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Phone No </label>
                        <input type="number" min="0" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Email </label>
                        <input type="email" class="form-control" />
                      </div>
                    </div>
                      <div class="col-lg-3">
                      <div class="form-group">
                        <label>Any Criminal History</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Yes</option>
                          <option selected="selected">No</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label for="exampleInputFile">Photo</label>
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
                  </div>

                  <div>
                    <button class="btn btn-sm btn-primary mr-2">Save</button>
                    <button class="btn btn-sm btn-warning">Next</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingfive">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsefive"
                    aria-expanded="false"
                    aria-controls="collapsefive"
                  >
                  Lavel 1 user
                  </button>
                </h2>
              </div>
              <div
                id="collapsefive"
                class="collapse"
                aria-labelledby="headingfive"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                    <div class="row">
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>First name* </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Last name </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Designation </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Phone No </label>
                        <input type="number" min="0" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Email </label>
                        <input type="email" class="form-control" />
                      </div>
                    </div>
                      <div class="col-lg-3">
                      <div class="form-group">
                        <label>Any Criminal History</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Yes</option>
                          <option selected="selected">No</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label for="exampleInputFile">Photo</label>
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
                  </div>

                  <div>
                    <button class="btn btn-sm btn-primary mr-2">Save</button>
                    <button class="btn btn-sm btn-warning">Next</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingfour">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsefour"
                    aria-expanded="false"
                    aria-controls="collapsefour"
                  >
                  Company Address
                  </button>
                </h2>
              </div>
              <div
                id="collapsefour"
                class="collapse"
                aria-labelledby="headingfour"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                    <div class="row">
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Post Code*</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Address line 1 </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Address line 2 </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Address line 3 </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>City/county</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                  
                      <div class="col-lg-3">
                      <div class="form-group">
                        <label>Country</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">BD</option>
                          <option selected="selected">UK</option>
                        </select>
                      </div>
                    </div>

                 
                  </div>

                  <div>
                    <button class="btn btn-sm btn-primary mr-2">Save</button>
                    <button class="btn btn-sm btn-warning">Next</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingsix">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsesix"
                    aria-expanded="false"
                    aria-controls="collapsesix"
                  >
                  Trading hour
                  </button>
                </h2>
              </div>
              <div
                id="collapsesix"
                class="collapse"
                aria-labelledby="headingsix"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                    <div class="row">
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Day</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Status</label>
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Open</option>
                          <option selected="selected">Close</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Opening Time</label>
                        <input type="time" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Closing Time</label>
                        <input type="time" class="form-control" />
                      </div>
                    </div>



                    <div class="col-lg-3">
                      <div class="form-group">
                  
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                      
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Open</option>
                          <option selected="selected">Close</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                    
                        <input type="time" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                   
                        <input type="time" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                  
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                      
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Open</option>
                          <option selected="selected">Close</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                    
                        <input type="time" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                   
                        <input type="time" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                  
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                      
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Open</option>
                          <option selected="selected">Close</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                    
                        <input type="time" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                   
                        <input type="time" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                  
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                      
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Open</option>
                          <option selected="selected">Close</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                    
                        <input type="time" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                   
                        <input type="time" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                  
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                      
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Open</option>
                          <option selected="selected">Close</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                    
                        <input type="time" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                   
                        <input type="time" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                  
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                      
                        <select
                          class="form-control select2"
                          style="width: 100%"
                        >
                          <option selected="selected">Open</option>
                          <option selected="selected">Close</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                    
                        <input type="time" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                   
                        <input type="time" class="form-control" />
                      </div>
                    </div>

                    



               

            

                  
                 
                 
                  </div>

                  <div>
                    <button class="btn btn-sm btn-primary mr-2">Save</button>
                    <button class="btn btn-sm btn-warning">Next</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="headingseven">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseseven"
                    aria-expanded="false"
                    aria-controls="collapseseven"
                  >
                  Upload documents
                  </button>
                </h2>
              </div>
              <div
                id="collapseseven"
                class="collapse"
                aria-labelledby="headingseven"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                    <div class="row">
                    
                 

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Document Name </label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label for="exampleInputFile">File</label>
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
                   
                  
                   

                 
                  </div>

                  <div>
                    <button class="btn btn-sm btn-primary mr-2">Save</button>
                    <button class="btn btn-sm btn-warning">Next</button>
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
export default {};
</script>

