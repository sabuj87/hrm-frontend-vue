<template>
  <div  class="wrapper">
    <!-- Preloader -->
    <!-- <div class="preloader flex-column justify-content-center align-items-center">
      <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
    </div> -->


    <!-- Content Wrapper. Contains page content -->
    <div  class="content-wrapper bg-white">
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
      <section  class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="card card-primary">

         

    
                <div  class="card-header pc-bg ">
                  <h3 class="card-title">Give Attendance</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
            

                  <div class="row">
           
           <div class="col-lg-3">
            
               <div class="form-group">
                 <label  class="sc" for="exampleInputEmail1"
                   > Month
</label
                 >
                 <select
                        class="form-control "
                        style="width: 100%"
                      >
                   
                        <option selected >{{currentMonthName}}</option>
                       
                      </select>
               </div>

             
      
      
            
             </div>
             <div class="col-lg-3">
            
            <div class="form-group">
              <label  class="sc" for="exampleInputEmail1"
                > Year
</label
              >
              <select
                     class="form-control "
                     style="width: 100%"
                   >
                
                     <option selected >{{currentYear}}</option>
                    
                   </select>
            </div>

          
   
   
         
          </div>
             
        
  


          


         </div>   

         <!-- <div style="height:40px;border: 1px solid #DEE2E6 ;background-color: #F2F2F2;"   class="card-header  ">
                 <p class="text-center">Daily Attendance</p>
                </div> -->
         <table class="table text-center table-striped table-bordered">
                <thead>
                  <tr>
                    <th >Date</th>
                    <th >Status</th>
                    <th >Loged In</th>
                    <th >Loged Out</th>
                    <th >Action</th>
                    <th >Remarks</th>
                   
                   
                   
       
                  </tr>
                </thead>
                <tbody>
                
                  <tr :class="{ disabled: getAttendance.date!=currentDate }"  v-for="getAttendance in getAttendances" :key="getAttendance" >
                    <td>{{getAttendance.date}}</td>
                    <td>{{getAttendance.status}}</td>
                    <td>{{getAttendance.logedin}}</td>
                    <td >{{getAttendance.logedout}}</td>
                
                 
                    <td >
                      <button @click="giveAttendance" type="button" class="btn-sc-sm "  >Attend</button>
                    
                    </td>
                   
                    <td>
                      <input type="text" class="form-control" id="exampleCheck1">

                  
                     </td>
                  
                  
                  </tr>
              
                
                 
               
                
                </tbody>
              </table>

                  <!-- <button @click="giveAttendance" type="button" class="btn-sc  mt-4 mb-4 "  >Submit</button> -->
                       


                  
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
    