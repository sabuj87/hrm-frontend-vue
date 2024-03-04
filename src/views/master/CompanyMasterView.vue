<template>
  <div class="wrapper">
    <!-- Preloader -->
    <!-- <div class="preloader flex-column justify-content-center align-items-center">
        <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
      </div> -->
    <div v-if="msg" id="message_popup" class="alert alert-success">
      <div class="text-center">
        <!-- <img style="color: aqua;" src="https://www.svgrepo.com/show/506432/check-circle.svg" alt="AdminLTELogo" height="60" width="60"> -->

        <span style="font-size: 500%" class="material-symbols-outlined sc">
          task_alt
        </span>

        <!-- <i style="display: block;color:rgb(240, 144, 19);font-size:200%" class="fa-solid fa-check"></i> -->
        <h5 class="mt-3 pc">{{ msg }}</h5>
      </div>
    </div>
    <!-- Navbar -->
    <navbar-view></navbar-view>

    <!-- /.navbar -->

    <!--  Sidebar  -->
    <sidebar-view></sidebar-view>
    <!-- /. Sidebar  -->

    <!--  RouterView  -->
    <router-view @get_message="message_show"></router-view>
    <!-- /  RouterView  -->

    <!-- /.content-wrapper -->
    <!-- <footer-view></footer-view> -->
    <!-- Control Sidebar -->
    <control-sidebar-view></control-sidebar-view>
    <!-- /.control-sidebar -->
    <div class="bs-stepper"></div>

    <footer-view></footer-view>
  </div>
</template>

<script>
import SidebarView from "@/views/dashboard_pages/company/SidebarView.vue";
import NavbarView from "@/views/dashboard_pages/company/NavbarView.vue";
import FooterView from "@/views/dashboard_pages/company/FooterView.vue";
import ControlSidebarView from "@/views/dashboard_pages/company/ControlSidebarView.vue";
export default {
  components: { SidebarView, NavbarView, ControlSidebarView, FooterView },
  data() {
    return {
      msg: "",
      delete_msg: "",
      is_delete: false,
      dataToPass: false,
    };
  },

  provide() {
    return {
      delete_status: "",
    };
  },
  methods: {
    message_show(message) {
      this.msg = message;

      this.message_hide();
    },
    delete_show(message) {
      this.delete_msg = message;

      this.delete_popup_show();

      if (document.getElementById("delete_popup")) {
        const box = document.getElementById("delete_popup");
        box.style.display = "block";
      }
    },
    delete_popup_show() {},

    message_hide() {
      setTimeout(() => {
        document.getElementById("message_popup").style.display = "none";
      }, 2000);

      if (document.getElementById("message_popup")) {
        const box = document.getElementById("message_popup");
        box.style.display = "block";
      }
    },
  },
};
</script>

