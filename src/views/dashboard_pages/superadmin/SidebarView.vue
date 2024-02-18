<template>
<aside  class="main-sidebar sidebar-light-primary elevation-2 ">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link text-center">
      <img src="/assets/images/logo/logo.png" alt="logo" class=" text-center" style="height:50px;width:100px;">
    </a>


    <div class="user-panel  py-3  d-flex">
        <div class="image">
          <img height="70px" width="50px" src="/assets/images/logo/user.png" class="ml-3" alt="User Image">
        </div>
        <div class="info ml-2">
          <a href="#" style="color:gray" class="d-block">MR Brownlly</a>
        </div>
       
      </div>
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->


      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->
                     <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'superadmin-dashboard' }">
              <i class="nav-icon fas fa-tachometer-alt sc"></i>
              <p>Dashboard</p>
            </router-link>
             
              </li>
          <li class="nav-item">
            <a href="#" class="nav-link ">
              <i class="nav-icon fas fa-chart-pie sc"></i>
              <p>
                Manage Company
                <i class="right fas fa-angle-left sc"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">


              <li class="nav-item">
                <router-link class="nav-link "  :to="{ name: 'superadmin-companies' }">
              <i class="nav-icon fas fa-tachometer-alt sc"></i>
              <p>Companies</p>
            </router-link>
             
              </li>
              <li class="nav-item">
                <router-link class="nav-link "  :to="{ name: 'pendingcompanies' }">
              <i class="nav-icon fas fa-tachometer-alt sc"></i>
              <p>Pending</p>
            </router-link>
             
              </li>
          
            
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tree sc"></i>
              <p>
                Manage Module
                <i class="fas fa-angle-left right sc"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'superadmin.modules' }">
              <i class="nav-icon fas fa-tachometer-alt sc"></i>
              <p>Company Modules</p>
            </router-link>
             
              </li>
              <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'superadmin.employeemodules' }">
              <i class="nav-icon fas fa-tachometer-alt sc"></i>
              <p>Employee Modules</p>
            </router-link>
             
              </li>
          
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tree sc"></i>
              <p>
                Manage Price Plan
                <i class="fas fa-angle-left right sc"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'superadmin.prices' }">
              <i class="nav-icon fas fa-tachometer-alt sc"></i>
              <p>Price plan</p>
            </router-link>
             
              </li>
          
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tree sc"></i>
              <p>
                Manage Tax
                <i class="fas fa-angle-left right sc"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link class="nav-link"  :to="{ name: 'superadmin.taxrule' }">
              <i class="nav-icon fas fa-tachometer-alt sc"></i>
              <p>Tax Rule</p>
            </router-link>
             
              </li>
          
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table sc"></i>
              <p>
                Roles Permissions
                <i class="fas fa-angle-left right sc"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/tables/simple.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Simple Tables</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/data.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>DataTables</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/jsgrid.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>jsGrid</p>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table sc"></i>
              <p>
                Settings
                <i class="fas fa-angle-left right sc"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/tables/simple.html" class="nav-link">
                  <i class="far fa-circle nav-icon sc"></i>
                  <p>Simple Tables</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/data.html" class="nav-link">
                  <i class="far fa-circle nav-icon sc"></i>
                  <p>DataTables</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/jsgrid.html" class="nav-link">
                  <i class="far fa-circle nav-icon sc"></i>
                  <p>jsGrid</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
    
    <script>
export default {};
</script>
    
    <style>


.active-link{
  background-color: red;
  color: white;
}



</style>