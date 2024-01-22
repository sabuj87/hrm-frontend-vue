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
              <div  class="card-header pc-bg ">
                <h3 class="card-title d-inline float-left text-white">Interview Questions</h3>
                <router-link  class=" float-right"  :to="{ name: 'createiq' }">

<span class="btn-sc-sm" >Create</span>
</router-link>
                  </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">ID</th>
                      <th>Type</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
         
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="interview_question in interview_questions" :key="interview_question">

                        <td>{{ interview_question.id }}</td>
                        <td>{{interview_question.type}}</td>
                        <td>12/16/2023</td>
                      <td>Published</td>
            
                      

                    
                      <td>
                        <router-link   :to="{ name: 'jobapplicathondetails',query: { uuid: interview_question.uuid } }">

<span  ><i class="fa-solid fa-eye"></i></span>
</router-link>             
                 
                      </td>
                    
                    </tr>

        
   
                
                  
                 
                  
                  </tbody>
                </table>
              </div>
              
              <!-- /.card-body -->
              <div class="card-footer clearfix">
                <ul class="pagination pagination-sm m-0 float-right">
                  <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
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
      <!-- /.content-wrapper -->
 
    </div>
  </template>
      
      <script>
import axios from "axios";
  export default { 
    data() {
          return {
            errors: {},
            interview_questions:[]
            
          };

       
        },
        methods: {
          getInterviewquestions(){
     axios.get("company/interview_questions").then((response)=>{
        this.interview_questions=response.data.data;
     }).catch((error)=>{
         console.log(error);  
     })
    },

        },
        mounted:function(){
          this.getInterviewquestions()
        }

     
   
  
  }
  </script>
      