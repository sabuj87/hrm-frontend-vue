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
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0">Add Price Plan</h1>
              </div>
              <!-- /.col -->
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div>
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
                  <div class="card-header">
                    <h3 class="card-title">Price plan</h3>
                  </div>
                  <!-- /.card-header -->
                  <!-- form start -->
  
                  <form>
                    <div class="card-body">
                    <div class="row">
             
                      <div class="col-lg-6">
                       
                          <div class="form-group">
                            <label for="exampleInputEmail1"
                              >Plan Name</label
                            >
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                            
                            />
                          </div>

                        
                 
                 
                       
                        </div>
                   
                      <div class="col-lg-3">
                    
                          <div class="form-group">
                            <label for="exampleInputEmail1">Price</label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                       
                            />
                          </div>
                
                         
                  
                        
                      </div>

                      <div class="col-lg-3">
                    
                    <div class="form-group">
                      <label for="exampleInputEmail1">Duration</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                 
                      />
                    </div>
          
                   
            
                  
                </div>

                    </div>


                    <div class="row">
             
             <div class="col-lg-9">
              
                 <div class="form-group">
                   <label for="exampleInputEmail1"
                     >Features</label
                   >
                   <input
                     type="text"
                     class="form-control"
                     v-model="feature"
                     id="exampleInputEmail1"
                   
                   />
                 </div>

               
        
        
              
               </div>
          
             <div class="col-lg-2">
           
                 <div class="form-group">
                   <label for="exampleInputEmail1">Value</label>
                   <input
                     type="text"
                     class="form-control"
                     v-model="value"
                     id="exampleInputEmail1"
              
                   />
                 </div>
          

                 
                
         
               
             </div>


             <div  class="col-lg-1 pt-1 ">
          
           
              <button @click="addFeature" type="button" class="btn btn-primary mt-4  mb-4" >ADD</button>


           
          
   
         
       </div>


           </div>


           <table class="table text-center table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Feature Name</th>
                      <th>Value</th>
                     
                     
                     
         
                    </tr>
                  </thead>
                  <tbody>
                  
                    <tr v-for="feature in features" :key="feature" >
                      <td>1.</td>
                      <td>{{feature.feature}}</td>
                      <td>
                        {{feature.value}}
                      </td>
                    
                       
                    
                    
                    </tr>
                
                  
                   
                 
                  
                  </tbody>
                </table>

                    <button type="button" class="btn btn-primary  mt-4 mb-4" >Submit</button>
                         
  

                    
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
      <footer-view></footer-view>
      <!-- Control Sidebar -->
      <control-sidebar-view></control-sidebar-view>
      <!-- /.control-sidebar -->
    </div>
  </template>
      
      <script>
  import SidebarView from "@/views/dashboard_pages/superadmin/SidebarView.vue";
  import NavbarView from "@/views/dashboard_pages/superadmin/NavbarView.vue";
  import FooterView from "@/views/dashboard_pages/superadmin/FooterView.vue";
  import ControlSidebarView from "@/views/dashboard_pages/superadmin/ControlSidebarView.vue";
  export default {
    name: "AddEmployeeView",
    components: { SidebarView, NavbarView, FooterView, ControlSidebarView },
  
    data() {
      return {
        name: "",
        features:[],
   
      };
    },
  
    methods: {
      userInfo() {},
      addFeature(){

        var feature={feature:this.feature,value:this.value}
        this.features.push(feature);



      }
    },
  
    mounted: function () {
      this.name = JSON.parse(localStorage.getItem("user")).user.name;
    },
  };
  </script>
      