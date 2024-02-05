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
                    Attandances
                  </h3>
                  <!-- <router-link  class=" float-right"  :to="{ name: 'administrative-adddepartments' }">
  
  <span class="btn-sc-sm" >Add</span>
  </router-link> -->

                  <a
                    class="btn-sc-sm float-right"
                    data-toggle="modal"
                    data-target="#addModal"
                    >Give attendances</a
                  >
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label>Year</label>

                        <select
                          v-model="year"
                          class="form-control"
                          style="width: 100%"
                        >
                          <option disabled value="null">
                            Select a year
                          </option>
                          <option :value="2000+n"  v-for="n in 50" :key="n">{{ 2000+n }}</option>
                         
                        </select>
                    
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form-group">
                        <label>Month</label>

                        <select
                          v-model="month"
                          class="form-control"
                          style="width: 100%"
                        >
                          <option disabled value="null">
                            Select a month
                          </option>
                          <option value="January" >January</option>
                         
                        </select>
                    
                      </div>
                    </div>
                  </div>

                  <div class="row"></div>

                  <table class="table text-center table-striped table-bordered">
                    <thead>
                      <tr>
                        <th style="width: 10px">#</th>

                        <th>Year</th>
                        <th>Month</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="position in positions" :key="position">
                        <td>#</td>
                        <td>{{ position.position_name }}</td>
                        <td>
                          {{ position.company_department.department_name }}
                        </td>
                        <td>{{ position.level.level_name }}</td>

                        <td>
                          <a
                            @click.prevent="editdepartment(position.uuid)"
                            data-toggle="modal"
                            data-target="#editModal"
                            ><i class="fa-solid fa-pen-to-square"></i
                          ></a>

                          <a
                            @click.prevent="deletedepartment(position.uuid)"
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
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add new position</h5>
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
                    <label>Department</label>

                    <select
                      v-model="department_id"
                      class="form-control"
                      style="width: 100%"
                    >
                      <option disabled value="null">Select a Department</option>
                      <option
                        v-for="department in departments"
                        :key="department"
                        :value="department.id"
                      >
                        {{ department.department_name }}
                      </option>
                    </select>
                    <p class="text-danger mt-1" v-if="errors.department_id">
                      {{ errors.department_id[0] }}
                    </p>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Level</label>

                    <select
                      v-model="level_id"
                      class="form-control"
                      style="width: 100%"
                    >
                      <option disabled value="null">Select a level</option>
                      <option
                        v-for="level in levels"
                        :key="level"
                        :value="level.id"
                      >
                        {{ level.level_name }}
                      </option>
                    </select>
                    <p class="text-danger mt-1" v-if="errors.level_id">
                      {{ errors.level_id[0] }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Position name</label>
                    <input
                      type="text"
                      @input="errors.position_name = null"
                      v-model="position_name"
                      class="form-control"
                    />
                    <p class="text-danger mt-1" v-if="errors.position_name">
                      {{ errors.position_name[0] }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Code </label>
                    <input
                      type="text"
                      @input="errors.code = null"
                      v-model="code"
                      class="form-control"
                    />
                    <p class="text-danger mt-1" v-if="errors.code">
                      {{ errors.code[0] }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Company Modules </label>

                    <select
                      class="custom-select"
                      multiple
                      data-live-search="true"
                      style="width: 100%; height: 200px"
                      v-model="selectedModulesID"
                    >
                      <option disabled value="">Select modules</option>
                      <option
                        v-for="module in modules"
                        :value="module.company_module.id"
                        :key="module"
                      >
                        <span v-if="module.company_module.parent_id == null">{{
                          module.company_module.module_name
                        }}</span
                        ><span v-if="module.company_module.parent_id != null"
                          >{{ module.company_module.module_name }}({{
                            module.company_module.parent.module_name
                          }})</span
                        >
                      </option>
                    </select>

                    <p class="text-danger mt-1" v-if="errors.grade">
                      {{ errors.grade[0] }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Employee Modules </label>

                    <select
                      class="custom-select"
                      multiple
                      data-live-search="true"
                      style="width: 100%; height: 200px"
                      v-model="selectedEmployeeModulesID"
                    >
                      <option disabled value="">Select modules</option>
                      <option
                        v-for="module in employee_modules"
                        :value="module.employee_module.id"
                        :key="module"
                      >
                        <span v-if="module.employee_module.parent_id == null">{{
                          module.employee_module.module_name
                        }}</span
                        ><span v-if="module.employee_module.parent_id != null"
                          >{{ module.employee_module.module_name }}({{
                            module.employee_module.parent.module_name
                          }})</span
                        >
                      </option>
                    </select>

                    <p class="text-danger mt-1" v-if="errors.grade">
                      {{ errors.grade[0] }}
                    </p>
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
              @click.prevent="addposition"
              type="button"
              class="btn-sc-sm"
            >
              Add
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
                    <label>Position name</label>
                    <input
                      id="okk"
                      type="text"
                      @input="errors.department_name = null"
                      v-model="department.department_name"
                      class="form-control"
                    />
                    <p class="text-danger mt-1" v-if="errors.department_name">
                      {{ errors.department_name[0] }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Code </label>
                    <input
                      i
                      type="text"
                      @input="errors.code = null"
                      v-model="code"
                      class="form-control"
                    />
                    <p class="text-danger mt-1" v-if="errors.code">
                      {{ errors.code[0] }}
                    </p>
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

import moment from "moment";
import axios from "axios";


export default {

  data() {
  return {
    attendances: [],
    startOfMonth:"",  
    endOfMonth:"",
    currentMonth:"",
    currentYear:"",
    attendanceAction:"",
    attenStatus:"",
    currentDate:"",
    attenStatusFinal:"",
    getAttendances:[]
   
  };
},
methods: {

  changeAttenStatus(){

  },


  giveAttendance(){
    this.attendances=[]
    for( var attendance of this.getAttendances){

      var attendanceg=""

      if(attendance.date==this.currentDate){
        attendanceg={
         date:attendance.date,
         status:"Attend",
         logedin:"Not assigned",
         logedout:"Not assigned",
         action:"Attend",
         remarks:"",
        }
        this.attendances.push(attendanceg);

       }else{
        attendanceg={
         date:attendance.date,
         status:"No status",
         logedin:"Not assigned",
         logedout:"Not assigned",
         action:"",
         remarks:"",
       }
       this.attendances.push(attendanceg);


      }


  
    }

    
    //  for(let index = 1; index <= this.endOfMonth; index++){
    //    this.date=index+"/"+this.currentMonth+"/"+this.currentYear;
    //    var attendance=""
    //   if(index==this.currentDate){
    //      attendance={
    //      date:this.date,
    //      status:"No status",
    //      logedin:"Not assigned",
    //      logedout:"Not assigned",
    //      action:this.attenStatus,
    //      remarks:"",
    //     }
    //     this.attendances.push(attendance);

    //    }else{
    //  attendance={
    //      date:this.date,
    //      status:"No status",
    //      logedin:"Not assigned",
    //      logedout:"Not assigned",
    //      action:"",
    //      remarks:"",
    //    }
    //    this.attendances.push(attendance);


    //   }
      
    //  }
   


     axios
          .put("/employee/attendances/"+"1hgfghhfghrrrrrrrrr", {
            year:this.currentYear,
            month:this.currentMonthName,
            attendances: JSON.stringify(this.attendances),
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
      



  },

  format_date(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY hh:mm:ss");
      }
    },
  current(){
 this.startOfMonth = moment().startOf('month').format('YYYY-MM-DD hh:mm');
this.endOfMonth   = parseInt(moment().endOf('month').format('DD')) 
this.currentDate   = moment().format('D/MM/YYYY');
this.currentMonth = moment().format('MM');
this.currentMonthName = moment().format('MMMM');
this.currentYear  = moment().format('YYYY');



  },
  getAttendance(){
    axios
          .get("/employee/attendances/getbymonth/"+this.currentMonthName+"/"+this.currentYear)
          .then((response) => {
            if (response) {
              this.getAttendances=JSON.parse(response.data.data.attendances);
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });

  }

},
mounted:function(){
  this.current();
  this.getAttendance();
  
  

}
}
</script>

        
