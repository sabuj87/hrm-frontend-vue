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
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Add Employee</h1>
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
          <div class="row">
            <div class="col-lg-12">
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Personal details</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="exampleInputEmail1"
                            >Employee Code *</label
                          >
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                          />
                        </div>
                        <div class="form-group">
                          <label>Gender</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label>Nationality</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Bnagladeshi</option>
                            <option>UK</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="exampleInputEmail1">First Name</label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                          />
                        </div>
                        <div class="form-group">
                          <label>Date of Birth</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group">
                          <label for="exampleInputEmail1">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Middle name</label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                          />
                        </div>
                        <div class="form-group">
                          <label>Matirial Status</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Single</option>
                            <option>Married</option>
                          </select>
                        </div>

                        <div class="form-group">
                          <label for="exampleInputEmail1">Contact no</label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputEmail1"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Last name</label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Alternative number</label
                          >
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>

              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Service details</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label>Department</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Accounts</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label>Date of Confirmation</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputFile">Profile picture</label>
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
                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label>Positions</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Accounts</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label>Contact start date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group">
                          <label>Reporting Authority</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Person</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label>Date of joining</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label>Contact end date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group">
                          <label>Leave section Authority</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Person</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label>Employment Type</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Type 1</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Job location</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>

              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Educational details</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Qualification</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Passing Year</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label>Subjects</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Accounts</option>
                          </select>
                        </div>

                        <div class="form-group">
                          <label for="exampleInputPassword1">Grade</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label>Contact end date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputFile"
                            >Transcript document</label
                          >
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

                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label>Employment Type</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Type 1</option>
                          </select>
                        </div>

                        <div class="form-group">
                          <label for="exampleInputFile"
                            >Certificate document</label
                          >
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
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>

              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Job Details</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="exampleInputPassword1">Title</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputPassword1">Description</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label>Start date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label>End date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label>Expriences</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">1 year</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>

              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Employee Training Details</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="exampleInputPassword1">Title</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label>Start date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label>End date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="exampleInputPassword1">Description</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>

              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Emargency Contact Details</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="exampleInputPassword1">Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputPassword1">Address</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label>Relationship</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Son</option>
                            <option>Father</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="exampleInputPassword1">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Contact Number</label
                          >
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                            min="1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>
       <!-- Certified Memnber Ship -->
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Certified Memnber Ship</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Title of certified License
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >License number
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Start date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>End date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>

              <!-- /. Certified Memnber Ship -->



                <!-- Contact information -->
                <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Contact information(Corespondense Address)</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Post code
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Address
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>


                      
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Address line 1
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Address line 2
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Address line 3
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >County/City
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                       
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Country</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Bangladesh</option>
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
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>
                <!-- other document -->
                <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Other Documents</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Type of documents 
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>

                     
                  
                       
                     
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputFile">Upload documents</label>
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
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>


              <!-- /. Other documents -->


              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Passport details</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Passport No.
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Nationality</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Bangladeshi</option>
                          </select>
                        </div>
                    
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Palce of Birth.
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Issued By
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>


                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Issued date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Expire date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                     
                  
                       
                     
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputFile">Upload document</label>
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
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Remarks.
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>

                 




                  

                   
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>


              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Visa/BRP Details</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >BRP No.
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Nationality</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Bangladeshi</option>
                          </select>
                        </div>
                    
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Country of Residense</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Bangladeshi</option>
                          </select>
                        </div>
                    
                      </div>
                  

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Issued By
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>


                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Issued date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Expire date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                     
                  
                       
                     
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputFile">Upload front side </label>
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

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputFile">Upload back side </label>
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
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Remarks.
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>

                 




                  

                   
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>

              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Time unit details</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Reference No.
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Nationality</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Bangladeshi</option>
                          </select>
                        </div>
                    
                      </div>
                  


                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Issued date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Expire date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Eligible date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>



                     
                  
                       
                     
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputFile">Upload Document </label>
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

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Remarks.
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>

                 




                  

                   
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>

              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">DBS details</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">

                        <div class="col-lg-3">
                        <div class="form-group">
                          <label>DBS Type </label>
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
                          <label for="exampleInputPassword1"
                            >Reference No.
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Nationality</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Bangladeshi</option>
                          </select>
                        </div>
                    
                      </div>
                  


                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Issued date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Expire date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Eligible date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>



                     
                  
                       
                     
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputFile">Upload Document </label>
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

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Remarks.
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>

                 




                  

                   
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>

              
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">National Insurance Number</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">

                        <div class="col-lg-4">
                        <div class="form-group">
                          <label>National Insurance Number </label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Type 1</option>
                          </select>
                        </div>
                    
                      </div>
                  
                     


                     

                   

                  


                     
                  
                       
                     
                   
                     
                 




                  

                   
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>


              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Other  details</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">

                        <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Document Name.
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                  
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Reference No.
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Nationality</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Bangladeshi</option>
                          </select>
                        </div>
                    
                      </div>
                  


                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Issued date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Expire date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Eligible date</label>
                          <div
                            class="input-group date"
                            id="reservationdate"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control datetimepicker-input"
                              data-target="#reservationdate"
                            />
                            <div
                              class="input-group-append"
                              data-target="#reservationdate"
                              data-toggle="datetimepicker"
                            >
                              <div class="input-group-text">
                                <i class="fa fa-calendar"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>



                     
                  
                       
                     
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputFile">Upload Document </label>
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

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Remarks.
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>

                 




                  

                   
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Pay details</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">

                        <div class="col-lg-3">
                        <div class="form-group">
                          <label>Pay Group </label>
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
                          <label>Anual Pay </label>
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
                          <label>Wadges Pay Mood </label>
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
                          <label>Payment Type </label>
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
                          <label for="exampleInputPassword1"
                            >Daily Wadges.
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Min work hour.
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Rate.
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Tax code </label>
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
                          <label for="exampleInputPassword1"
                            >Tax Referance.
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Tax Percentage.
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Payment mood </label>
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
                          <label>Select Bank </label>
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
                          <label for="exampleInputPassword1"
                            >Branch Name.
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Account No.
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Short Code.
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>

                           <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputPassword1"
                            >Short Code.
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Payment currency</label>
                          <select
                            class="form-control select2"
                            style="width: 100%"
                          >
                            <option selected="selected">Type 1</option>
                          </select>
                        </div>
                    
                      </div>
                  
                  
                  
                  
                  
                  
                  


                    
                    
                  


                     
                  
                       
                     
                 

                 




                  

                   
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>



              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Payment structure</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">

                        <div class="col-lg-3">
                            <div class="form-group clearfix">
                  
                      <div class="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary3" >
                        <label for="checkboxPrimary3">
                          Dearness Allowance
                        </label>
                      </div>
                    </div>
                      </div>
                      <div class="col-lg-3">
                            <div class="form-group clearfix">
                     
                      
                      <div class="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary3" >
                        <label for="checkboxPrimary3">
                            Houserent Allowance
                        </label>
                      </div>
                    </div>
                      </div>
                      <div class="col-lg-3">
                            <div class="form-group clearfix">
                  
                      <div class="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary3" >
                        <label for="checkboxPrimary3">
                          Conveyance Allowance
                        </label>
                      </div>
                    </div>
                      </div>
                      <div class="col-lg-3">
                            <div class="form-group clearfix">
                  
                      <div class="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary3" >
                        <label for="checkboxPrimary3">
                            Performance Allowance
                        </label>
                      </div>
                    </div>
                      </div>
                      <div class="col-lg-3">
                            <div class="form-group clearfix">
                  
                      <div class="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary3" >
                        <label for="checkboxPrimary3">
                            Monthly Fixed Allowance
                        </label>
                      </div>
                    </div>
                      </div>
                  
                   
                  
                   
                  
                   
                    
                  


                

                    

                   



                     
                  
                       
                     

               



                  

                   
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>

              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Deduction</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">

                        <div class="col-lg-3">
                            <div class="form-group clearfix">
                  
                      <div class="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary3" >
                        <label for="checkboxPrimary3">
                       NI  Deduction
                        </label>
                      </div>
                    </div>
                      </div>
                      <div class="col-lg-3">
                            <div class="form-group clearfix">
                     
                      
                      <div class="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary3" >
                        <label for="checkboxPrimary3">
                            Tax Deduction
                        </label>
                      </div>
                    </div>
                      </div>
                      <div class="col-lg-3">
                            <div class="form-group clearfix">
                  
                      <div class="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary3" >
                        <label for="checkboxPrimary3">
                            Tax Cess
                        </label>
                      </div>
                    </div>
                      </div>
                      <div class="col-lg-3">
                            <div class="form-group clearfix">
                  
                      <div class="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary3" >
                        <label for="checkboxPrimary3">
                            ESI
                        </label>
                      </div>
                    </div>
                      </div>
                      <div class="col-lg-3">
                            <div class="form-group clearfix">
                  
                      <div class="icheck-primary d-inline">
                        <input type="checkbox" id="checkboxPrimary3" >
                        <label for="checkboxPrimary3">
                           Prof Tax
                        </label>
                      </div>
                    </div>
                      </div>
                  
                   
                  
                   
                  
                   
                    
                  


                

                    

                   



                     
                  
                       
                     

               



                  

                   
                    </div>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>

              

              <button type="submit" class="btn btn-success mb-3 px-3"  >Submit</button>




              <!-- /. Other documents -->


            </div>
          </div>
        </div>
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <footer-view></footer-view>
    <!-- Control Sidebar -->
    <control-sidebar-view></control-sidebar-view>
    <!-- /.control-sidebar -->
  </div>
</template>
    
    <script>
import SidebarView from "@/views/dashboard_pages/companyadmin/SidebarView.vue";
import NavbarView from "@/views/dashboard_pages/companyadmin/NavbarView.vue";
import FooterView from "@/views/dashboard_pages/companyadmin/FooterView.vue";
import ControlSidebarView from "@/views/dashboard_pages/companyadmin/ControlSidebarView.vue";
export default {
  name: "AddEmployeeView",
  components: { SidebarView, NavbarView, FooterView, ControlSidebarView },

  data() {
    return {
      name: "",
    };
  },

  methods: {
    userInfo() {},
  },

  mounted: function () {
    this.name = JSON.parse(localStorage.getItem("user")).user.name;
  },
};
</script>
    