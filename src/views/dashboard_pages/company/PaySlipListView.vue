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
                  <h3 class="card-title d-inline float-left text-white">
                    Payslips
                  </h3>
                  <!-- <router-link  class=" float-right"  :to="{ name: 'administrative-adddepartments' }">

<span class="btn-sc-sm" >Add</span>
</router-link> -->

                  <a
                    class="btn-sc-sm float-right"
                    data-toggle="modal"
                    data-target="#addModal"
                    >Create new</a
                  >
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <table class="table text-center table-striped table-bordered">
                    <thead>
                      <tr>
                        <th style="width: 10px">#</th>

                        <th>Payslip No</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th>Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="level in levels" :key="level">
                        <td>#</td>
                        <td>{{ level.level_name }}</td>

                        <td>
                          <a
                            @click.prevent="editdepartment(level.uuid)"
                            data-toggle="modal"
                            data-target="#editModal"
                            ><i class="fa-solid fa-pen-to-square"></i
                          ></a>

                          <a
                            @click.prevent="deletedepartment(level.uuid)"
                            class="-sm ml-2"
                            ><i class="fa-solid fa-trash text-red"></i
                          ></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
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
                </div>

                <div
                  id="dvContainer"
                  style="
                    width: 600px;
                    padding: 20px;
                    position: absolute;
                    top: -850px;
                  "
                >
                  <form ref="addForm">
                    <h4 class="text-center">Hrm company</h4>
                    <p class="text-center mt-1">24,Down Town,Uk</p>
                    <hr />

                    <div class="row">
                      <div class="col-lg-6">
                        <p>Date of joining : {{ profile.joining_date }}</p>
                        <p>
                          Pay of period : {{ currentMonthName }}
                          {{ currentYear }}
                        </p>
                        <p>Worked days : {{ workdays }}</p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          Employee name : {{ basic_information.first_name }}
                          {{ basic_information.last_name }}
                        </p>
                        <p>Designation : {{ position }}</p>
                        <p>Department : {{ company_department }}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <table class="w-100 table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Earnings</th>
                              <th scope="col">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Basic</td>
                              <td>{{ payroll.basic }}</td>
                            </tr>

                            <tr
                              v-for="addings in adding_payrolls"
                              :key="addings"
                            >
                              <td>{{ addings.allowance }}</td>
                              <td>
                                {{ payroll.basic * (addings.value / 100) }}
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2">Total : {{ totaladdings }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div class="col-lg-6">
                        <table class="w-100 table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Deduction</th>
                              <th scope="col">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="deduction in duduction_payrolls"
                              :key="deduction"
                            >
                              <td>{{ deduction.allowance }}</td>
                              <td>
                                {{ payroll.basic * (deduction.value / 100) }}
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2">Total : {{ totaldeduction }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <h6 class="border p-2 mt-2">
                      <span class="text-bold"
                        >Net Pay : {{ totaladdings - totaldeduction }} /-</span
                      >
                    </h6>
                  </form>
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

    <div
      class="modal fade"
      id="addModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create new payslip</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form ref="addForm">
              <h4 class="text-center">Hrm company</h4>
              <p class="text-center mt-1">24,Down Town,Uk</p>
              <hr />

              <div class="row">
                <div class="col-lg-6">
                  <p>Date of joining : {{ profile.joning_date }}</p>
                  <p>
                    Pay of period : {{ currentMonthName }} {{ currentYear }}
                  </p>
                  <p>Worked days : {{ workdays }}</p>
                </div>
                <div class="col-lg-6">
                  <p>
                    Employee name : {{ basic_information.first_name }}
                    {{ basic_information.last_name }}
                  </p>
                  <p>Designation : {{ position }}</p>
                  <p>Department : {{ company_department }}</p>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Earnings</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Basic</td>
                        <td>{{ payroll.basic }}</td>
                      </tr>

                      <tr v-for="addings in adding_payrolls" :key="addings">
                        <td>{{ addings.allowance }}</td>
                        <td>{{ payroll.basic * (addings.value / 100) }}</td>
                      </tr>
                      <tr>
                        <td colspan="2">Total : {{ totaladdings }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="col-lg-6">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Deduction</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tax</td>
                        <td>{{ monthlytax }}</td>
                      </tr>

                      <tr
                        v-for="deduction in duduction_payrolls"
                        :key="deduction"
                      >
                        <td>{{ deduction.allowance }}</td>
                        <td>{{ payroll.basic * (deduction.value / 100) }}</td>
                      </tr>
                      <tr>
                        <td colspan="2">Total : {{ totaldeduction }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h6 class="border p-2">
                <span class="text-bold"
                  >Net Pay : {{ totaladdings - totaldeduction }}/-</span
                >
              </h6>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-pc-sm" data-dismiss="modal">
              Cancle
            </button>
            <button @click.prevent="download" type="button" class="btn-sc-sm">
              Download pdf
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="editModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editModal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Position</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form ref="addForm">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Level name</label>
                    <input id="okk" type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Code </label>
                    <input i type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-pc-sm" data-dismiss="modal">
              Cancle
            </button>
            <button
              @click.prevent="updatedepartment(department.uuid)"
              type="button"
              class="btn-sc-sm"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        
        <script>
import $ from "jquery";
import axios from "axios";
import moment from "moment";
import jsPDF from "jspdf";

// import html2canvas from "html2canvas"
// import html2pdf from "html2pdf.js";

export default {
  data() {
    return {
      errors: {},
      profile: {},
      uuid: "",
      email: "",
      position: "",
      company_department: "",
      basic_information: {},
      auth_person: {},
      key_person: "",
      levelone: "",
      company_address: {},
      trade_day: "",
      company_categories: "",
      company_sectors: "",
      countries: "",
      company_hour: {},
      employee_id: "",
      grade_id: "",
      department_id: "",
      payroll: {},
      currentMonthName: "",
      currentYear: "",
      attendances: "",
      workdays: "",
      taxrule: {},
      adding_payrolls: [],
      totaladdings: 0,
      totaldeduction: 0,
      monthdifference: "",
      currentDate: "",
      fiscalyear: {},
      joining_month: 0,
      currentMonth_single: 0,
      remain_month: 0,
      taxableamount: 0,
      cap_details: [],
      totaltax: 0,
      difference: 0,
      monthlytax: 0,
      random: 0,
      remain: 0,
      diff: 0,

      taxcap: 3000000,

      duduction_payrolls: [],

      selectedMonth: "",
      selectedYear: "",
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
          .get("company/employees/" + uuid)
          .then((response) => {
            if (response) {
              this.profile = response.data.data;
              this.employee_id = this.profile.id;
              this.grade_id = this.profile.grade_id;
              this.position = this.profile.position.position_name;
              this.company_department =
                this.profile.company_department.department_name;
              this.department_id = this.profile.company_department_id;
              if (this.grade_id) {
                this.getPayroll(this.grade_id, this.department_id);
                this.getAttendance();
                this.MonthDifference();
           
              }

              if (this.profile.basic_information != null) {
                this.basic_information = JSON.parse(
                  this.profile.basic_information
                );
              }

              if (this.profile.authorised_person_details != null) {
                this.auth_person = JSON.parse(
                  this.profile.authorised_person_details
                );
              }
              if (this.profile.company_address != null) {
                this.company_address = JSON.parse(this.profile.company_address);
              }
              if (this.profile.trading_hour != null) {
                this.company_hour = JSON.parse(this.profile.trading_hour);
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    totaladd() {
      if (this.adding_payrolls.length > 0) {
        for (let i = 0; i < this.adding_payrolls.length; i++) {
          this.totaladdings =
            this.totaladdings +
            this.payroll.basic * (this.adding_payrolls[i].value / 100);
        }
        this.totaladdings =
          parseInt(this.payroll.basic) + parseInt(this.totaladdings);
      }
    },
    totaldeduc() {
      if (this.duduction_payrolls.length > 0) {
        for (let i = 0; i < this.duduction_payrolls.length; i++) {
          this.totaldeduction =
            this.totaldeduction +
            this.payroll.basic * (this.duduction_payrolls[i].value / 100);
        }
      }
    },
    download() {
      var pdf2 = new jsPDF("a4", "pt", "a4");
      // pdf2.html(document.getElementById("dvContainer"), {
      //         callback: function () {
      //           pdf2.save("multipage.pdf")
      //         },
      //         x: 10,
      //         y: 10 ,
      //       });

      pdf2
        .html(document.getElementById("dvContainer"))
        .then(() => pdf2.save("fileName.pdf"));
    },

    current() {
      this.startOfMonth = moment().startOf("month").format("YYYY-MM-DD hh:mm");
      this.endOfMonth = parseInt(moment().endOf("month").format("DD"));
      this.currentDate = moment().format("D/MM/YYYY");
      this.currentMonth = moment().format("MM");
      this.currentMonth_single = moment().format("M");
      this.currentMonthName = moment().format("MMMM");
      this.currentYear = moment().format("YYYY");
      this.selectedYear = this.currentYear;
      this.selectedMonth = this.currentMonthName;
      this.currentTime = moment().format("hh:mm:ss A");
    },
    getPayroll(grade_id, department_id) {
      axios
        .get("/company/payrolls/getbycompany/" + grade_id + "/" + department_id)
        .then((response) => {
          if (response) {
            this.payroll = response.data.data;

            this.allowances = JSON.parse(response.data.data.allowances);

            this.adding_payrolls = this.allowances.filter(
              (item) => item.type === "Adding"
            );

            this.duduction_payrolls = this.allowances.filter(
              (item) => item.type === "deduction"
            );
            this.totaladd();
            this.totaldeduc();
            this.getTaxRule();
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },

    getAttendance() {
      axios
        .get(
          "/company/attendances/getbymonthid/" +
            this.selectedMonth +
            "/" +
            this.selectedYear +
            "/" +
            this.employee_id
        )
        .then((response) => {
          if (response) {
            this.attendances = JSON.parse(response.data.data.attendances);
            this.workdays = response.data.data.actual_attend;

            this.uuid = response.data.data.uuid;
          }
        })
        .catch((error) => {
          if (error.response.status == 404) {
            console.log(error.response.data.message);
          }
        });
    },

    getTaxRule() {
      axios
        .get("/company/taxrules")
        .then((response) => {
          if (response) {
            this.taxrule = response.data.data;
            this.taxCalculation();
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    },

    taxCalculation() {
 

      this.taxableamount = parseInt(this.payroll.basic)*12;

      alert(this.taxableamount)


      this.cap_details = JSON.parse(this.taxrule.cap_details);

      if(this.cap_details.length>0){

        for (let i = 0; i < this.cap_details.length; i++) {
        if (i == 0) {
          this.diff = this.taxableamount - this.cap_details[i].tax_high_cap;
        } else {
          if (this.taxableamount >= this.cap_details[i].tax_low_cap) {

            if (this.diff <= this.cap_details[i].tax_cap_difference) {
              this.totaltax = this.totaltax + (this.diff * this.cap_details[i].p_tax) / 100;

            
            } else {
              this.totaltax =
                this.totaltax +
                (this.cap_details[i].tax_cap_difference *
                  this.cap_details[i].p_tax) /
                  100;
              this.diff = this.diff - this.cap_details[i].tax_cap_difference;
            
            }
          }
        }

        this.monthlytax=Math.round(this.totaltax/12);
      }

      }


    

    
    },
    MonthDifference() {
      const getDate = (date) => moment(date, "DD/MM/YYYY").startOf("month");
      this.monthdifference = Math.abs(
        getDate(this.currentDate).diff(
          getDate(this.profile.joning_date),
          "months"
        )
      );

      this.joining_month = moment(
        this.profile.joning_date,
        "DD/MM/YYYY"
      ).format("M");
    },
  },
  mounted: function () {
    this.uuid = this.$route.query.uuid;
    this.getProfile(this.uuid);
    this.current();

    this.fiscalyear = {
      startMonth: 6,
      middleMonth: 12,
      monthdiff: 12,
      endMonth: 6,
    };
  },
};
</script>

<style>
.table.table-unruled > tbody > tr > td,
.table.table-unruled > tbody > tr > th {
  border-top: 0 none transparent;
  border-bottom: 0 none transparent;
}

.table-borderless td {
  border: 2px !important;
}
</style>
        