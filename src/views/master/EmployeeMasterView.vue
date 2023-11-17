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

    <!-- Control Sidebar -->
    <control-sidebar-view></control-sidebar-view>
    <div class="bs-stepper" ></div>
    <!-- /.control-sidebar -->
  </div>
</template>
    
    <script>
import SidebarView from "@/views/dashboard_pages/employee/SidebarView.vue";
import NavbarView from "@/views/dashboard_pages/employee/NavbarView.vue";
// import FooterView from "@/views/dashboard_pages/employee/FooterView.vue";
import ControlSidebarView from "@/views/dashboard_pages/employee/ControlSidebarView.vue";
export default {
  components: { SidebarView, NavbarView, ControlSidebarView },

};
</script>
    