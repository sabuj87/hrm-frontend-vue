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
                        :src="imageUrl"
                        alt="logo"
                        class="text-center"
                        style="height: 50px; width: 50px"
                      />
                    </div>
                    <div class="col-lg-6">
                      <h5>{{ basic_information.company_name }}</h5>
                      <p>{{ basic_information.company_email }}</p>
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
                      <p><strong> Email :</strong> {{ basic_information.company_email }}</p>
                      <p><strong> Registration Number :</strong> {{ basic_information.registration_number }}</p>
                      <p><strong> Contact Number :</strong> {{ basic_information.company_name }}</p>
                      <p><strong> Website :</strong> {{ basic_information.website }}</p>
                      <p><strong> Telephone :</strong> {{ basic_information.telephone_number }}</p>
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
                      <h5>Authorised Person</h5>
                
                      <p><strong>Name :</strong> {{ auth_person.auth_first_name }} {{ auth_person.auth_last_name }}</p>
                      <p><strong>Email :</strong> {{ auth_person.auth_email }}</p>
                      <p><strong>Designation :</strong> {{ auth_person.auth_designation }}</p>
                      <p><strong>Phone No :</strong> {{ auth_person.auth_phone_no }}</p>
                      <p><strong>Company Name :</strong> {{ basic_information.company_name }}</p>
                      <p><strong>Company Name :</strong> {{ basic_information.company_name }}</p>
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
                      <h5>Address</h5>
                
                      <p><strong> Post code :</strong> {{ company_address.post_code }}</p>
                      <p><strong> Address line :</strong> {{ company_address.address_line_1 }}</p>
                      <p><strong> City :</strong> {{ company_address.city }}</p>

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
      profile: {},
      imageUrl: "",

      uuid: "",
      email: "",
      basic_information: {},
      auth_person: {},
      key_person: "",
      levelone: "",
      company_address:{},
      trade_day: "",
      company_categories: "",
      company_sectors: "",
      countries:"",
      company_hour:{}
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
              if (this.profile.basic_information != null) {
                this.basic_information = JSON.parse(
                  this.profile.basic_information
                );
              }
              if (this.profile.logo != null) {
                this.imageUrl ="https://api.nit-bd.com/public/" + this.profile.logo.file.path;
              }

              if (this.profile.authorised_person_details != null) {
                this.auth_person = JSON.parse(
                  this.profile.authorised_person_details
                );
              }
              if (this.profile.company_address != null) {
        
                this.company_address = JSON.parse(
                  this.profile.company_address
                );
              }
              if (this.profile.trading_hour != null) {
        
                        this.company_hour = JSON.parse(
                        this.profile.trading_hour
        );
      }
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
      