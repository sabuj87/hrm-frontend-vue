<template>

  <master-view v-if="this.$route.meta.layout == null" />
  <super-admin-master-view v-if="this.$route.meta.layout == 'superadmin'" />
  <company-master-view v-if="this.$route.meta.layout == 'company'"  />
  <employee-master-view v-if="this.$route.meta.layout == 'employee'" />

  
</template>
  
  <script>


import MasterView from "./views/master/MasterView";
import SuperAdminMasterView from "./views/master/SuperAdminMasterView";
import CompanyMasterView from "./views/master/CompanyMasterView";
import EmployeeMasterView from "./views/master/EmployeeMasterView";

export default {
  components: { MasterView,SuperAdminMasterView,CompanyMasterView,EmployeeMasterView},


};
</script>
  