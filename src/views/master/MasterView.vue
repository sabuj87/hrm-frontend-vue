<template>


 
    <!-- Header-->
    <header-view></header-view>
    <!-- Router-->
    <router-view ></router-view>

    <!--Footer -->
    <footer-view></footer-view>
    <div class="bs-stepper" ></div>

</template>

<script>
import HeaderView from "@/views/front_pages/common/HeaderView";
import FooterView from "@/views/front_pages/common/FooterView";
export default {
  name: "MasterView",
  components: { HeaderView, FooterView},
}
</script>

