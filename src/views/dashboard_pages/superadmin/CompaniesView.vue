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
                <!-- <table class="table text-center table-bordered">
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
                </table> -->

                <DataTable
                        :data="companies"
  
                        class="display table table-striped table-bordered mt-2"
                      >
                        <thead>
                          <tr>
                            <th>Company ID</th>
                            <th>Company Name</th>
                            <th>Category</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </DataTable>



                <div class="bs-stepper"></div>
              </div>
              <!-- /.card-body -->
              <div class="card-footer clearfix">
               
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
 import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
DataTable.use(DataTablesCore);




      export default {
        components: { DataTable },
    
          
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
              
            var companies = response.data.company;
            for( var company of companies){

              var id=company.id;
              var comapny_name=JSON.parse(
                  company.basic_information
                ).company_name
              var company_catgory=null;
              var company_address=company_address!=null ? JSON.parse(
                  company.company_address
                ).address_line_1 : null
              
                var company_email=JSON.parse(
                  company.basic_information
                ).sigin_email
                var company_status=company.status
                var company_price=company.price.price.name
                var action =
                '<button onclick="handleClick(' +
                id +
                ')" class="btn btn-sm btn-default"><i class="fa-solid fa-eye"></i></button>';
      

                this.companies.push([id,comapny_name,company_catgory,company_address,company_email,company_status,company_price,action])


           
            }
  
     
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