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
            <div class="col-sm-6">
              <h1 class="m-0 pc" >Create Interview Question</h1>
            </div>
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
              <div class="card card-primary">
           
                <!-- /.card-header -->
                <!-- form start -->

                <form>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Question Type</label>
                          <select
                            v-model="qtype"
                            @change="changeType"
                            class="form-custom-select "
                            style="width: 100%"
                          >
                          <option disabled value="null">Select a type</option>
                            <option selected="selected">MCQ</option>
                            <option >Written</option>
                          </select>
                        </div>
                      </div>
                    </div>


                    <div id="mcqcon">
                    <div  class="row">
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label>Question</label>
                          <input  v-model="mcqques" type="text" class="form-control" />
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Option 1</label>
                          <input v-model="mcqop1" type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Option 2</label>
                          <input v-model="mcqop2" type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Option 3</label>
                          <input v-model="mcqop3" type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Option 4</label>
                          <input v-model="mcqop4" type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Answer option</label>
                          <input v-model="mcqans" type="text" class="form-control" />
                        </div>
                      </div>

                      <div class="col-lg-1 pt-1">
                        <button
                          @click="addmcq"
                          type="button"
                          class=" btn-sc-outline-sm mt-4 mb-4"
                        >
                          ADD
                        </button>
                      </div>
                  

                </div>

                
                <table class="table text-center table-bordered">
                      <thead>
                        <tr>
                          <th style="width: 10px">#</th>
                          <th>Question</th>
                          <th>Options</th>
                          <th>Answer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="mcq in mcqs" :key="mcq">
                          <td>1.</td>
                          <td>{{ mcq.question }}</td>
                          <td>{{ mcq.option1 }},{{ mcq.option2 }},{{ mcq.option3 }},{{ mcq.option4 }}</td>
                          <td>
                            {{ mcq.answer }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button  type="button" class="btn-sc mt-2 mb-4">
                      Submit
                    </button>
            </div>
                <div id="writtencon" >


                <div  class="row">
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label> Question</label>
                          <input v-model="wques" type="text" class="form-control" />
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Point</label>
                          <input v-model="wpoint" type="number" min="0" class="form-control" />
                        </div>
                      </div>
                  
                   
                 
                      <div class="col-lg-1 pt-1">
                        <button
                          @click.prevent="addw"
                          type="button"
                          class="btn-sc-outline-sm mt-4 mb-4"
                        >
                          ADD
                        </button>
                      </div>
                  

            
                  </div>
                  <table class="table text-center table-bordered">
                      <thead>
                        <tr>
                          <th style="width: 10px">#</th>
                          <th>Question</th>
                          <th>Point</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="written in writtens" :key="written">
                          <td>1.</td>
                          <td>{{ written.question}}</td>
                          <td>{{ written.point }}</td>
                      
                        </tr>
                      </tbody>
                    </table>

                    <button type="button" class="btn-sc mt-4 mb-4">
                      Submit
                    </button>
                </div>
                    

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
      import $ from "jquery";
export default {
    data() {
  return {
    qtype:null,
    mcqs:[],
    writtens:[]

  }
  
},
methods:{

    changeType(){

        if(this.qtype=="MCQ"){

           $('#mcqcon').css("display","block")
           $('#writtencon').css("display","none")


        }
        if(this.qtype=="Written"){
            $('#mcqcon').css("display","none")
            $('#writtencon').css("display","block")

            
         }
         if(this.qtype==null){
            $('#mcqcon').css("display","none")
            $('#writtencon').css("display","none")

            
         }




},

 addmcq(){
   var mcq={

     question:this.mcqques,
     option1:this.mcqop1,
     option2:this.mcqop2,
     option3:this.mcqop3,
     option4:this.mcqop4,
     answer:this.mcqans,

    }
    this.mcqs.push(mcq)


 },
 addw(){
    var written={

question:this.wques,
point:this.wpoint,

}
this.writtens.push(written)
   
 }


},

mounted:function(){
    if(this.qtype==null){
            $('#mcqcon').css("display","none")
            $('#writtencon').css("display","none")

            
         }


}



};
</script>
      