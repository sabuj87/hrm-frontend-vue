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
           
           <div class="col-lg-6">
            
               <div class="form-group">
                 <label  class="sc" for="exampleInputEmail1"
                   > Year
</label
                 >
                 <select
                        class="form-control "
                        v-model="selectedYear"
                        style="width: 100%"
                        @change="getAttendance"
                      >
                   
                        <option :value="2000+n"  v-for="n in 50" :key="n"  >{{ 2000+n }}</option>
                       
                      </select>
               </div>

             
      
      
            
             </div>
             <div class="col-lg-6">
            
            <div class="form-group">
              <label  class="sc" for="exampleInputEmail1"
                > Month
</label
              >
              <select
                     class="form-control "
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
                
                  <tr :class="{ disabled: attendance.date!=currentDate }"  v-for="attendance in attendances" :key="attendance" >
                    <td>{{attendance.date}}</td>
                    <td>{{attendance.status}}</td>
                    <td>{{attendance.logedin}}</td>
                    <td >{{attendance.logedout}}</td>
                
                 
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
    selectedMonth:"",
    selectedYear:"",
    check:false,
    uuid:"",
   
   
  };
},
methods: {

  changeAttenStatus(){

  },


  giveAttendance(){

    this.attendances = this.attendances.map(attendance => {
  if (attendance.date === this.currentDate) {
    return  {
         date:this.currentDate,
         status:"Attend",
         logedin:"Not assigned",
         logedout:"Not assigned",
         action:"Attend",
         remarks:"",
        }
  }
  return attendance;
});
   
    
    
if(this.uuid!=""){



  axios
          .put("/employee/attendances/"+this.uuid, {
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
      

}else{

  axios
          .post("/employee/attendances", {
            year:this.currentYear,
            month:this.currentMonthName,
            attendances: JSON.stringify(this.attendances),
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
  current(){
 this.startOfMonth = moment().startOf('month').format('YYYY-MM-DD hh:mm');
this.endOfMonth   = parseInt(moment().endOf('month').format('DD')) 
this.currentDate   = moment().format('D/MM/YYYY');
this.currentMonth = moment().format('MM');
this.currentMonthName = moment().format('MMMM');
this.currentYear  = moment().format('YYYY');
this.selectedYear=this.currentYear
this.selectedMonth=this.currentMonthName



  },
  getAttendance(){
    axios
          .get("/employee/attendances/getbymonth/"+this.selectedMonth+"/"+this.selectedYear)
          .then((response) => {
            if (response) {

              this.attendances=JSON.parse(response.data.data.attendances);
            
              this.uuid=response.data.data.uuid

            }
          })
          .catch((error) => {
            if(error.response.status==404){
        
              if(this.selectedMonth==this.currentMonthName && this.selectedYear==this.currentYear){

             
                for(let index = 1; index <= this.endOfMonth; index++){
    this.date=index+"/"+this.currentMonth+"/"+this.currentYear;
       var attendance=""
      if(index==this.currentDate){
         attendance={
         date:this.date,
         status:"No status",
         logedin:"Not assigned",
         logedout:"Not assigned",
         action:this.attenStatus,
         remarks:"",
        }
        this.attendances.push(attendance);

       }else{
     attendance={
         date:this.date,
         status:"No status",
         logedin:"Not assigned",
         logedout:"Not assigned",
         action:"",
         remarks:"",
       }
       this.attendances.push(attendance);


      }
      
     }
  
              }else{
                this.attendances=[]
              }

   
         
            }
   
          });

  }

},
mounted:function(){
  this.current();
  this.getAttendance();
  
  

}
}
</script>
    