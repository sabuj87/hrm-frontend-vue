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
              <div class="card">
                <div class="card-header pc-bg">
                  <h3 class="card-title d-inline float-left text-white">
                    Employees Attendances
                  </h3>
                  <router-link
                    class="float-right"
                    :to="{ name: 'addemployee' }"
                  >
                    <span class="btn-sc-sm">Add</span>
                  </router-link>
                </div>

                <!-- /.card-header -->
                <div class="card-body">
                  <!-- <table class="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>

                        <th>Email</th>

                        <th>Position</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="employee in employees" :key="employee">
                        <td>{{ employee.id }}</td>
                        <td>
                          {{
                            JSON.parse(employee.basic_information).first_name
                          }}
                          {{ JSON.parse(employee.basic_information).last_name }}
                        </td>
                        <td>
                          {{ JSON.parse(employee.basic_information).email }}
                        </td>

                        <td>Software Developer</td>

                        <td>
                          <router-link
                            :to="{
                              name: 'administrative-employee-profile',
                              query: { uuid: employee.uuid },
                            }"
                          >
                            <span><i class="fa-solid fa-eye"></i></span>
                          </router-link>
                        </td>
                      </tr>

                 
                    </tbody>
                  </table> -->

                  <DataTable
                        :data="employees"
  
                        class="display table table-striped table-bordered mt-2"
                      >
                        <thead>
                          <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Email</th>
                            <th>Position</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </DataTable>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                 
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
//import $ from "jquery";
import axios from "axios";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
DataTable.use(DataTablesCore);

export default {
  components: { DataTable },

  data() {
    return {
      errors: {},
      employees: [],
    };
  },
  methods: {
    getemployees() {
      axios
        .get("/company/employees")
        .then((response) => {
          if (response) {
            var employees = response.data.data;

            for (var employee of employees) {
              var employee_id = employee.id;
              var employee_name =
                JSON.parse(employee.basic_information).first_name +
                JSON.parse(employee.basic_information).last_name;
              var email = JSON.parse(employee.basic_information).email;
              var position = employee.position.position_name;
              var action =
                '<button onclick="handleClick(' +
                employee_id +
                ')" class="btn btn-sm btn-default"><i class="fa-solid fa-eye"></i></button>';
              this.employees.push([
                employee_id,
                employee_name,
                email,
                position,
                action,
              ]);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleClick(id) {
      
      this.$router.push({ name: 'administrative-employee-profile',
                              query: { uuid: id }});
 
     }
  },
  mounted: function () {
    this.getemployees();
    window.handleClick = this.handleClick;

  },
};
</script>
      