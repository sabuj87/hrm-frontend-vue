<template>
  <div class="wrapper">
    <!-- Preloader -->
    <!-- <div class="preloader flex-column justify-content-center align-items-center">
      <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
    </div> -->
    <div v-if="msg" id="message_popup" class="alert alert-success">
    <div class="text-center">
   
      <i style="display: block;color:rgb(240, 144, 19);font-size:200%" class="fa-solid fa-check"></i>
    <h4>{{ msg }}</h4>

    </div>
  
  </div>
    <!-- Navbar -->
    <navbar-view></navbar-view>
    <!-- /.navbar -->

    <!--  Sidebar  -->
    <sidebar-view></sidebar-view>
    <!-- /. Sidebar  -->


       <!--  RouterView  -->
    <router-view @get_message="message_show" ></router-view>
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

  data() {
    return {
      msg: "",
      delete_msg: "",
      is_delete:false,
      dataToPass: false,
    };
    
  },

  provide() {
    return {
      delete_status: "",
    };
  },
  methods:{
    message_show(message) {
  this.msg = message;

     
 
      this.message_hide()
 

},
delete_show(message) {

 
this.delete_msg = message;



this.delete_popup_show();

if ( document.getElementById('delete_popup') ){
  const box = document.getElementById("delete_popup");
box.style.display = "block";


}







},
delete_popup_show(){


},

message_hide() {

   
    

setTimeout(() => {

document.getElementById("message_popup").style.display = "none";

}, 2000);


if ( document.getElementById('message_popup') ){
const box = document.getElementById("message_popup");
box.style.display = "block";


}




},
  }

};
</script>
    