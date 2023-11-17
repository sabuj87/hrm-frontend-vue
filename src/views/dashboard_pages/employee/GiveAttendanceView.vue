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
                  <h3 class="card-title">Attendance</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
            

                  <div class="row">
           
           <div class="col-lg-3">
            
               <div class="form-group">
                 <label  class="sc" for="exampleInputEmail1"
                   > Date
</label
                 >
                 <input
                   type="date"
                   class="form-control"
                   v-model="date"
                   id="exampleInputEmail1"
                 
                 />
               </div>

             
      
      
            
             </div>
             <div class="col-lg-2">
                    <div class="form-group">
                      <label class="sc" >Attendance</label>
                      <select
                        v-model="attendance"
                        class="form-control "
                        style="width: 100%"
                      >
                   
                        <option selected >Absent</option>
                        <option>Present</option>
                       
                      </select>
                    </div>
                  </div>
        
           <div class="col-lg-5">
         
               <div class="form-group">
                 <label class="sc" for="exampleInputEmail1">Remarks</label><span style="font-size: 80%;" > (Max  25 word)</span>
                 <input
                   type="remarks"
                   class="form-control"
                   v-model="remarks"
                   id="exampleInputEmail1"
            
                 />
               </div>
        

               
              
       
             
           </div>


           <div  class="col-lg-2 pt-1 ">
        
         
            <button @click="addatten" type="button" class="w-100 btn-sc-outline-sm mt-4 " >SAVE</button>


         
        
 
       
     </div>


         </div>   

         <!-- <div style="height:40px;border: 1px solid #DEE2E6 ;background-color: #F2F2F2;"   class="card-header  ">
                 <p class="text-center">Daily Attendance</p>
                </div> -->
         <table class="table text-center table-striped table-bordered">
                <thead>
                  <tr>
                    <th style="width: 10px">#</th>
                    <th >Date</th>
                    <th >Attendance</th>
                    <th >Remarks</th>
                   
                   
                   
       
                  </tr>
                </thead>
                <tbody>
                
                  <tr  v-for="attendance in attendances" :key="attendance" >
                    <td>1.</td>
                    <td>{{attendance.date}}</td>
                    <td>
                      {{attendance.attendance}}
                    </td>
                    <td>
                      {{attendance.remarks}}
                    </td>
                  
                     
                  
                  
                  </tr>
              
                
                 
               
                
                </tbody>
              </table>

                  <button type="button" class="btn-sc  mt-4 mb-4 "  >Submit</button>
                       


                  
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

export default {

  data() {
  return {
    attendances: [],
 
  };
},
methods: {
  addatten() {
    var atten = {
      date: this.date,
      attendance : this.attendance,
      remarks: this.remarks,
  
    };
    this.attendances.push(atten);
  },
}
  

}
</script>
    