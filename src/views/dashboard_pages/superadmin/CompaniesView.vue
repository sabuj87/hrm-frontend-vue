<template>
    <div class="wrapper">
      <!-- Preloader -->
      <!-- <div class="preloader flex-column justify-content-center align-items-center">
        <img class="animation__shake" src="dist/img/AdminLTEo.png" alt="AdminLTELogo" height="60" width="60">
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
              <div  class="card-header pc-bg ">
                    <h3 class="card-title text-white">Companies</h3>
                  </div>
             
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table text-center table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Companay name</th>
                      <th>Category</th>
                      <th>Address</th>
                      <th>Email</th>
                     
                      <th>Status</th>
                      <th>Price</th>
                      <th>Action</th>
                     
         
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="company in companies" :key="company">
                      <td>1.</td>
                      <td>{{ JSON.parse(
                  company.basic_information
                ).company_name}} </td>
                      <td>
                       {{  company.company_category_id }}
                      </td>

                      <td v-if="company.company_address!=null">
                        
                        {{ JSON.parse(
                  company.company_address
                ).address_line_1}}
                      </td>
                      <td v-else>
                     
                      </td>

                      <td>{{ JSON.parse(
                  company.basic_information
                ).sigin_email}} </td>

                      <td>
                        
                       Confirmed
                      </td>
                      <td v-if="company.price!=null">

                        {{ company.price.price.name }}
                        
                       
                      </td>
                      <td v-else>
                     
                      </td>

                     
                     
                       
                      
                    
                      <td>
                        <a href="/addemployee" class="btn-sc-sm">View</a>

                        <a href="/addemployee" class="btn-dn-sm ml-2 ">Delete</a>

                      </td>
                    
                    </tr>

                  
               
                 
                  
                   
                 
                  
                  </tbody>
                </table>
                <div class="bs-stepper"></div>
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
    
    </div>
  </template>
      
      <script>

 import axios from "axios";




      export default {
    
    
          
    data() {
      return {
        name:"",
        companies:[],
      }
    
    },
    
    
        methods:{
    
          

          getcompanies() {
        axios
          .get("/superadmin/companies")
          .then((response) => {
            if (response) {
              
              this.companies = response.data.company;
  
     
            }
          })
          .catch((error) => {
            console.log(error);
            
          });
      },
    
    
        },
    
        mounted: function(){
          this.name=JSON.parse(localStorage.getItem("user")).user.name
          this.getcompanies();
        }
      
      }
      </script>