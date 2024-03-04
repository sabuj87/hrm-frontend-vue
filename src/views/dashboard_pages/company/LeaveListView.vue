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
      <!-- /.content-header -->

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header pc-bg">
                  <h3 class="card-title text-white">Leave application</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <!-- <table class="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th style="width: 10px">#</th>
                        <th>Employee name</th>
                        <th>From</th>
                        <th>Till</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="leave in leaves" :key="leave">
                        <td>{{ leave.id }}</td>

                        <td>
                          {{
                            JSON.parse(leave.employee.basic_information)
                              .first_name
                          }}
                          {{
                            JSON.parse(leave.employee.basic_information)
                              .last_name
                          }}
                        </td>
                        <td>{{ leave.from }}</td>
                        <td>{{ leave.to }}</td>
                        <td v-if="leave.status == null">Pending</td>
                        <td v-if="leave.status == 1">Approved</td>

                        <td>
                          <router-link
                            :to="{
                              name: 'leavedetails',
                              query: { id: leave.id },
                            }"
                          >
                            <span><i class="fa-solid fa-eye"></i></span>
                          </router-link>
                        </td>
                      </tr>
                    </tbody>
                  </table> -->
                  <DataTable
                        :data="leaves"
  
                        class="display table table-striped table-bordered mt-2"
                      >
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Employee Name</th>
                            <th>From</th>
                            <th>Till</th>
                            <th>Status</th>
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
      leaves: [],
    };
  },
  methods: {
    getemployeeleave() {
      axios
        .get("company/leaves")
        .then((response) => {
          if (response) {
            var leaves = response.data.data;
            for (var leave of leaves) {
              var id = leave.id;
              var emaployee_name =
                JSON.parse(leave.employee.basic_information).first_name +
                " " +
                JSON.parse(leave.employee.basic_information).last_name;
              var from = leave.from;
              var to = leave.to;
              var status =
                leave.status == null
                  ? "Pending"
                  : leave.status == 1
                  ? "Approved"
                  : "Rejected";
              var action =
                '<button onclick="handleClick(' +
                id +
                ')" class="btn btn-sm btn-default"><i class="fa-solid fa-eye"></i></button>';

              this.leaves.push([id, emaployee_name, from, to, status, action]);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted: function () {
    this.getemployeeleave();
  },
};
</script>
      