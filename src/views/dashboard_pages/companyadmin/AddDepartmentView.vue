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
                <h1 class="m-0">Add Department</h1>
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
                    <h3 class="card-title">Department info</h3>
                  </div>
                  <!-- /.card-header -->
                  <!-- form start -->
  
                  <form>
                    <div class="row">
                      <div class="col-lg-5">
                        <div class="card-body">
                          <div class="form-group">
                            <label for="exampleInputEmail1"
                              >Department ID *</label
                            >
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                            
                            />
                          </div>
                 
                       
                        </div>
                      </div>
                      <div class="col-lg-7">
                        <div class="card-body">
                          <div class="form-group">
                            <label for="exampleInputEmail1">Department Name</label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                       
                            />
                          </div>
                
                         
                  
                        </div>
                      </div>

                      <button type="button" class="btn btn-primary ml-4 mb-4" >Submit</button>

  

                    
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
      