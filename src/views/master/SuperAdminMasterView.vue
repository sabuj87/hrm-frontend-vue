<template>
    <div class="wrapper">
      <!-- Preloader -->
      <!-- <div class="preloader flex-column justify-content-center align-items-center">
        <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
      </div> -->
  
      <!-- Navbar -->
      <navbar-view></navbar-view>
      <!-- /.navbar -->
  
      <!--  Sidebar  -->
      <sidebar-view></sidebar-view>
      <!-- /. Sidebar  -->


         <!--  RouterView  -->
      <router-view ></router-view>
       <!-- /  RouterView  -->
  
     
      <!-- /.content-wrapper -->
      <!-- <footer-view></footer-view> -->
      <!-- Control Sidebar -->
      <control-sidebar-view></control-sidebar-view>
      <div class="bs-stepper" ></div>
    
      <!-- /.control-sidebar -->
      <footer-view></footer-view>
    </div>
  </template>
      
      <script>
  import SidebarView from "@/views/dashboard_pages/superadmin/SidebarView.vue";
  import NavbarView from "@/views/dashboard_pages/superadmin/NavbarView.vue";
  import FooterView from "@/views/dashboard_pages/superadmin/FooterView.vue";
  import ControlSidebarView from "@/views/dashboard_pages/superadmin/ControlSidebarView.vue";
  export default {
    components: { SidebarView, NavbarView,  ControlSidebarView, FooterView },

  };
  </script>
      