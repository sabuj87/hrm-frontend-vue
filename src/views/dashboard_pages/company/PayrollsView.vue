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
                  <h3 class="card-title text-white float-left">Payrolls</h3>

                  <router-link
                    class="float-right"
                    :to="{ name: 'createpayroll' }"
                  >
                    <span class="btn-sc-sm">Create</span>
                  </router-link>
                </div>

                <!-- /.card-header -->
                <div class="card-body">
                

                  <DataTable
                    :data="payrolls"
                    class=" table table-striped table-bordered mt-2"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Grade</th>
                        <th>Department</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                  </DataTable>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->

              <!-- /.card -->
            </div>
          </div>
        </div>
      </section>
      <!-- /.content -->
    </div>
  </div>
</template>
      
  <script>
// import $ from "jquery";
import axios from "axios";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
DataTable.use(DataTablesCore);

export default {
  components: { DataTable },

  data() {
    return {
      errors: {},
      payrolls: [],
      data: [],
    };
  },
  methods: {
    getpayroll() {
      axios
        .get("/company/payrolls")
        .then((response) => {
          if (response) {
            // alert(response.data.message)
           var payrolls= response.data.data;

           payrolls.forEach(element => {
            var id = element.id;
              var grade = element.grade.grade_name;
              var department = element.company_department.department_name
              var action = "<i class='fa-solid fa-pen-to-square sc text-large '></i>  <i class='fa-solid fa-trash text-red ms-2 pc'></i>";

              var arrayobject = [
              id,
              grade,
              department,
              action,
              ];

              this.payrolls.push(arrayobject);
        
            
           });

          
          }
        })
        .catch((error) => {
         console.log(error)
        });
    },
    handleClick(id) {
      
      this.$router.push({ name: "paysliplist", query: { uuid: id } });
 
     }
  },
  mounted: function () {
    this.getpayroll();
    
  },
};
</script>
      