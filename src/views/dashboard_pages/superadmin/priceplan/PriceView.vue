<template>
    <div class="wrapper">
      <!-- Preloader -->
      <!-- <div class="preloader flex-column justify-content-center align-items-center">
        <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
      </div> -->
  
      <!-- Navbar -->

      <!-- /.navbar -->
  
      <!-- Main Sidebar Container -->

  
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
                <h3 class="card-title d-inline float-left text-white">Pice plan</h3>
                <router-link  class=" float-right"  :to="{ name: 'superadmin.prices.add' }">

<span class="btn-sc-sm" >Add</span>
</router-link>
                  </div>
             
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table text-center table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Plan name</th>
                      <th>Price</th>
                      <th>Duration</th>
                      <th>Action</th>
                     
                     
         
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="d in data " :key="d" >
                      <td>{{ d.id }}</td>
                      <td>{{ d.name }}</td>
                      <td>
                        {{ d.price }}
                      </td>

                      <td>
                        {{ d.duration }}
                      </td>
                     
                     
                       
                      
                    
                      <td>
                        <a @click.prevent="editprice( d.id )" class="btn-sc-sm ">Edit</a>

                        <a href="/addemployee" class="btn-dn-sm   ml-2">Delete</a>

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
//  import $ from "jquery";
 import axios from "axios";

  export default {
    data() {
      return {
    
        
        data:[]
        
   
      };
    },
  
    methods: {
      

      //get price from database

     getPrice(){


        axios
          .get("/superadmin/prices")
          .then((response) => {

            if(response){
              this.data=response.data.data
              var df=JSON.parse(this.data[0].features)
             console.log(df[0].feature)
             
            }



           

          }).catch((error)=>{
             

           console.log(error.response)

        

        

          
          })
         

      



      },

      editprice(id){
        if(id){
          this.$router.push({ name: "superadmin.prices.edit", query: { id: id } });

        }
    
      
      }
      



     
      
    },
  
    mounted: function () {


      this.getPrice()
    },


  };
  </script>
      