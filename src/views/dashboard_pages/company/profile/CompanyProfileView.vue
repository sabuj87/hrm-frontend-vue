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
                <!-- /.card-header -->
                <!-- form start -->

                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-1">
                      <img
                        src="/assets/images/logo/user.png"
                        alt="logo"
                        class="text-center"
                        style="height: 50px; width: 50px"
                      />
                    </div>
                    <div class="col-lg-6">
                      <h5>{{ basic_information.company_name }}</h5>
                      <p>{{ basic_information.sigin_email }}</p>
                    </div>
                    <div class="col-lg-5">
                      <router-link
                        class="float-right mt-3"
                        :to="{ name: 'company-profile-update' }"
                      >
                        <span class="btn-sc-sm">Update</span>
                      </router-link>
                    </div>
                  </div>
                </div>

                <!-- /.card-body -->
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card card-primary">
                <!-- /.card-header -->
                <!-- form start -->

                <div class="card-body">
                  <div class="row">
                
                    <div class="col-lg-12">
                      <h5>Basic Info</h5>
                
                      <p><strong> Company Name :</strong> {{ basic_information.company_name }}</p>
                      <p><strong> Email :</strong> {{ basic_information.sigin_email }}</p>
                      <p><strong> Registration Number :</strong> {{ basic_information.registration_number }}</p>
                      <p><strong> Company Name :</strong> {{ basic_information.company_name }}</p>
                      <p><strong> Company Name :</strong> {{ basic_information.company_name }}</p>
                      <p><strong> Company Name :</strong> {{ basic_information.company_name }}</p>
                    </div>
                 
                  </div>
                </div>

                <!-- /.card-body -->
              </div>
            </div>


          </div>
        </div>
        <div class="bs-stepper"></div>
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
      profile: "",
      uuid: "",
      email: "",
      basic_information: "",
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
    getProfile(uuid) {
      if (uuid) {
        axios
          .get("company/profiles/" + uuid)
          .then((response) => {
            if (response) {
              this.profile = response.data.company;
              this.basic_information = JSON.parse(
                this.profile.basic_information
              );
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  mounted: function () {
    this.uuid = JSON.parse(localStorage.getItem("user")).user.uuid;
    this.getProfile(this.uuid);
  },
};
</script>
      