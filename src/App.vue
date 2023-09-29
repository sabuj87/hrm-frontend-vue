<template>
  <dashboard-master-view v-if="this.$route.meta.layout === 'admin'" />
  <master-view v-else-if="this.$route.meta.layout == null" />
</template>
  
  <script>
import DashboardMasterView from "./views/master/DashboardMasterView";
import MasterView from "./views/master/MasterView";

export default {
  components: { DashboardMasterView, MasterView },
};
</script>
  