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
            <!-- <div class="col-sm-6">
              <h1 class="m-0">Attendance</h1>
            </div> -->
            <!-- /.col -->
            <!-- <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div> -->
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
                  <h3 class="card-title">Add Department</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label class="sc"> Department name </label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="department_name"
                            @input="errors.department_name = null"
                          />
                          <p
                            class="text-danger mt-1"
                            v-if="errors.department_name"
                          >
                            {{ errors.department_name[0] }}
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-2">
                        <div class="form-group">
                          <label class="sc">Status</label>
                          <select
                            v-model="attendance"
                            class="form-custom-select"
                            style="width: 100%"
                          >
                            <option selected>Enable</option>
                            <option>Disable</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button
                      @click.prevent="adddepartment"
                      type="button"
                      class="btn-sc mb-4"
                    >
                      Submit
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
    <!-- /.content-wrapper -->
  </div>
</template>
    
    <script>
import $ from "jquery";
import axios from "axios";
export default {
  data() {
    return {
      errors: {},
    };
  },
  methods: {
    adddepartment() {
      axios
        .post("/company/departments", {
          department_name: this.department_name,
          status: this.status,
        })
        .then((response) => {
          if (response) {
            alert(response.data.message);
            $(".form-control").val("");
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
    