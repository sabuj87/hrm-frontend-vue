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
                  <h3 class="card-title">Give Attendance</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="sc" for="exampleInputEmail1">
                            Year
                          </label>
                          <select
                            class="form-control"
                            v-model="selectedYear"
                            style="width: 100%"
                            @change="getAttendance"
                          >
                            <option :value="2000 + n" v-for="n in 50" :key="n">
                              {{ 2000 + n }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="sc" for="exampleInputEmail1">
                            Month
                          </label>
                          <select
                            class="form-control"
                            v-model="selectedMonth"
                            style="width: 100%"
                            @change="getAttendance"
                          >
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="row mb-2">
                      <div class="col-lg-2">
                        <span class="font-weight-bold"> Total Attend :</span>
                        <span>{{ attendcount }}</span>
                      </div>

                      <div class="col-lg-2">
                        <span class="font-weight-bold">Holiday :</span>
                        <span>{{ holidaycount }}</span>

                      </div>

                      <div class="col-lg-2">
                        <span class="font-weight-bold">Leave :</span>
                        <span>{{ leavecount }}</span>
                      </div>
                      <div class="col-lg-2">
                        <span class="font-weight-bold">Weekend :</span>
                        <span>{{ weekendcount }}</span>
                      </div>
                      <div class="col-lg-2">
                        <span class="font-weight-bold">Holiday attend :</span>
                        <span>{{ h_attendcount }}</span>
                      </div>
                      <div class="col-lg-2">
                        <span class="font-weight-bold">Weekend attend:</span>
                        <span>{{ w_attendcount }}</span>
                      </div>
                    </div>

                    <div class="row mb-2">
                      <div class="col-lg-2">
                        <span class="font-weight-bold"> Total Week day :</span>
                        <span>{{ weekdaycount }}</span>
                      </div>

                      <div class="col-lg-2">
                        <span class="font-weight-bold">No status :</span>
                        <span>{{ nostatuscount }}</span>

                      </div>
                      <div class="col-lg-2">
                        <span class="font-weight-bold">Actual Attend:</span>
                        <span>{{ actual_attentd }}</span>

                      </div>
                      <div class="col-lg-2">
                        <span class="font-weight-bold">Absent : </span>
                        <span>{{ absent }}</span>

                      </div>

                    
                      
                    </div>


                    <!-- <div style="height:40px;border: 1px solid #DEE2E6 ;background-color: #F2F2F2;"   class="card-header  ">
                 <p class="text-center">Daily Attendance</p>
                </div> -->
                    <table
                      class="table text-center table-striped table-bordered"
                    >
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Day type</th>
                          <th>Status</th>
                          <th>Loged In</th>
                          <th>Loged Out</th>
                          <th>Action</th>
                          <th>Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          :class="{ disabled: attendance.date != currentDate }"
                          v-for="attendance in attendances"
                          :key="attendance"
                        >
                          <td>{{ attendance.date }}</td>
                          <td class="text-blue"  v-if="weekendcheck(attendance.date)">Weekend</td>
                          <td class="text-red" v-else-if="holidaycheck(attendance.date)">Holiday</td>
                          <td v-else>{{attendance.daytype}}</td>
                          
                          <td>{{ attendance.status }}</td>
                          <td>{{ attendance.logedin }}</td>
                          <td>{{ attendance.logedout }}</td>

                          <td>
                            <button
                              @click="logedin"
                              type="button"
                              class="btn-sc-sm"
                            >
                              Logedin
                            </button>
                            <button
                              @click="logedout"
                              type="button"
                              class="btn-sc-sm ms-2"
                            >
                              Logout
                            </button>
                          </td>

                          <td>
                            <input
                              type="text"
                              class="form-control"
                              id="exampleCheck1"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- <button @click="giveAttendance" type="button" class="btn-sc  mt-4 mb-4 "  >Submit</button> -->
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
import moment from "moment";
import axios from "axios";

export default {
  data() {
    return {
      attendances: [],
      startOfMonth: "",
      endOfMonth: "",
      currentMonth: "",
      currentYear: "",
      attendanceAction: "",
      attenStatus: "",
      currentDate: "",
      attenStatusFinal: "",
      selectedMonth: "",
      selectedYear: "",
      check: false,
      uuid: "",
    
      weekends:[],
      holidays:[],


      attendcount:0,
      nostatuscount:0,
      weekendcount:0,
      holidaycount:0,
      leavecount:0,
      w_attendcount:0,
      h_attendcount:0,
      absentcount:0,
      weekdaycount:0,
      actual_attentd:0,
      absent:0,



      currentTime: "",
    };
  },
  methods: {
    changeAttenStatus() {},

    logedin() {
      this.attendances = this.attendances.map((attendance) => {
        if (attendance.date == this.currentDate) {
          if(this.weekendcheck(attendance.date)){
            return {
            date: attendance.date,
            status: "Attend",
            daytype:"Weekend",
            logedin: moment().format("hh:mm:ss A"),
            logedout: attendance.logedout,
            action: "Attend",
            remarks: "",
          };

          }else if(this.holidaycheck(attendance.date)){
            return {
            date: attendance.date,
            status: "Attend",
            daytype:"Holiday",
            logedin: moment().format("hh:mm:ss A"),
            logedout: attendance.logedout,
            action: "Attend",
            remarks: "",
          };

          }else{

            return {
            date: attendance.date,
            status: "Attend",
            daytype:"Weekday",
            logedin: moment().format("hh:mm:ss A"),
            logedout: attendance.logedout,
            action: "Attend",
            remarks: "",
          };


          }
        
        } else if (this.weekendcheck(attendance.date)) {
          return {
            date: attendance.date,
            status: attendance.status,
            daytype:"Weekend",
            logedin: attendance.logedin,
            logedout: attendance.logedout,
            action: "Attend",
            remarks: "",
          };
        }else if (this.holidaycheck(attendance.date)) {
          return {
            date: attendance.date,
            status: attendance.status,
            daytype:"Holiday",
            logedin: attendance.logedin,
            logedout: attendance.logedout,
            action: "Attend",
            remarks: "",
          };
        }

        return attendance;
      });

      if (this.uuid != "") {
        axios
          .put("/employee/attendances/" + this.uuid, {
            year: this.currentYear,
            month: this.currentMonthName,
            attendances: JSON.stringify(this.attendances),
            total_attend:this.attendcount,
            holiday:this.holidaycount,
            leave:this.leavecount,
            weekend:this.weekendcount,
            holiday_attend:this.h_attendcount,
            weekend_attend:this.w_attendcount,
            total_week_day:this.weekdaycount,
            no_status:this.nostatuscount,
            actual_attend:this.actual_attentd,
            absent:this.absentcount,
          })
          .then((response) => {
            if (response) {
              this.$emit("get_message", response.data.message);
              this.getAttendance();
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      } else {
        axios
          .post("/employee/attendances", {
            year: this.currentYear,
            month: this.currentMonthName,
            attendances: JSON.stringify(this.attendances),
            total_attend:this.attendcount,
            holiday:this.holidaycount,
            leave:this.leavecount,
            weekend:this.weekendcount,
            holiday_attend:this.h_attendcount,
            weekend_attend:this.w_attendcount,
            total_week_day:this.weekdaycount,
            no_status:this.nostatuscount,
            actual_attend:this.actual_attentd,
            absent:this.absentcount,
          })
          .then((response) => {
            if (response) {
              this.getAttendance();
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },

    logedout() {
  
      this.attendances = this.attendances.map((attendance) => {
        if (attendance.date == this.currentDate) {
          if(this.weekendcheck(this.currentDate)){
            return {
            date: attendance.date,
            status: "Attend",
            daytype:"Weekend",
            logedin: attendance.logedin,
            logedout: moment().format("hh:mm:ss A"),
            action: "Attend",
            remarks: "",
          };

          }else if(this.holidaycheck(this.currentDate)){
            return {
            date: attendance.date,
            status: "Attend",
            daytype:"Holiday",
            logedin: attendance.logedin,
            logedout: moment().format("hh:mm:ss A"),
            action: "Attend",
            remarks: "",
          };

          }else{

            return {
            date: attendance.date,
            status: "Attend",
            daytype:"Weekday",
            logedin: attendance.logedin,
            logedout: moment().format("hh:mm:ss A"),
            action: "Attend",
            remarks: "",
          };


          }
        
        } else if (this.weekendcheck(attendance.date)) {
          return {
            date: attendance.date,
            status: attendance.status,
            daytype:"Weekend",
            logedin: attendance.logedin,
            logedout: attendance.logedout,
            action: "Attend",
            remarks: "",
          };
        }else if (this.holidaycheck(attendance.date)) {
          return {
            date: attendance.date,
            status: attendance.status,
            daytype:"Holiday",
            logedin: attendance.logedin,
            logedout: attendance.logedout,
            action: "Attend",
            remarks: "",
          };
        }

        return attendance;
      });

      if (this.uuid != "") {
        axios
          .put("/employee/attendances/" + this.uuid, {
            year: this.currentYear,
            month: this.currentMonthName,
            attendances: JSON.stringify(this.attendances),
            total_attend:this.attendcount,
            holiday:this.holidaycount,
            leave:this.leavecount,
            weekend:this.weekendcount,
            holiday_attend:this.h_attendcount,
            weekend_attend:this.w_attendcount,
            total_week_day:this.weekdaycount,
            no_status:this.nostatuscount,
            actual_attend:this.actual_attentd,
            absent:this.absentcount,
          })
          .then((response) => {
            if (response) {
              this.$emit("get_message", response.data.message);
              this.getAttendance();
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      } else {
        axios
          .post("/employee/attendances", {
            year: this.currentYear,
            month: this.currentMonthName,
            attendances: JSON.stringify(this.attendances),
            total_attend:this.attendcount,
            holiday:this.holidaycount,
            leave:this.leavecount,
            weekend:this.weekendcount,
            holiday_attend:this.h_attendcount,
            weekend_attend:this.w_attendcount,
            total_week_day:this.weekdaycount,
            no_status:this.nostatuscount,
            actual_attend:this.actual_attentd,
            absent:this.absentcount,
          })
          .then((response) => {
            if (response) {
              this.getAttendance();
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },

    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY hh:mm:ss");
      }
    },
    current() {
      this.startOfMonth = moment().startOf("month").format("YYYY-MM-DD hh:mm");
      this.endOfMonth = parseInt(moment().endOf("month").format("DD"));
      this.currentDate = moment().format("D/MM/YYYY");
      this.currentMonth = moment().format("MM");
      this.currentMonthName = moment().format("MMMM");
      this.currentYear = moment().format("YYYY");
      this.selectedYear = this.currentYear;
      this.selectedMonth = this.currentMonthName;
      this.currentTime = moment().format("hh:mm:ss A");
    },
    getAttendance() {
      axios
        .get(
          "/employee/attendances/getbymonth/" +
            this.selectedMonth +
            "/" +
            this.selectedYear
        )
        .then((response) => {
          if (response) {
            this.attendances = JSON.parse(response.data.data.attendances);

            this.attendcount = this.attendances.filter(
              (item) => item.status === "Attend"
            ).length;


            this.nostatuscount = this.attendances.filter(
              (item) => item.status === "No status"
            ).length;


            this.weekendcount = this.attendances.filter(
              (item) => item.daytype == "Weekend"
            ).length;

            this.holidaycount = this.attendances.filter(
              (item) => item.daytype === "Holiday"
            ).length;


            this.leavecount = this.attendances.filter(
              (item) => item.status === "Leave"
            ).length;

            
            this.w_attendcount = this.attendances.filter(
              (item) => item.status ==="Attend" &&  item.daytype==="Weekend"
            ).length; 

            this.h_attendcount = this.attendances.filter(
              (item) => item.status === "Attend" &&  item.daytype==="Holiday"
            ).length; 

            this.weekdaycount = this.attendances.filter(
              (item) =>item.daytype === "Weekday"
            ).length; 

            this.actual_attentd=this.attendcount-(this.w_attendcount+this.h_attendcount)
            this.absent=this.weekdaycount-(this.actual_attentd+this.leavecount)


            this.uuid = response.data.data.uuid;
          }
        })
        .catch((error) => {
          if (error.response.status == 404) {
            if (
              this.selectedMonth == this.currentMonthName &&
              this.selectedYear == this.currentYear
            ) {
              for (let index = 1; index <= this.endOfMonth; index++) {
                this.date =
                  index + "/" + this.currentMonth + "/" + this.currentYear;
                var attendance = "";

                attendance = {
                  date: this.date,
                  status: "No status",
                  daytype:"Weekday",
                  logedin: "Not assigned",
                  logedout: "Not assigned",
                  action: "",
                  remarks: "",
                };
                this.attendances.push(attendance);
              }


              this.attendcount = this.attendances.filter(
              (item) => item.status === "Attend"
            ).length;


            this.nostatuscount = this.attendances.filter(
              (item) => item.status === "No status"
            ).length;


            this.weekendcount = this.attendances.filter(
              (item) => item.daytype == "Weekend"
            ).length;

            this.holidaycount = this.attendances.filter(
              (item) => item.daytype === "Holiday"
            ).length;


            this.leavecount = this.attendances.filter(
              (item) => item.status === "Leave"
            ).length;

            
            this.w_attendcount = this.attendances.filter(
              (item) => item.status ==="Attend" &&  item.daytype==="Weekend"
            ).length; 

            this.h_attendcount = this.attendances.filter(
              (item) => item.status === "Attend" &&  item.daytype==="Holiday"
            ).length; 

            this.weekdaycount = this.attendances.filter(
              (item) =>item.daytype === "Weekday"
            ).length; 

            this.actual_attentd=this.attendcount-(this.w_attendcount+this.h_attendcount)
            this.absent=this.weekdaycount-(this.actual_attentd+this.leavecount)




            } else {
              this.attendances = [];
            }
          }
        });
    },

    weekendcheck(date) {
      // this.weekends.find(el => el.level_name === newlevelname)

      var dt = moment(date, "D/MM/YYYY");
      var day_name = dt.format("dddd");

      if (this.weekends.length > 0) {
        for (let i = 0; i < this.weekends.length; i++) {
          if (this.weekends[i].day == day_name) {
            return true;
          }
        }
        return false;
      }
    },
    holidaycheck(date) {
      // this.weekends.find(el => el.level_name === newlevelname)

      var dt = moment(date, "D/MM/YYYY");
      var ndate = dt.format("YYYY-MM-DD");

      if (this.holidays.length > 0) {
        for (let i = 0; i < this.holidays.length; i++) {
          if (this.holidays[i].date == ndate) {
            return true;
          }
        }
        return false;
      }
    },
    getweekends() {
      axios
        .get("/employee/weekends")
        .then((response) => {
          if (response) {
            this.weekends = response.data.data;

            this.$refs.addForm.reset();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getholidays() {
      axios
        .get("/employee/holidays")
        .then((response) => {
          if (response) {
            this.holidays = response.data.data;

            this.$refs.addForm.reset();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted: function () {
    this.current();
    this.getAttendance();
    this.getweekends();
    this.getholidays();
  },
};
</script>
    