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
                    Employees
                  </h3>
                </div>

                <!-- /.card-header -->
                <div class="card-body">
                  <!-- <table

                  id="example2"
            
                    class="table  table-striped table-bordered mt-2"
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

                        <td>
                          {{ employee.position.position_name }}
                        </td>

                        <td>
                          <router-link
                            :to="{
                              name: 'paysliplist',
                              query: { uuid: employee.uuid },
                            }"
                          >
                            <span class="border p-1 text-green">Payslips</span>
                          </router-link>
                        </td>
                      </tr>
                    </tbody>
                  </table> -->


             

          
        


    <DataTable  :data="data" :options="options" class="display table table-striped table-bordered mt-2">

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

        
        </tbody>

    </DataTable>


                </div>
                <!-- /.card-body -->
                <!-- <div class="card-footer clearfix">
                  <ul class="pagination pagination-sm m-0 float-right">
                    <li class="page-item">
                      <a class="page-link" href="#">&laquo;</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">&raquo;</a>
                    </li>
                  </ul>
                </div> -->
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
import $ from "jquery";
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
      new_employees:[],



 
      columns: [
  { data: 'name', title: 'Name' },
  { data: 'position', title: 'Position' },

],
      data: [
  [1, 2,3,4,5],


],
options: {
  responsive: true,
  select: true,
  searching: true,
  paging: true,

}

  
    };
  },
  methods: {
    getemployees() {
      axios
        .get("employee/employees/senior")
        .then((response) => {
          if (response) {
            this.employees = response.data.data;
            $('#example2').DataTable();

            for(let i=0;i<this.employees.length;i++){
              // var uuid=String(this.employees[i].uuid)
              var employeee_id=this.employees[i].id
              var employee_name=JSON.parse(this.employees[i].basic_information).first_name +" "+JSON.parse(this.employees[i].basic_information).last_name
              var email=JSON.parse(this.employees[i].basic_information).email
              var position=this.employees[i].position.position_name
              var action =
                '<button onclick="handleClick(' +
                employeee_id +
                ')" class="btn btn-sm btn-default"><i class="fa-solid fa-eye"></i></button>';
              var arrayobject=[employeee_id,employee_name,email,position,action]


               
              this.new_employees.push(arrayobject)
              this.data= this.new_employees
            }

          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleClick(id) {
      
     this.$router.push({ name: "employeeattendance", query: { id: id } });

    }
  },
  mounted: function () {
    this.getemployees();
    window.handleClick = this.handleClick;
   


    
  },
};

</script>
      